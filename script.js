function show_popup_main () {
	var popupMain = document.getElementById('popup-main');
	popupMain.classList.add('show')
}

function hide_popup_main () {
	var popupMain = document.getElementById('popup-main');
	popupMain.classList.remove('show')
}
//--------VIDEOS-----------------------------------------------------------------------------------------------------------------------------------


//--------VIDEOS-----------------------------------------------------------------------------------------------------------------------------------

function showPopup () {
	var popup = document.getElementById('popup');
	popup.classList.add('show')
}

function hidePopup () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
}

function showPopup2 () {
	var popup = document.getElementById('popup');
	popup.classList.remove('show')
  	var popup2 = document.getElementById("popup-2");
  	popup2.classList.add("show")
}

function hidePopup2 () {
	var popup2 = document.getElementById('popup-2');
	popup2.classList.remove('show')
}

function validate_text_box(x) {
    if (document.getElementById("text" + x).value.trim() == "") {
        document.getElementById("text" + x).classList.add("showred");
	}else{
	document.getElementById("text" + x).classList.remove("showred");
     }
  };

function validate_all_box () {
	validate_text_box(1);
	validate_text_box(2);
	validate_text_box(3);
	validate_text_box(4);
	if (document.getElementById("text1").classList.contains("showred") ||
		document.getElementById("text2").classList.contains("showred") ||
		document.getElementById("text3").classList.contains("showred") ||
		document.getElementById("text4").classList.contains("showred")) {
		validate_text_box(1);
		validate_text_box(2);
		validate_text_box(3);
		validate_text_box(4);
	}else {
		showPopup2();
	}
}





// TELEPHONE-------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------















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