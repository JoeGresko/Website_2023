function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}

function change_image_state (image) {
		document.getElementById("img_block");
		img_block.className = '';
		document.getElementById("img_block").classList.add('images')
		document.getElementById("img_block").classList.add('img_state' + image);
	}