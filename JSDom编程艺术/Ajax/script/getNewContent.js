



function getNewContent() {
	var request = getHttpObject();
	if (request) {
		request.open( "GET", "example.txt", true );
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement('p');
				// alert(typeof request.responseText); //string
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert('sorry, your browser doesn\'t support XMLHttpRequest');
	}
	alert("Function Done");
}
addLoadEvent(getNewContent);