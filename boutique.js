const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('focus', () => {
   searchInput.classList.add('expanded');
});
searchInput.addEventListener('blur', () => {
   searchInput.classList.remove('expanded');
});

function toggleFavorite(button) {
    // Ajoute ou enlève la classe 'active' au bouton cliqué
    button.classList.toggle('active');
}

