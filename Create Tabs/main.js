let tabs = document.querySelector(".tabs");
let listTabs = document.querySelectorAll(".tabs li");
let divContent = document.querySelectorAll(".content div");
tabs.addEventListener("click", (e) => {
    listTabs.forEach((e) => {
        e.classList.remove("active");
    })
    e.target.classList.add("active");
    divContent.forEach((e) => {
        e.style.display = "none"
    })
    document.querySelector(e.target.dataset.cont).style.display = "block"
});