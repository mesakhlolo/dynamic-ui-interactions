function initDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!trigger || !menu) return;

    trigger.addEventListener("click", function () {
      menu.classList.toggle("visible");
    });
  });
}

initDropdowns();
