function onLoadCamera() {alert('onloadCamera');
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	
function geolocationSuccess(position) {alert(position.coords.latitude);}

function geolocationError(error) {}


}


