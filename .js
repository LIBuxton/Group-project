// JavaScript for hover effect
const links = document.querySelectorAll('.hoverable-link');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});