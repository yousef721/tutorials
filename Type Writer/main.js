const message = ["This is typing effect!"];
const speed = 100;
let textPosition = 0;

function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span>|</span>'
    if(textPosition++ < message[0].length)
    setTimeout(typewriter, speed)
}
window.addEventListener("load", typewriter)