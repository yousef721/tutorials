let icon = document.querySelector(".icon");
let nav = document.querySelector("nav")
let x = document.querySelector(".close")
let links = document.querySelectorAll("a");

icon.addEventListener("click", () => nav.classList.add("open"));

x.addEventListener("click", closeNav)

document.addEventListener("keyup", (e) => {
    e.key === "Escape"? closeNav() : null;
})

links.forEach((e) => e.addEventListener("click", closeNav))

function closeNav() {
    nav.classList.remove("open")
}