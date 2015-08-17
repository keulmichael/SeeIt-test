function listenerTailleEcran(requeteMedia) {
//var containerAccueil = document.getElementById('containerAccueil');
//var icone-seeit = document.getElementById('icone-seeit.png');
//var photoaccueil_1 = document.getElementById('photoaccueil_1');
//var photoaccueil_2 = document.getElementById('photoaccueil_2');
//var photoaccueil_3 = document.getElementById('photoaccueil_3');
//var pubaccueil_1 = document.getElementById('pubaccueil_1');
//var pubaccueil_2 = document.getElementById('pubaccueil_2');

	alert(document.getElementById('photoaccueil_1').naturalWidth);
	alert(document.getElementById('photoaccueil_1').naturalHeight);
	alert(document.getElementById('photoaccueil_2').naturalWidth);
	alert(document.getElementById('photoaccueil_2').naturalHeight);
	
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.style').style.height = '150px';
      	document.getElementById('photoaccueil_1').style.width = '70%';
      	document.getElementById('photoaccueil_2').style.width = '70%';
      	document.getElementById('photoaccueil_3').style.width = '70%';
      	document.getElementById('pubaccueil_1').style.width = '70%';
      	document.getElementById('pubaccueil_2').style.width = '70%';
	} else { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit').style.height = '150px';	
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
