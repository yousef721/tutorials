let backgroundDiv = document.querySelector(".color");
let span = document.querySelector("span")
let hexColors = "0123456789ABCDEF"
// Generate Color 
function generateColor() {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    span.style.backgroundColor = randomColor;
    backgroundDiv.style.backgroundColor = randomColor;
    // Convert Hex Color To RGB(r,g,b)
    let result = randomColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    backgroundDiv.innerHTML = `<p>HEX: ${randomColor}</p>
    <p>RGB: (${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})</p>`;
};
span.addEventListener("click", generateColor)