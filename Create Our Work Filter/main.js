let switcher = document.querySelector(".switcher");
let switcherList = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery .all")

switcher.addEventListener("click", (e) => {
    switcherList.forEach((e) => {
        e.classList.remove("active")
    })
    e.target.classList.add("active")
    imgs.forEach((e) => {
        e.style.display = "none"
    })
    document.querySelectorAll(e.target.dataset.cat).forEach((e) => {
        e.style.display = "block"
    })
})