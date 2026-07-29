let sidebarSearchBtn = document.getElementById("sb_search");
let sidebarInputField = document.getElementById("sb_input");
sidebarSearchBtn.addEventListener("click", () => {

    sidebarInputField.hidden = !sidebarInputField.hidden;
  if (sidebarSearchBtn.classList.contains("search_active")) {
        sidebarSearchBtn.classList.remove("search_active")
  } else {
        sidebarSearchBtn.classList.add("search_active")
    }
})
