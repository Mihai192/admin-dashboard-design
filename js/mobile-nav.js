let sidebar = document.querySelector('.sidebar');

let hamburgerMenu = document.querySelector('.menu');
let closeMenu     = document.querySelector('.close-sidebar');

closeMenu.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});