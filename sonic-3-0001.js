function vote(type) {
    let currentVote = localStorage.getItem('userVote');

    if (currentVote === type) {
        // Retirer le vote si l'utilisateur veut annuler
        localStorage.removeItem('userVote');
        document.getElementById('like-button').classList.remove('active');
        document.getElementById('dislike-button').classList.remove('active');
    } else if (!currentVote) {
        // Enregistrer un nouveau vote
        localStorage.setItem('userVote', type);
        document.getElementById('like-button').classList.toggle('active', type === 'like');
        document.getElementById('dislike-button').classList.toggle('active', type === 'dislike');
    } else {
        alert("Vous avez déjà voté ! Si vous voulez modifier votre choix, cliquez sur le bouton correspondant.");
    }
}

window.onload = function() {
    let voteType = localStorage.getItem('userVote');
    if (voteType === 'like') {
        document.getElementById('like-button').classList.add('active');
    } else if (voteType === 'dislike') {
        document.getElementById('dislike-button').classList.add('active');
    }
}
