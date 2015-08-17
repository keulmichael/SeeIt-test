function listenerTailleEcran(requeteMedia) {

var photoaccueil_1 = document.getElementById('photoaccueil_1');
var photoaccueil_2 = document.getElementById('photoaccueil_2');
var photoaccueil_3 = document.getElementById('photoaccueil_3');

	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.png').style.height = '150px';
	if (photoaccueil_1.naturalHeight<400){photoaccueil_1.style.width = '70%';}
      	else {photoaccueil_1.style.width = '20%';}
	if (photoaccueil_2.naturalHeight<400){photoaccueil_2.style.width = '70%';}
      	else {photoaccueil_2.style.width = '20%';}
	if (photoaccueil_3.naturalHeight<400){photoaccueil_3.style.width = '70%';}
      	else {photoaccueil_3.style.width = '20%';}
      	document.getElementById('pubaccueil_1').style.width = '70%';
      	document.getElementById('pubaccueil_2').style.width = '70%';
	} 
	else { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.png').style.height = '150px';	
      	document.getElementById('photoaccueil_1').style.width = '40%';
      	document.getElementById('photoaccueil_2').style.width = '40%';
      	document.getElementById('photoaccueil_3').style.width = '40%';
      	document.getElementById('pubaccueil_1').style.width = '40%';
      	document.getElementById('pubaccueil_2').style.width = '40%';
	}
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
