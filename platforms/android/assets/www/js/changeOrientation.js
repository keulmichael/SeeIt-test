function listenerTailleEcran(requeteMedia) {
var containerAccueil = document.getElementById('containerAccueil');
var icone-seeit = document.getElementById('icone-seeit.png');
var photoaccueil_1 = document.getElementById('photoaccueil_1');
var photoaccueil_2 = document.getElementById('photoaccueil_2');
var photoaccueil_3 = document.getElementById('photoaccueil_3');
var pubaccueil_1 = document.getElementById('pubaccueil_1');
var pubaccueil_2 = document.getElementById('pubaccueil_2');

	alert(photoaccueil_1.naturalWidth);
	alert(photoaccueil_1.naturalHeight);
	
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) { 
	containerAccueil.style.height = '170px';
	icone-seeit.style.height = '150px';
      	photoaccueil_1.style.width = '70%';
      	photoaccueil_2.style.width = '70%';
      	photoaccueil_3.style.width = '70%';
      	pubaccueil_1.style.width = '70%';
      	pubaccueil_2.style.width = '70%';
	} else { 
	containerAccueil.style.height = '170px';
	icone-seeit.style.height = '150px';	
      	photoaccueil_1.style.width = '40%';
      	photoaccueil_2.style.width = '40%';
      	photoaccueil_3.style.width = '40%';
      	pubaccueil_1.style.width = '40%';
      	pubaccueil_2.style.width = '40%';
	}
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
