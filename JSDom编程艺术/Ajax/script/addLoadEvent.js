

function addLoadEvent(func) {
	var olonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			olonload();
			func();
		}
	}
}