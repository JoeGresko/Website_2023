function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}

function change_image () {
	document.getElementById("img_block").classList.remove('img_state1');
	document.getElementById("img_block").classList.add('img_state2');
}