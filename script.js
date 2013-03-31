var menu = false; // start w/o menu
yPos = 0; // start at y position 0

// menu for mobile
$('#touch').on('touchstart', function(e){
	//alert('show');
	e.preventDefault();
	if ( menu == false ) {
		$('nav a').show();
		yPos = $('#page').scrollTop();
		console.log('show menu ' + yPos);
		$('section').hide();
		menu = true;
	} else {
		console.log('else');
		$('nav a').hide();
 		$('section').show();
 		$('#page').scrollTop(yPos);
 		menu = false;
	}
});


$('nav a').on('touchstart click', function(e){
 	e.preventDefault();
 	var destination = $(this).attr('href'); // anchor to part of page we're going to
 	if ( menu == true && $('#touch').is(':visible') ) {
 		$('nav a').hide();
 		$('section').show();
 		$('#page').scrollTop(yPos);
 		menu = false;
 		$('#page').animate({ // animated scroll for mobile
			scrollTop: $('#page').scrollTop() + $(destination).offset().top
		}, 1000,'swing');
 	}
 	if ( $('#touch').is(':hidden') ) {
 		console.log('hello');
 		$('html, body').animate({ // animated scroll for desktop
			scrollTop: $(destination).offset().top
		}, 1000,'swing');
 	}
	
 	
 });