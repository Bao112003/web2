//menu
const menu = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")
const overlay = document.querySelector("#overlay");

menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});
function myFunction(x) {
    x.classList.toggle("change");
}
overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});