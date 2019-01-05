///////////////Jump menu with active class and smooth scroll/////////////////////
////////////////https://codepen.io/eksch/pen/xwdOeK////////////////////////////

//=================== mobile scrolling =======================


$(document).ready(function() {
		//only for small screens
	if ($(window).height() < 501 || $(window).width() < 551) {
	$("#menu").on("click", "a", function(event) {
		//to cancel of standard handling onclick
		event.preventDefault();

		//take an attribute href
		var id = $(this).attr('href'),

			//to find a height from start of page to block with link
			top = $(id).offset().top;

		//to animate transition to 'top' for 1500ms
		$('body,html').animate({ scrollTop: top }, 400);
	});
	}
});

//=================== mark and follow menu ==========

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance + 10) {
						$('.side-menu li a.active').removeClass('active');
						$('.side-menu li a').eq(i).addClass('active');
				}
		});
}).scroll();


//========================= side menu + burger(menu-btn_active) =====================
$(document).ready(function() {
	$('.openButton').click(function() {
		$('.head-prior').css("maxWidth", "100%");
		$('.fix-container').css("maxWidth", "100%");
		if (!$('.openButton').hasClass('openDone') || !$('.openButton').hasClass('menu-btn_active')) {
			$('.openButton').addClass('openDone');
			$('.head-prior').css("left", "0px");
			$('.menu-btn').toggleClass('menu-btn_active');
			if ($('.fix-container').css("zIndex", "0")) { //otherwise, there is no access to the slide at the lower level
				$('.fix-container').css("zIndex", "100")
			}
		}
		else {
			$('.openButton').removeClass('openDone');
			$('.head-prior').css("maxWidth", "100%");
			$('.head-prior').css("left", "-550px");
			$('.openButton').removeClass('menu-btn_active');
			setTimeout(function() { //prevention for too fast fade out
				$('.fix-container').css("zIndex", "0"); //otherwise, there is no access to the slide at the lower level
			}, 500);

		}
	});

	/*
	Set this one in case if your initial task is responsive menu at a certain screen's size.
 
    Этот код решает проблему случайно исчезающего меню при
    изменении размера экрана браузера
 
    Здесь ставьте ширину при которой
    включается адаптивный дизайн вашего меню
 
    $(window).resize(function() 
    {     
        if ($(window).width() > 1200)
        {
            $('nav ul li').removeAttr('style');
        }
    });
    */
	/* =============== separate burger ==================*/

	// $('.menu-btn').on('click', function(e) {
	// 	//e.preventDefault;
	// 	$(this).toggleClass('menu-btn_active');
	// });
});
