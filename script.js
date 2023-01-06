setTimeout(function (){
	location.href = 'index.html';
}, 2000);

function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}