const toggleButton = document.querySelector('#toggle-button');
toggleButton.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

function changeImage() {
	let img = document.getElementById('toggle-button').src;
	if(img.indexOf('moon.svg') != -1) {
		document.getElementById('toggle-button').src = 'images/sun.svg';
	} else {
		document.getElementById('toggle-button').src = 'images/moon.svg';
	}
}