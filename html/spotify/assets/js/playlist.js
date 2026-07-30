const playlists = [
  {
    "id": "play1",
    "type": "playlist",
    "title": "banger titles",
    "author": "srynprjl",
    "thumbnail_url": "https://i.pinimg.com/736x/66/7a/7f/667a7f247077806fbedd7a22e973f77f.jpg",
  },
  {
    "id": "play2",
    "type": "playlist",
    "title": "nepali vibes",
    "author": "srynprjl",
    "thumbnail_url": "https://i.pinimg.com/736x/78/b8/55/78b855b6a8288b12914b146831eb36d8.jpg",
  },
  {
    "id": "play3",
    "type": "playlist",
    "title": "final vibes",
    "author": "srynprjl",
    "thumbnail_url": "https://i.pinimg.com/736x/a7/17/f8/a717f8836c3e566d25763b24982662d6.jpg",
  },
  {
    "id": "auth1",
    "type": "author",
    "title": "Justin Bieber",
    "thumbnail_url": "https://i.pinimg.com/736x/af/01/b2/af01b28b279923c45ff70f4027f23834.jpg"
  }
]

const playlistContainer = document.getElementById('playlist_ctn');
let html_template = ""
playlists.forEach((data) => {
  if (data.type == "playlist") {
    html_template = `<div class="playlist_item">
          <div class="img" >
              <img src="${data.thumbnail_url}" />

          </div>
          <div class="details">
              <div class="name">${data.title}</div>
              <div class="subtitle">Playlist . ${data.author}</div>
          </div>
      </div>`
  } else {
    html_template = `
      <div class="playlist_item">
          <div class="img" >
              <img src="${data.thumbnail_url}" />

          </div>
          <div class="details">
              <div class="name">${data.title}</div>
              <div class="subtitle">Author</div>
          </div>
      </div>`
  }
  playlistContainer.innerHTML += html_template

})

let defaultPlaylist = "play1"