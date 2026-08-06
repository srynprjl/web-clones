# Stremio Clone

A visually appealing, web-based clone of the Stremio streaming platform. This project recreates the modern and intuitive user interface of Stremio using pure HTML and CSS, providing a functional prototype for discovering movies, series, and more.

## Features

- **Modern Dashboard:** A sleek, dark-themed interface inspired by the original Stremio app.
- **Sidebar Navigation:** Easy access to Home, Explore, Video Library, Add-ons, and Settings.
- **Categorized Content:** Sections for Popular Movies, Series, Featured content, YouTube channels, and Public Domain movies.
- **Seamless Navigation:** Utilizes an `iframe`-based architecture for smooth transitions between pages without refreshing the entire application.
- **Search Functionality:** A styled search bar for simulated content discovery.

## Technologies Used

- **HTML5:**
- **CSS3:** 

## Project Structure

```text
stremio-clone/
├── index.html          # Main entry point (Shell with Sidebar & Header)
├── css/
│   ├── styles.css      # Core application styling
│   └── media-query.css # Responsiveness rules
├── img/                # UI assets and content posters
└── pages/              # Individual sub-pages
    ├── home.html       # Featured & Popular content
    ├── explore.html    # Content discovery page
    ├── addons.html     # Add-ons management
    ├── settings.html   # User preferences
    └── video_library.html # Personal library
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/srynprjl/stremio-clone.git
   ```
2. Open `index.html` in your favorite web browser.


## License

This project is for educational purposes as a UI/UX clone exercise. All movie/series assets and the Stremio logo are property of their respective owners.
