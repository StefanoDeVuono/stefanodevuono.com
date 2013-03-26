var menu = false;

function showHide() {
	if (menu == false) {
		$('nav a').show();
		$('section').hide();
		menu = true;
	} else if (menu == true) {
		$('nav a').hide();
		$('section').show();
		menu = false;
	} 
}

$('#touch').on('touchstart', showHide);


$('nav').on('touchstart click', 'a', function(e){
	e.preventDefault();

	if ( $('#touch').is(':visible') ) showHide();

	var destination = $(this).attr('href');

	console.log(destination);

	$('html, body').animate({
		scrollTop: $(destination).offset().top
	}, 1000,'swing');

});