import os
import json
import yt_dlp

output_filename = "songs.json"

songs_data = []
source_type = None

# 1. Check if a YouTube playlist/video link was provided beforehand (you can change this variable)
# Set this to a string like "https://www.youtube.com/playlist?list=..." or leave it empty/None
yt_link = None

if yt_link:
    print(f"Using provided YouTube link: {yt_link}")
    source_type = "yt_link"
# 2. Fallback to lol.json if yt_link is not provided
elif os.path.exists("songs.json"):
    print("No YouTube link provided. Falling back to 'songs.json'...")
    with open("songs.json", "r", encoding="utf-8") as f:
        songs_data = json.load(f)
    source_type = "json_file"
else:
    print("Neither a YouTube link nor 'songs.json' was found.")
    user_input = input("Enter a YouTube playlist/video URL (or press Enter to skip): ").strip()

    if user_input:
        yt_link = user_input
        source_type = "yt_link"
    else:
        # 4. Both not found / skipped -> Give error and exit
        print("Error: No valid data source (YouTube link or 'songs.json') provided. Exiting program.")
        exit(1)

# If the user supplied a YouTube link, extract metadata dynamically using yt-dlp
if source_type == "yt_link":
    print("Extracting metadata from the YouTube link (this may take a moment)...")

    extract_opts = {
        'extract_flat': True,
        'quiet': True,
    }

    try:
        with yt_dlp.YoutubeDL(extract_opts) as ydl:
            info_dict = ydl.extract_info(yt_link, download=False)
            entries = info_dict.get('entries', [info_dict])

            for entry in entries:
                if not entry:
                    continue
                song_dict = {
                    "id": entry.get("id"),
                    "title": entry.get("title"),
                    "thumbnail": entry.get("thumbnails", [{}])[-1].get("url") if entry.get("thumbnails") else "",
                    "url": entry.get("url") or f"https://www.youtube.com/watch?v={entry.get('id')}",
                    "time": entry.get("timestamp", 0),
                    "artist": entry.get("uploader") or entry.get("channel", "Unknown Artist"),
                    "albums": entry.get("album"),
                    "date": entry.get("upload_date")
                }
                songs_data.append(song_dict)

    except Exception as e:
        print(f"Error extracting metadata from YouTube link: {e}")
        exit(1)

if not songs_data:
    print("Error: No songs found to process. Exiting.")
    exit(1)

# Configure yt-dlp options for downloading audio
ydl_opts = {
    'format': 'bestaudio/best',
    'outtmpl': os.path.join('%(id)s.%(ext)s'),
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
    'quiet': False
}

updated_songs_data = []

# Download each song and track the new local paths
print(f"\nStarting download of {len(songs_data)} items...")
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    for song in songs_data:
        url = song.get("url")
        song_id = song.get("id")

        if not url:
            print(f"Skipping song '{song.get('title')}' due to missing URL.")
            continue

        print(f"\nDownloading: {song.get('title')} ({url})")

        try:
            ydl.extract_info(url, download=True)
            local_filename = os.path.join(f"{song_id}.mp3")

            updated_song = song.copy()
            updated_song["local_path"] = local_filename
            updated_songs_data.append(updated_song)
            print(f"Saved to: {local_filename}")

        except Exception as e:
            print(f"Failed to download {url}. Error: {e}")

# Save the final data to songs.json
with open(output_filename, "w", encoding="utf-8") as f:
    json.dump(updated_songs_data, f, indent=4)

print(f"\nAll operations complete! Data compiled and saved to {output_filename}")
