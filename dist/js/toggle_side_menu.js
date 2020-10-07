const toggleBtn = document.getElementById("menu-toggle");

function toggleSideMenu() {
  const sideMenu = document.getElementById("sidebar-wrapper");
  sideMenu.classList.toggle("invisible");
}

toggleBtn.addEventListener("click", toggleSideMenu);
