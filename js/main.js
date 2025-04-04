$(document).ready(function(){
	
	/*
	// Aggiunge un asterisco per ogni form control con classe required
	$('.form-control.required').each(function() {
		var temp = $(this).attr('placeholder');
		$(this).attr('placeholder', temp+' * ');
	});
	*/

	// Al ricaricamento della pagina controlla se la pagina è stata scrollata
	// e attiva la classe sticky se necessario
	if (($(window).scrollTop() > 100) && (!$('nav').hasClass('navbar-sticky')) ) {
		$('nav').addClass('navbar-sticky');
		$('.logo-neg').addClass('d-none');
		$('.logo-pos').removeClass('d-none');
		$('.navbar-btn').addClass('btn-special btn-animated');
	};

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

	// Toggle Menu a comparsa nella sezione hero
	$('.navbar-toggler').on('click', () => {
		var windowTop = $(window).scrollTop();
		if (windowTop < 100) {
			if ($('.navbar-toggler').hasClass('collapsed')) {
				$('nav').addClass('navbar-sticky');
				$('.logo-neg').addClass('d-none');
				$('.logo-pos').removeClass('d-none');
			} else {
				$('nav').removeClass('navbar-sticky');
				$('.logo-pos').addClass('d-none');
				$('.logo-neg').removeClass('d-none');
			}
		}
	});

    // Trasforma la navbar in sticky al superamento di 100px
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navbar-sticky') : $('nav').removeClass('navbar-sticky');
        windowTop > 100 ? $('.logo-neg').addClass('d-none') : $('.logo-neg').removeClass('d-none');
        windowTop > 100 ? $('.logo-pos').removeClass('d-none') : $('.logo-pos').addClass('d-none');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
        windowTop > 100 ? $('.nav-link').addClass('text-dark') : $('.nav-link').removeClass('text-dark');
        windowTop > 100 ? $('.navbar-btn').addClass('btn-special btn-animated') : $('.navbar-btn').removeClass('btn-special btn-animated');
	});

	// Carica dinamicamente il contenuto della finestra modal di Team
	$('.card-img-box').on('click', function () {
		var img_src = $(this).find('.card-img-top').attr("src");
		var name = $(this).parent('.card').find('.card-title').text();
		var role = $(this).parent('.card').find('.card-role').text();

		$('#teamModal').find('.modal-name').text(name);
		$('#teamModal').find('.modal-role').text(role);
		$('#teamModal').find('.modal-img').attr('src', img_src);
   });

   
});

/*

// Ridimensiona altezza footer per renderlo più responsivo
document.addEventListener("DOMContentLoaded", function() {
  const placeholder = document.querySelector('.placeholder')
  const footer = document.querySelector('footer')

  // On DOMContentLoaded, set placeholder height to be equal to footer height
  updateHeight()

  window.addEventListener('resize', onResize)

  // On window resize, update placeholder height to be equal to footer height
  function onResize() {
    updateHeight()
  }

  function updateHeight() {
    // Placeholder should always match footer height
    placeholder.style.height = `${footer.offsetHeight}px`
  }
})

*/