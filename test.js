document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-container input");

    searchInput.addEventListener("focus", () => {
        searchInput.style.width = "350px"; // Augmente encore plus
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.width = "300px"; // Taille normale agrandie
    });
});
