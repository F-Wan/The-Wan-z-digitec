

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});