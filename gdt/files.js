var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js';
head.appendChild(script);
   
$('tr:contains("Anglais")');

function getPageDefs() {
	var last = $('tr:contains("Anglais")').length - 1;
	var ang = $($('tr:contains("Anglais")')[last]).next().children('.texte1').text(); //finds english word
	
	last = $('tr:contains("Français")').length -1;
	var fr = $($('tr:contains("Français")')[last]).next().children('.texte1').html(); //finds french trans
	var def = $.trim($($('tr:contains("Français")')[last]).next().next().text()); //finds definition
	
	last = $('tr:contains("Synonyme(s) :")').length -1;
	if (last > 2) {
		fr += ', ' + $($('tr:contains("Synonyme(s) :")')[last]).next().children('.texte1').html();
	}
	return '\t"' + ang + '": "' + fr + ' ' + def + '"';
}


// this will change the english word, french trans and definition into an object key value pair (still needs comma)
'\t"' + ang + '": "' + fr + ' ' + def + '"';

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
var fs = null;

function onInitFs(fs) {
	fs.root.getFile('gdt.json', {create: true}, function(fileEntry){
		fileEntry.createWriter(function(fileWriter){
			fileWriter.onwriteend = function(e) {
				append(fs, 'gdt.json', 5);		
			};
			var blob = new Blob(['{\n'], {type: 'text/plain'});
			fileWriter.write(blob);
		});
	});
}

function append(fs, filename, index) {     	
	fs.root.getFile(filename, {create: false}, function(appendEntry){
		appendEntry.createWriter(function(fileWriter){
			fileWriter.onwriteend = function(e) {
				if (index>0) append(fs, filename, --index);
				else return;
			}
			fileWriter.seek(fileWriter.length);
			var bleh = new Blob(['Hello\n'], {type: 'text/plain'});
			fileWriter.write(bleh);
		});
	});
}

window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs);


//traversing grab every letter. inside each letter
$('ol');
// grab each li and follow link
link = $($('ol').children()[0]).children().attr('href');
$.get(link);
// return as html object or page and traverse