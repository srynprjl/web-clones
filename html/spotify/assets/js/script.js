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



let playlistHeader = document.getElementById("playlist-header-item");




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



