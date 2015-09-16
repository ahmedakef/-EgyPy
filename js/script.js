 $(document).ready(function() {
	/*	$('.intro-pic').each(function(){
				$(this).addClass("fadeIn");
		});
	});*/

 
 	/* change active class */

   $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");

	});


   /* make links go smoothly to its content */


 	$("#website-logo").click(function (){

	    $('html, body').animate({
	        scrollTop: $(".intro-background").offset().top
	    }, 1000);

 	});

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

/*      artical          */  

		$('.artic-1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('.artic-2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});

		$('.artic-3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.pic-1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideDown");
			}
		});

		$('.pic-2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('.pic-3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});

		$('.mahmoud-pic').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("bigEntrance");
			}
		});

		$('.about-me h2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('.about-me p').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+450) {
				$(this).addClass("slideLeft");
			}
		});

		$('.brought-by').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).delay(5000).addClass("fadeIn");
			}
		});


	});


 });