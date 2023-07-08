let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let maxLength = document.querySelector("input").maxLength;
let input = document.querySelector("input");

count.innerHTML = maxLength;

input.addEventListener("input", () => {
    count.innerHTML = maxLength - input.value.length;
    count.innerHTML == 0 ? count.classList.add("zero"): count.classList.remove("zero");
    progress.style.width = `${(input.value.length * 100) / maxLength}%`
    progress.style.width == `100%` ? progress.style.backgroundColor = `red` : false;
})