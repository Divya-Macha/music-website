const audio = document.getElementById("myAudio");
const button = document.getElementById("playBtn");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "Pause";
    } else {
        audio.pause();
        button.textContent = "Play";
    }
});
