 $(document).ready(function() {

 	//the last item effect

	$(".open-it").click(function(){
	     $(".open-source").toggle();
	     $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
	 	});



 	/* change active class */



   $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");

	});





   /* make links go smoothly to its content */
/*

   function move(where){
	    $('html, body').animate({
	        scrollTop: $(where).offset().top
	    }, 1000);
   }



 	$("#website-logo").click( move(".intro-background") );
 	$(".courses-btn").click( move(".courses" ) );
 	$(".article-btn").click( move(".article" ) );
 	$(".pics-btn").click( move(".pics" ) );
 	$(".about-me-btn").click( move(".about-me" ) );


*/
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




 	/* show courses   */


 $(window).scroll(function() {

		function scroll_image(pic,animation) {

		    	$(pic).each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+400) {
						$(this).addClass(animation);
					}
				});

		}

		var animate_images = {
		  ".basics":"slideRight",
		  ".oop":"slideUp",
		  ".django":"slideLeft",
		  ".Qt":"slideDown",
		  ".chal":"slideRight",
		  ".PyGame":"slideLeft",
		  ".Tkinter":"slideLeft",
		  ".Data":"slideDown",
		  ".prob":"slideRight",
		  ".artic-1":"slideRight",
		  ".artic-2":"slideUp",
		  ".artic-3":"slideLeft",
		  ".pic-3":"slideLeft", // should change
		  ".mahmoud-pic":"bigEntrance", 
		  ".about-me h2":"slideRight"
		};


		for(var key in animate_images) {
		    scroll_image( key , animate_images[key] );
			}




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




 	/*load models 

 	  $('#article').click(function (){
       $("#load-models").load("models/third-3-courses.html");              
  	});
	*/