


function showPic(witchpic){
	var source = witchpic.getAttribute('href');
	var placeholider = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);
	var text = witchpic.getAttribute('title');
	var description = document.getElementById('description');
	description.firstChild.nodeValue = text;
};