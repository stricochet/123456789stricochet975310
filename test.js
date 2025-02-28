// Gestion des contrôles du lecteur vidéo
const video = document.querySelector('video');
const playButton = document.querySelector('.video-controls button:nth-child(1)');
const pauseButton = document.querySelector('.video-controls button:nth-child(2)');
const fullscreenButton = document.querySelector('.video-controls button:nth-child(3)');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});

fullscreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari et Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});