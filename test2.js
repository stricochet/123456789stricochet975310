// Exemple de fonctionnalité JavaScript : Changement de couleur du bouton au survol
const button = document.querySelector('.banner button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#ff0000';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#e50914';
});