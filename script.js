document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; /* Hide navbar */
    } else {
        navbar.style.display = 'block'; /* Show navbar */
    }
});


function toggleContent(id, button) {
    var content = document.getElementById(id);
    if (content.classList.contains('expand')) {
        content.classList.remove('expand');
        button.textContent = 'Read More';
    } else {
        content.classList.add('expand');
        button.textContent = 'Read Less';
    }
}