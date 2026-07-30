


const sidebarSearchBtn = document.getElementById("sb_search");
const sidebarInputField = document.getElementById("sb_input");

sidebarSearchBtn.addEventListener("click", () => {
    sidebarInputField.hidden = !sidebarInputField.hidden;
  if (sidebarSearchBtn.classList.contains("search_active")) {
        sidebarSearchBtn.classList.remove("search_active")
  } else {
        sidebarSearchBtn.classList.add("search_active")
    }
})

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

let playbar = document.getElementById("bar");
playbar.addEventListener("input", (e) => {
  playbar.style.setProperty('--value', `${e.target.value}%`);
})




let volume = document.getElementById("volume");
let volIcon = document.getElementById("vol-icon");

function updateVolume(e){
  if(e.target.value == 0){
    volIcon.setAttribute("src", "assets/icons/volume-x.svg")
  } else if (e.target.value > 0 && e.target.value <= 33){
    volIcon.setAttribute("src", "assets/icons/volume.svg") 
  } else if (e.target.value > 30 && e.target.value <= 66){
    volIcon.setAttribute("src", "assets/icons/volume-1.svg") 
  } else {
  volIcon.setAttribute("src", "assets/icons/volume-2.svg") 
  }
  volume.style.setProperty('--value', `${e.target.value}%`);
}

volume.addEventListener("input", updateVolume)
volume.addEventListener("change", updateVolume)
const songs = []

// audio manipulation
