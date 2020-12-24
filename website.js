const button = document.querySelector("#button");
const body = document.querySelector("body");
const change = document.querySelectorAll(".change");
const music = new Audio('preview_site.mp3');
music.volume = 1;
music.loop = "true";

button.addEventListener("click", () => animate());

function animate() {
    button.innerHTML="Happy Holidays!"
    music.play();
    body.classList.add("anim");
    change.forEach(element => element.classList.add("change-click"));
}