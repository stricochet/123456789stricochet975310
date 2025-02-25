const video = document.getElementById('video-player');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const controls = document.getElementById('controls');
const skipBack = document.getElementById('skip-back');
const skipForward = document.getElementById('skip-forward');

let controlsTimeout;

video.addEventListener('play', () => {
    playPauseButton.textContent = 'Pause';
});

video.addEventListener('pause', () => {
    playPauseButton.textContent = 'Play';
});

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', (e) => {
    const value = e.target.value;
    video.currentTime = (value / 100) * video.duration;
});

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

skipBack.addEventListener('click', () => {
    video.currentTime -= 10;
});

skipForward.addEventListener('click', () => {
    video.currentTime += 10;
});

// Show controls when video is played
video.addEventListener('mousemove', () => {
    controls.classList.add('show');
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
        controls.classList.remove('show');
    }, 10000); // Hide controls after 10 seconds of inactivity
});
