const dropdownButton = document.querySelector(".dropdown-trigger");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});
