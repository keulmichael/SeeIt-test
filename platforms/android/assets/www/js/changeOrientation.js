function listenerTailleEcran(requeteMedia) {


	
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) { 
	document.getElementById('containerAccueil').style.height = '170px';
	document.getElementById('icone-seeit.png').style.height = '150px';
	if (document.getElementById('photoaccueil_1').naturalHeight<400){
      	document.getElementById('photoaccueil_1').style.width = '70%';}
      	else {
      	document.getElementById('photoaccueil_1').style.width = '40%';}
	if (document.getElementById('photoaccueil_2').naturalHeight<400){
      	document.getElementById('photoaccueil_2').style.width = '70%';}
      	else {
      	document.getElementById('photoaccueil_2').style.width = '40%';}
	if (document.getElementById('photoaccueil_3').naturalHeight<400){
      	document.getElementById('photoaccueil_3').style.width = '70%';}
      	else {
      	document.getElementById('photoaccueil_3').style.width = '40%';}
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
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
