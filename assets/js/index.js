var burgerMenu = document.querySelector(".burger_menu");
var menu = document.querySelector(".mobile_navbar");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("transform");
  menu.classList.toggle("show");
});
