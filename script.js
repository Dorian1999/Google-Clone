document.addEventListener('DOMContentLoaded', (event) => {
    const searchBox = document.getElementById('search-box');

    searchBox.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

function search() {
    const query = document.getElementById('search-box').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
