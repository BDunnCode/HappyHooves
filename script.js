function toggleNav() {
  const selectNav = document.querySelector("nav");
  selectNav.classList.toggle("hide-nav");
  const selectOuterGrid = document.querySelector(".outer-grid");
  selectOuterGrid.classList.toggle("expand-outer-grid");
}
