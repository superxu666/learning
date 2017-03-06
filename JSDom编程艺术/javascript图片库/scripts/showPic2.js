

addLoadEvent(prepareGallery);







function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		oldonload();
		func();
	}
}


function prepareGallery(){
	if (!document.getElementsByTagName) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById('imagegallery')) {return false;}
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');

	for (var i=0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		};
	}
}

function showPic(witchpic){
	if (!document.getElementById('placeholder')) {return false;}
	var source = witchpic.getAttribute('href');
	var placeholider = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);
	if (document.getElementById('description')) {
		var text = witchpic.getAttribute('title') ? witchpic.getAttribute('title') : '';
		var description = document.getElementById('description');
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}