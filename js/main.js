/**
  *
  *   WARNING: Relies on revealOnScroll.js, 

  *             - https://raw.githubusercontent.com/codrops/OnScrollEffectLayout/master/js/cbpScroller.js
  *             - https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.2/scrollreveal.min.js
  *             - https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js
**/

/* ––––––––––––––––––––––––––––––––––––
	AUTO DE-FOCUS AFTER CLICK
–––––––––––––––––––––––––––––––––––– */
function autoBlur() {
	$("button").on('click', function(event) {
		$(this).blur();
		// alert("hi");
	});
	$("input:submit").on('click', function(event) {
		$(this).blur();
		// alert("hi");
	});
	$("a").on('click', function(event) {
		$(this).blur();
		// alert("hi");
	});
}

//	APPLY THE AUTO-DE-FOCUS TO BUTTONS
autoBlur();

/* ––––––––––––––––––––––––––––––––––––
	SCROLLIPSY
–––––––––––––––––––––––––––––––––––– */
// Deactive other links
function removeActiveNavLinks() {
	// get the currently 'active' link and remove it's .active class
	$('.active').removeClass('active');
}
// Activate specfied link
function makeLinkActive(targetLink) {
	targetLink.addClass('active');
}
// User clicks a new nav link
// $(".nav-link").on('click', function(event) {
// 	removeActiveNavLinks();
// 	makeLinkActive($(this));
// });

/* ––––––––––––––––––––––––––––––––––––
	SMOOTH SCROLL
–––––––––––––––––––––––––––––––––––– */
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

$('body').scrollspy({target: ".true-nav"});



window.sr = ScrollReveal( { reset: true }).reveal('.container');
