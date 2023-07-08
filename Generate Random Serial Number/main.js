let generateElement = document.querySelector(".generate")
let serialElement = document.querySelector(".serial")

generateElement.addEventListener("click", (e) => {
    let characters = "1234567890abcdefgijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ";
    let characterCount = 10;
    let serial = "";
    for (let i = 0; i < characterCount; i++) {
        serial += characters[Math.trunc(Math.random() * characters.length)]
    }
    serialElement.innerHTML = serial;
})
