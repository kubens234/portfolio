"use strict";
jQuery(document).ready(function() {
	if (window.innerWidth > 760) {
		setupAnimations();
		runAnimations();
	}
});


function setupAnimations() {
	jQuery('.o_mnie .ukryj').addClass('animated opacity0');
	jQuery('.skills .col-xs-6').addClass('animated opacity0');
	jQuery('.my_work .col-xs-12').addClass('animated opacity0');
	jQuery('.contact .ukryj').addClass('animated opacity0');
	jQuery('.followers .fw-col-xs-12').addClass('animated opacity0');
}
function runAnimations() {
	jQuery('.animated').each(function() {
		jQuery(this).viewportChecker({
			classToAdd: 'opacity1 fadeIn',
			classToRemove: 'opacity0',
			offset: 200
		});
	});
}