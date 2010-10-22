$(document).ready(function() {
	$('ul#menu').superfish({ 
		delay: 1000,
		speed: 'fast',
		animation: {
			opacity:'show',
			height:'show'
		},
		autoArrows: true,
		dropShadows: true,
		hoverClass: 'ui-state-default'
	});
	$('#show-hide, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
	// Accordion
	$("#accordion").accordion({ header: "h3" });
});