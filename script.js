function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}

function change_image_state (image) {
	if (image == 0) {
		document.getElementById("img_block").classList.remove('img_state3');
		document.getElementById("img_block").classList.add('img_state1');
	}else {
		document.getElementById("img_block").classList.remove('img_state' + (image - 1));
		document.getElementById("img_block").classList.add('img_state' + image);
	}
}