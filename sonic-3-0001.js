const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const muteBtn = document.getElementById("muteBtn");
const controls = document.querySelector(".controls");

let isPlaying = false;
let isMuted = false;
let isInactivityTimer = false;

function togglePlayPause() {
    if (isPlaying) {
        video.pause();
        playPauseBtn.innerHTML = "▶️";
    } else {
        video.play();
        playPauseBtn.innerHTML = "⏸️";
    }
    isPlaying = !isPlaying;
}

function toggleMute() {
    isMuted = !isMuted;
    video.muted = isMuted;
    muteBtn.innerHTML = isMuted ? "🔇" : "🔊";
}

function updateProgressBar() {
    progressBar.value = (video.currentTime / video.duration) * 100;
}

function handleInactivity() {
    controls.style.opacity = 0;
    clearTimeout(isInactivityTimer);
    isInactivityTimer = setTimeout(() => {
        if (!isPlaying) video.play();
    }, 10000);
}

video.addEventListener("timeupdate", updateProgressBar);
video.addEventListener("mousemove", () => {
    controls.style.opacity = 1;
    handleInactivity();
});

playPauseBtn.addEventListener("click", togglePlayPause);
muteBtn.addEventListener("click", toggleMute);

progressBar.addEventListener("input", () => {
    video.currentTime = (progressBar.value / 100) * video.duration;
    var player = videojs('my-video', {
    plugins: {
        chromecast: {}
    }
});

});

setInterval(handleInactivity, 5000);
