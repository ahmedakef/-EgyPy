 $(document).ready(function() {
	/*	$('.intro-pic').each(function(){
				$(this).addClass("fadeIn");
		});
	});*/

 	$(".courses-btn").click(function (){

	    $('html, body').animate({
	        scrollTop: $(".courses").offset().top
	    }, 1000);

 	});

 	$(".article-btn").click(function (){

	    $('html, body').animate({
	        scrollTop: $(".article").offset().top
	    }, 1000);

 	});

 	$(".pics-btn").click(function (){

	    $('html, body').animate({
	        scrollTop: $(".pics").offset().top
	    }, 1000);

 	});

 	$(".about-me-btn").click(function (){

	    $('html, body').animate({
	        scrollTop: $(".about-me").offset().top
	    }, 1000);

 	});



 	$(window).scroll(function() {
		$('.basics').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('.oop').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});

		$('.django').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.Qt').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideDown");
			}
		});

		$('.chal').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('.PyGame').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.Tkinter').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.Data').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideDown");
			}
		});
		
		$('.prob').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});



	});


 });