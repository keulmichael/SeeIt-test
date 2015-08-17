function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) {  
	document.getElementById('containerAccueil').style.height = '450px';
	document.getElementById('icone-seeit.png').style.width = '420px';	
      	document.getElementById('photoaccueil_1').style.width = '93%';
      	document.getElementById('photoaccueil_2').style.width = '93%';
      	document.getElementById('photoaccueil_3').style.width = '93%';
      	document.getElementById('pubaccueil_1').style.width = '93%';
      	document.getElementById('pubaccueil_2').style.width = '93%';
	} else {  
	document.getElementById('containerAccueil').style.height = '300px';
	document.getElementById('icone-seeit.png').style.width = '250px';
	document.getElementById('photoaccueil_1').style.width = '45%';
	document.getElementById('photoaccueil_2').style.width = '45%';
	document.getElementById('photoaccueil_3').style.width = '45%';
	document.getElementById('pubaccueil_1').style.width = '45%';
	document.getElementById('pubaccueil_2').style.width = '45%';
	}
	
	
//	var theimg = document.getElementById("imageid");  
	
//	alert("Image Make: " + EXIF.getTag(theimg, "Make"));

}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
