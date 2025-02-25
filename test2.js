document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("my-video");
    const playPauseButton = document.getElementById("play-pause");
    const progressBar = document.getElementById("progress");
    const fullscreenButton = document.getElementById("fullscreen");
    const castButton = document.getElementById("cast");
    const likeButton = document.getElementById("like-button");
    const dislikeButton = document.getElementById("dislike-button");

    // Lecture/Pause
    playPauseButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "⏸️";
        } else {
            video.pause();
            playPauseButton.textContent = "▶️";
        }
    });

    // Mise à jour de la barre de progression
    video.addEventListener("timeupdate", () => {
        const progressPercent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progressPercent + "%";
    });

    // Plein écran
    fullscreenButton.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                console.error("Erreur plein écran:", err);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Bouton Cast (Google Cast API)
    if (window.chrome && window.chrome.cast) {
        castButton.style.display = "block"; // Afficher le bouton si Cast est dispo

        castButton.addEventListener("click", () => {
            const castSession = chrome.cast.requestSession();
            if (castSession) {
                const mediaInfo = new chrome.cast.media.MediaInfo(video.src, "video/mp4");
                const request = new chrome.cast.media.LoadRequest(mediaInfo);
                castSession.loadMedia(request).catch(err => console.error("Erreur Cast:", err));
            }
        });
    } else {
        castButton.style.display = "none"; // Cacher le bouton si Cast n'est pas dispo
    }

    // Like / Dislike
    function vote(type) {
        if (type === "like") {
            likeButton.classList.add("active");
            dislikeButton.classList.remove("active");
        } else {
            dislikeButton.classList.add("active");
            likeButton.classList.remove("active");
        }
    }

    likeButton.addEventListener("click", () => vote("like"));
    dislikeButton.addEventListener("click", () => vote("dislike"));
});