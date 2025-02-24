document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-container input");

    searchInput.addEventListener("focus", () => {
        searchInput.style.width = "300px";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.width = "250px";
    });
});
