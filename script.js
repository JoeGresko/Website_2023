function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}

function showPopup2 () {
	document.getElementById("popup-2").classList.add('show');
}
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});