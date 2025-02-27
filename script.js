document.addEventListener("DOMContentLoaded", function () {
    const blocs = document.querySelectorAll(".bloc");

    blocs.forEach(bloc => {
        bloc.addEventListener("click", () => {
            alert("Tu as cliqué sur " + bloc.textContent);
        });
    });
});