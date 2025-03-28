$(document).ready(function(){
    // Aggiunge lo smooth scrollink a tutti i link che contengono un hash
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    // Trasforma la navbar in sticky al superamento di 100px
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navbar-sticky') : $('nav').removeClass('navbar-sticky');
        windowTop > 100 ? $('.logo-neg').addClass('d-none') : $('.logo-neg').removeClass('d-none');
        windowTop > 100 ? $('.logo-pos').removeClass('d-none') : $('.logo-pos').addClass('d-none');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
        windowTop > 100 ? $('.nav-link').addClass('text-dark') : $('.nav-link').removeClass('text-dark');
        windowTop > 100 ? $('.navbar-btn-contatti').addClass('btn-contatti') : $('.navbar-btn-contatti').removeClass('btn-contatti');
	});

});

/*
$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('navbar').addClass('navShadow') : $('navbar').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});
*/