var photoaccueil_1  = document.getElementById('photoaccueil_1');
photoaccueil_1.addEventListener('onload', function() {
	alert('My width is: ', this.naturalWidth);
	alert('My height is: ', this.naturalHeight);
});

function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.png').style.height = '150px';
      	document.getElementById('photoaccueil_1').style.width = '70%';
      	document.getElementById('photoaccueil_2').style.width = '70%';
      	document.getElementById('photoaccueil_3').style.width = '70%';
      	document.getElementById('pubaccueil_1').style.width = '70%';
      	document.getElementById('pubaccueil_2').style.width = '70%';
	} else { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.png').style.height = '150px';	
      	document.getElementById('photoaccueil_1').style.width = '40%';
      	document.getElementById('photoaccueil_2').style.width = '40%';
      	document.getElementById('photoaccueil_3').style.width = '40%';
      	document.getElementById('pubaccueil_1').style.width = '40%';
      	document.getElementById('pubaccueil_2').style.width = '40%';
	}
	
	
	var theimg = document.getElementById("photoaccueil_1");  
	alert("Image Make: " + EXIF.getTag(theimg, "Height"));
	var theimg2 = document.getElementById("photoaccueil_2");  
	alert("Image Make: " + EXIF.getTag(theimg2, "Height"));
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
