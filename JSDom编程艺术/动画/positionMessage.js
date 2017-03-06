

function positionMessage() {
	if (!document.getElementById) return false;
	if (!document.getElementById('message')) return false;
	var elem = document.getElementById('message');
	elem.style.position = 'absolute';
	elem.style.left = '50px';
	elem.style.top = '100px';

	

	var elem = document.getElementById('message2');
	elem.style.position = 'absolute';
	elem.style.left = '50px';
	elem.style.top = '50px';

	moveElement("message", 1250, 250, 20);
	moveElement("message2", 560, 55, 20);
}

// window.onload = positionMessage;
addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);
