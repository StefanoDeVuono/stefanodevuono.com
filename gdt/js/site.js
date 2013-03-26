(function() {

	//var dict;
	$(function() {
		$.ajaxSetup({ cache: false });
		// Code that gets executed when the page loads goes here
		var errors = ["<p class=\"error\">Oh you and your fancy words.</p>", "<p class=\"error\">Nice try, buddy.</p>",  "<p class=\"error\">I don't have that word in my vocabulary.</p>", "<p class=\"error\">The guy who wrote this is pretty clever. ☺</p>"];

		// set the typeahead function params	
		$('#dictionary').typeahead({source: function(query, process){
			//$.ajaxSetup({ cache: false });
			$.getJSON('dictionnaire.json', function(data){
				dict = data;
				var words = _.keys(dict);
				process(words);
			});
			
		}, minLength: 2});
		//alert(words);
		// search imediately
		$('ul').click(function(){
			//alert($('ul li:hover').attr('data-value'));
			$('#dictionary').val($('ul li:hover').attr('data-value'));
			$('#dictionaryForm').submit();
		});
		
		// submit search value for definition
		$('#dictionaryForm').submit(function(e){
			// if there's a definition for the word
			if ( dict[$('#dictionary').val()] ) {
				$('#definition').html(dict[$('#dictionary').val()]);
			} else if ( $('#dictionary').val()) {
				var err = Math.round(Math.random()*errors.length) - 1;
				$('#definition').html(errors[err]);
			}
			e.preventDefault(); // do not try to post submission
		});
		
		
		// fix mouse problems
		$('.typeahead').on('mousedown', 'li', function(){
			$('#dictionary').val($(this).data('value'));
			$('#dictionaryForm').submit();
			$('.typeahead').hide();
		});
	}); // end of $(function(){})

})(); // end of (function() {})


/******************
The following code fixes the iOS zoom bug where zoom on rotation focuses on text-input field making everything too big
Can't run it, as I'm not sure of its licence and it's not mine.

(function(doc) {

    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }

}(document));*/
