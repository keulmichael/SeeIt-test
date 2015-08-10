    
	require(["dojox/mobile/parser", "dojox/mobile/compat", "dojo/domReady!", "dojox/mobile/View", "dojox/mobile/Heading", "dojox/mobile/RoundRectList", "dojox/mobile/ListItem", "dojox/mobile/Switch", "dojox/mobile/RoundRect", "dojox/mobile/RoundRectCategory", "dojox/mobile/ContentPane", "dojox/mobile/Button", "dojox/mobile/ProgressIndicator", "dojo/_base/xhr", "dojox/mobile/FilteredListMixin", "dojox/mobile/compat", "dojox/form/Uploader", "dojox/mobile/SwapView", "dojox/mobile/PageIndicator", "dojox/mobile/Badge", "dojox/mobile/IconContainer", "dojox/mobile/IconItem", "dojox/mobile", "dojox/mobile/RoundRectDataList", "dojo/data/ItemFileReadStore", "dojox/mobile/TextBox", "dojox/mobile/ToggleButton", "dojox/mobile/TabBar", "dojox/mobile/ScrollableView","dojox/mobile/Accordion","dojo/_base/kernel", "dojo/parser", "dojox/dgauges/components/grey/HorizontalLinearGauge", "dojox/mobile/Tooltip" ], function (parser) {
parser.parse();
});
dojoConfig = {
async: true,
parseOnLoad: false
};
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/texteTitreAccueil.html').then(function(resptitreAccueil){document.getElementById("titreAccueil").innerHTML=resptitreAccueil;})
request.get('http://www.appliseeit.com/mobile/texttexteAjouter.html').then(function(resptexteAjouter){document.getElementById("texteAjouter").innerHTML=resptexteAjouter;})
request.get('http://www.appliseeit.com/mobile/texteIntroInfos.html').then(function(respIntroInfos){document.getElementById("IntroInfos").innerHTML=respIntroInfos;})
request.get('http://www.appliseeit.com/mobile/texteAideInfos.html').then(function(respAideInfos){document.getElementById("AideInfos").innerHTML=respAideInfos;})
request.get('http://www.appliseeit.com/mobile/texteAvenirInfos.html').then(function(respAvenirInfos){document.getElementById("AvenirInfos").innerHTML=respAvenirInfos;})
request.get('http://www.appliseeit.com/mobile/textePourquoifaireInfos.html').then(function(respPourquoifaireInfos){document.getElementById("PourquoifaireInfos").innerHTML=respPourquoifaireInfos;})
request.get('http://www.appliseeit.com/mobile/texteNouscontacterInfos.html').then(function(respNouscontacterInfos){document.getElementById("NouscontacterInfos").innerHTML=respNouscontacterInfos;})
});
require(["dojo/_base/connect","dojo/ready",
], function(connect, ready){
ready(function(){
var backButton = dijit.registry.byId("hdgSettings").backButton;
if (backButton) {
dojo.connect(backButton, "onClick", function() {CacherCamera(); });
}
AffichBadges();
});
})
function AffichBadges(){
require(["dojo/request",
"dijit/registry",
"dojox/mobile/IconItem",
"dojox/mobile/IconContainer",
"dojox/mobile/parser",
"dojox/mobile",
"dojox/mobile/compat",
"dojox/mobile/ViewController"
], function(request, registry, IconItem, IconContainer, ViewController){
var iconContainerWidgetSuppr = document.getElementById("infoBadges");
while (iconContainerWidgetSuppr.firstChild) {
iconContainerWidgetSuppr.removeChild(iconContainerWidgetSuppr.firstChild);
}
request.get('http://www.appliseeit.com/mobile/badges.php').then(
function(response){
var iconContainerWidget = registry.byId("infoBadges");
var res = response.split("_?_");
for(var i= 0; i < res.length; i++)
{var itemWidget ='';
var resAff = res[i].split("_!_");
var itemWidget = new IconItem({
icon: "http://www.appliseeit.com/mobile/camera.png",
label: resAff[1],
Badge: resAff[0],
moveTo:"#",
onClick: function(e){
affichPointsAlbum(this.label)
}
});
iconContainerWidget.addChild(itemWidget);
}
})
request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
function(responsePseudoNewPhoto){
var PseudoNewPhotos=responsePseudoNewPhoto.split("_|_");
if(PseudoNewPhotos[2]!=''){var adresse=PseudoNewPhotos[2];}
var heure=PseudoNewPhotos[3].split(" ");
document.getElementById("messageAlerte").innerHTML="<font color=grey size=2>"+PseudoNewPhotos[1] + ' a pris une photo &agrave; ' + adresse + ' &agrave; ' + heure[1]+"<br> Album : "+PseudoNewPhotos[5]+" - Th&ecirc;me : "+PseudoNewPhotos[6]+"</font>";
})
request.get('http://www.appliseeit.com/mobile/VerifNewAlbum.php').then(
function(responsePseudoNewAlbum){
var PseudoNewAlbum=responsePseudoNewAlbum.split("_|_");
document.getElementById("messageNouvelAlbum").innerHTML="<font color=grey size=2>"+PseudoNewAlbum[0] + " a cr&eacute;&eacute; l'album " + PseudoNewAlbum[1] + " dans le Th&ecirc;me " + PseudoNewAlbum[2] + "</font>";
})
});
}
function SupprBadges(){
require(["dojo/request",
"dijit/registry"
], function(request, registry){
var iconContainerWidgetSuppr = document.getElementById("infoBadges");
while (iconContainerWidgetSuppr.firstChild) {
iconContainerWidgetSuppr.removeChild(iconContainerWidgetSuppr.firstChild);
}
})
}
require(["dojo/_base/connect","dojo/ready","dojo/request",
], function(connect, ready, request){
ready(function(){
request.get('http://www.appliseeit.com/mobile/facebookPartage.php').then(
function(responseFacebookPartage){document.getElementById("facebookPartage").innerHTML=responseFacebookPartage;})
});
})
function affichPointsAlbum(tournee){
require([
"dijit/registry",
"dojox/mobile/ViewController",
"dojox/mobile/parser",
"dojox/mobile",
"dojox/mobile/Button"
], function(registry, ViewController){
var vca = ViewController.getInstance();
vca.openExternalView({
url:"http://www.appliseeit.com/mobile/affichPointsAlbums.php?tournee="+tournee,
transition:"slide"
}, registry.byId("affichPointsAlbums").containerNode);
});
}


function affichPointsTournees(tournee){
CacherCamera();
document.getElementById("affichPointsTournee").style.display = "none";
require([
"dijit/registry",
"dojox/mobile/ViewController",
"dojox/mobile/parser",
"dojox/mobile",
"dojox/mobile/Button"
], function(registry, ViewController){
var vc = ViewController.getInstance();
vc.openExternalView({
url:"http://www.appliseeit.com/mobile/affichPointsTournees.php?tournee="+tournee,
transition:"slide"
}, registry.byId("affichPointsTournee").containerNode);
});

var affichInfoLoca = {
    initialize: function() {this.bindEvents();},
bindEvents: function() {document.addEventListener('deviceready', this.onDeviceReady, false);},
onDeviceReady: function() {affichInfoLoca.receivedEvent('deviceready');
	
var watchID = navigator.compass.watchHeading(onSuccessCompass, onErrorCompass, optionsCompass);
var optionsCompass = {frequency: 2000};
function onSuccessCompass(heading) {
navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
/////////////////////////////////////////////////////////////////////////////////////////////
function geolocationSuccess(position) {
/////////////////////////////////
if (document.getElementById('affichInfoLoca').value=="")
{
if (position.coords.accuracy<100){
var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);}
geocoder.geocode({'latLng': latlng}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
if (results[1]) {
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/rechercheLocalisation.php?affichInfoLoca=annonceur&lat='+position.coords.latitude+'&long='+position.coords.longitude).then(
function(responseLocalisationAnnonceur){
var elt = results[0].address_components;
for(i in elt){
if(elt[i].types[0] == 'street_number'){if (typeof elt[i].long_name != "undefined"){var num = elt[i].long_name; }else{ var num='';}}
if(elt[i].types[0] == 'route'){if (typeof elt[i].long_name != "undefined"){var street = elt[i].long_name; }else{var street='';}}
if(elt[i].types[0] == 'sublocality'){if (typeof elt[i].long_name != "undefined"){var sub = elt[i].long_name; }else{var sub='';}}
if(elt[i].types[0] == 'postal_code'){if (typeof elt[i].long_name != "undefined"){var cp = elt[i].long_name;}else{var cp='';}}
if(elt[i].types[0] == 'locality'){if (typeof elt[i].long_name != "undefined"){var city = elt[i].long_name;}else{var city='';}}
if(elt[i].types[0] == 'administrative_area_level_2'){if (typeof elt[i].long_name != "undefined"){var dpt = elt[i].long_name;}else{var dpt='';}}
if(elt[i].types[0] == 'administrative_area_level_1'){if (typeof elt[i].long_name != "undefined"){var reg = elt[i].long_name;}else{var reg='';}}
if(elt[i].types[0] == 'country'){if (typeof elt[i].long_name != "undefined"){var pays = elt[i].long_name;}else{var pays='';}}
if(elt[i].types[0] == 'park'){if (typeof elt[i].long_name != "undefined"){var parc = elt[i].long_name;}else{var parc='';}}
if(elt[i].types[0] == 'natural_feature'){if (typeof lt[i].long_name != "undefined"){var nat = elt[i].long_name; }else{var nat='';}}
if(elt[i].types[0] == 'point_of_interest'){if (typeof elt[i].long_name != "undefined"){var mon = elt[i].long_name;}else{var mon='';}}
if(elt[i].types[0] == 'premise'){if (typeof elt[i].long_name != "undefined"){var prem = elt[i].long_name;}else{var prem='';}}
if(elt[i].types[0] == 'transit_station'){if (typeof elt[i].long_name != "undefined"){var sta = elt[i].long_name;}else{var sta='';}}
}
document.getElementById("affichLocalisation").innerHTML="<font color=black>Votre photo sera localis&eacute;e &agrave;  <br>"+results[1].formatted_address+"<br><br>"+ num +" "+ street +"<br>"+ cp +" "+ city +"<br>"+ dpt +"<br>"+ reg +"<br>"+ pays +"<br><br>"+responseLocalisationAnnonceur+"</font>"; })
})
}}
})
}
/////////////////////////////////
else
{
require(["dojo/request"], function(request){
var affichInfoLoca=document.getElementById("affichInfoLoca").value;
request.get('http://www.appliseeit.com/mobile/rechercheLocalisation.php?affichInfoLoca='+affichInfoLoca+'&lat='+position.coords.latitude+'&long='+position.coords.longitude+'&compass='+heading.magneticHeading).then(
function(responseLocalisation){
if (responseLocalisation!=""){document.getElementById("affichLocalisation").innerHTML="A prendre en photo : "+responseLocalisation;}
})
})
}
/////////////////////////////////
}
//////////////////////////////////////////////////////////////////////////////////////////
function geolocationError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
}
function onErrorCompass(compassError) {
alert('Compass error: ' + compassError.code);
};
    },

  receivedEvent: function(id) {}
};
affichInfoLoca.initialize();
}


function mobile_modif_donnees_reelle(num, tournee, page){
require(["dojo/_base/window", "dojox/mobile/ProgressIndicator"],
function(win, ProgressIndicator){
var prog = new ProgressIndicator({size:40, center:true});
win.body().appendChild(prog.domNode);
prog.start();
navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
require(["dojo/dom", "dojo/on", "dojo/request", "dojo/query", "dojo/domReady!"],
function(dom, on, request){
var siteNum="site"+num;var site = document.getElementById(siteNum).value;
var TypesNum="Types"+num;var types = document.getElementById(TypesNum).value;
if (types!='FIN'){var quantite_reelleNum="quantite_reelle"+num;var quantite_reelle = document.getElementById(quantite_reelleNum).value;}
var quantite_retoursNum="quantite_retours"+num; var quantite_retours= document.getElementById(quantite_retoursNum).value;
varTNum="T"+num;var T = document.getElementById(varTNum).value;
request.get('http://www.appliseeit.com/mobile/mobile_modif_donnees_reelle.php?num='+num+'&site='+site+'&Types='+types+'&nouvelle_quantite_reelle='+quantite_reelle+'&nouvelle_quantite_retours='+quantite_retours+'&PDA_Latitude='+position.coords.latitude+'&PDA_Longitude='+position.coords.longitude).then(
function(response41){ affichPointsTournees(tournee,page);prog.stop();})
});
}
});
}
function Aaccelerometer(){
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
function accelerometerSuccess(acceleration) {
if (acceleration.x>1 || acceleration.x<-1 && acceleration.y<9 && acceleration.z>1 || acceleration.z<-1 ){
alert('Veuillez tenir l\'appareil correctement');
}
};
function accelerometerError() {
alert('onError!');
};
}
function changeCameraDirection(value) {
alert('Option disponible dans les prochaines versions');
if (value=='on'){settings.CameraDirection=1;}
else{settings.CameraDirection=0;}
};
function changeCorrectOrientation(value) {
if (value=='on'){settings.correctOrientation=true;}
else{settings.correctOrientation=false;}
};
function changePositionPortrait(value) {
if (value=='on'){settings.positionPaysage=false;}
else{settings.positionPaysage=true;}
};
function changeEnregistrerPhoto(value) {
if (value=='on'){settings.saveToPhotoAlbum=true;}
else{settings.saveToPhotoAlbum=false;}
};
function Voix(){
if ('webkitSpeechRecognition' in window) {
var recognition = new webkitSpeechRecognition();
recognition.lang = "fr-FR";
recognition.continuous = false;
recognition.interimResults = true;
recognition.start();
recognition.onresult = function (event) {
for (var i = event.resultIndex; i < event.results.length; ++i) {
if (event.results[i].isFinal) {
recognition.stop();
var transcript = event.results[i][0].transcript;alert(transcript);
var words = transcript.split(' ');
var u = new SpeechSynthesisUtterance();
u.text = response;
u.lang = 'fr-FR';
u.onend = function () {
if (callback) {
callback();
}deom
};
u.onerror = function (e) {
if (callback) {
callback(e);
}
};
speechSynthesis.speak(u);
}}};}
else{alert('La fonction Voix ne fonctionne pas sur ce navigateur');}
}
function CacherCamera(){
document.getElementById("cadreCamera").style.display = "none";
}
function MontrerCamera(){
document.getElementById('cadreCamera').style.display="inline";
document.getElementById('cadreCamera').style.position="absolute";
document.getElementById('cadreCamera').style.bottom="30px";
}
function creerAlbum(){
require(["dojo/request","dojo/_base/window","dojox/mobile/ProgressIndicator"],
function(request,win, ProgressIndicator){
var album=document.getElementById('nouvelAlbum').value;
var element=document.getElementById('nouvelElement').value;
var pseudo=document.getElementById('nouveauPseudo').value;
request.get('http://www.appliseeit.com/mobile/ajouter_point.php?album='+album+'&element='+element+'&pseudo='+pseudo).then(
function(response){
var checkRep=response.split(' ');
document.getElementById('resultatCreerAlbum').innerHTML=response;
if(checkRep[2]=="color=grey"){document.getElementById('afficherTourneeApresCreer').style.display="block";}
})
})
}
function testSocket(){
require(["dojo/request", "dojo/request/notify"], function(request, notify){
notify("start", function(){
alert('start');
});
notify("send", function(response, cancel){
alert('send' + response);
});
notify("load", function(response){
alert('load') + response;
});
request.get("http://www.appliseeit.com/mobile/test.php");
});
websocket = new WebSocket("http://www.appliseeit.com/mobile/test.php");
websocket.onopen = function(evt) { websocket.send("WebSocket rocks"); };
websocket.onmessage = function(evt) { alert (evt.data); websocket.close(); };
}
function VerifNewPhoto(type){
var NbNewPhotos='';
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
function(responseNewPhoto){
var NbNewPhotos=responseNewPhoto.split("_|_");
var ancienNbPhotos=document.getElementById('nombrePhotosCache').value;
if(ancienNbPhotos!=NbNewPhotos[0]){
//var Notification = window.Notification || window.mozNotification || window.webkitNotification;
//Notification.requestPermission(function (permission) {
//var instance = new Notification("SeeIt!", {body: "De nouvelles photos sont disponibles !",icon:'iconeseeit.jpg'});
//instance.onclick = function () {AffichBadges();};
//instance.onclose = function () {AffichBadges();};
//});
if(type=='vibrate'){navigator.vibrate([100, 100, 100, 100, 100]);}
if(type=='son'){navigator.notification.beep(1);}
}
})
})
}
function changeAlertSon(value) {
if (value=='on'){var interval = setInterval("VerifNewPhoto('son')", 1000);}
if (value=='off'){clearInterval(interval);}
}
function changeAlertVibration(value) {
if (value=='on'){interval = setInterval("VerifNewPhoto('vibrate')", 1000);}
if (value=='off'){clearInterval(interval);}
}
function changeInfosParis(value) {
if (value=='on'){document.getElementById('affichInfoLoca').value="infosParis";if (!navigator.geolocation){alert("Veuillez activer le GPS");}}
if (value=='off'){document.getElementById('affichInfoLoca').value="";}
}
function changeLeParcdeSceaux(value) {
alert("Le parcours d&eacute;marre &agrave; l'entr&eacute;e de la Grenouill&egrave;re");
if (value=='on'){document.getElementById('affichInfoLoca').value="infosLeParcdeSceaux";if (!navigator.geolocation){alert("Veuillez activer le GPS");}}
if (value=='off'){document.getElementById('affichInfoLoca').value="";}
}
function changeArboretum(value) {
alert("L'Arboretum est situ&eacute; dans la Parc de la Vall&eacute;e aux Loups &agrave; Chatenay Malabry");
if (value=='on'){document.getElementById('affichInfoLoca').value="infosArboretum";if (!navigator.geolocation){alert("Veuillez activer le GPS");}}
if (value=='off'){document.getElementById('affichInfoLoca').value="";}
}
function changeLeJardindesPlantes(value) {
if (value=='on'){document.getElementById('affichInfoLoca').value="infosLeJardindesPlantes";if (!navigator.geolocation){alert("Veuillez activer le GPS");}}
if (value=='off'){document.getElementById('affichInfoLoca').value="";}
}
function nombrePhotos(){
var responseNbPhotoCache='';
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
function(responseNbPhoto){
var responseNbPhotoCache=responseNbPhoto.split("_|_");
document.getElementById('nombrePhotosCache').value=responseNbPhotoCache[0];
}
)
})
}
function rotation(action,num,n,degrees){
require(['dojo/dom' , "dojo/on", "dojo/request"],
function(dom, on, request){
var phototest = new Image(); phototest.src = 'http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg'; var photo = dom.byId('zoom_'+n+'_'+num);
if (action=='refresh'){
photo.src = 'http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg?v=123';
}
else {
request.get('http://www.appliseeit.com/mobile/rotation_image.php?image='+num+'_'+n+'&degrees='+degrees).then(
function(response41){
photo.src ='http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg?v=123';
});
}
});
}
require(['dojo/dom' , "dojo/on", "dojo/_base/connect","dojo/ready","dojo/request", "dojox/mobile/ProgressBar"
], function(dom, on, connect, ready, request, ProgressBar){
ready(function(){
//request.get('https://graph.facebook.com/fql?q=SELECT friend_count FROM user WHERE uid = 1441017086216744').then(
//request.get('https://graph.facebook.com/100009539529598').then(
//function(nbamisfacebookJSON){var nbamisfacebook = JSON.parse(nbamisfacebookJSON);
//document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">' + nbamisfacebook.data[0].friend_count + ' amis nous suivent sur </font></td><td><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px"></td></tr></table>';})
//document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">Retrouvez nous sur </font><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px" onTouchstart="openFacebook()"></td></tr></table>';})
request.get('http://www.appliseeit.com/mobile/affichPhotosAccueil.php?n=1').then(
function(response441){
var resPhoto = response441.split("_|_");
var photoAccueil = dom.byId('photoaccueil_1');photoAccueil.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[0];
var photoAccueil2 = dom.byId('photoaccueil_2');photoAccueil2.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[1];
var photoAccueil3 = dom.byId('photoaccueil_3');photoAccueil3.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[2];
})
request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
function(responseNbPhoto){
var responseNbPhotoGauge=responseNbPhoto.split("_|_");
var nbPhotosGauge= responseNbPhotoGauge[0]/4;
var pb = new ProgressBar({value:nbPhotosGauge+"%", label:responseNbPhotoGauge[0], style:{width:"100%"}});
pb.placeAt(dom.byId("gauge"));
pb.startup();
})
})
})
function RafraichirAccueil(){
require(['dojo/dom' , "dojo/on", "dojo/_base/connect","dojo/ready","dojo/request","dojox/mobile/ProgressBar"
], function(dom, on, connect, ready, request, ProgressBar){
ready(function(){
//request.get('https://graph.facebook.com/fql?q=SELECT friend_count FROM user WHERE uid = 1441017086216744').then(
//equest.get('https://graph.facebook.com/100009539529598').then(
//function(nbamisfacebookJSON){var nbamisfacebook = JSON.parse(nbamisfacebookJSON);
//document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">' + nbamisfacebook.data[0].friend_count + ' amis nous suivent sur </font></td><td><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px"></td></tr></table>';})
//document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">Retrouvez nous sur </font><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px" onTouchstart="alert(\'facebook\');openFacebook()"></td></tr></table>';})
request.get('http://www.appliseeit.com/mobile/affichPhotosAccueil.php?n=1').then(
function(response442){
var resPhoto = response442.split("_|_");
var photoAccueil = dom.byId('photoaccueil_1');photoAccueil.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[0];
var photoAccueil2 = dom.byId('photoaccueil_2');photoAccueil2.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[1];
var photoAccueil3 = dom.byId('photoaccueil_3');photoAccueil3.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[2];
})
request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
function(responseNbPhoto){
var responseNbPhotoGauge=responseNbPhoto.split("_|_");
var nbPhotosGauge= responseNbPhotoGauge[0]/4;
var pb = new ProgressBar({value:nbPhotosGauge+"%", label:responseNbPhotoGauge[0], style:{width:"100%"}});
pb.placeAt(dojo.byId("gauge").innerHTML);
pb.startup();
})
})
})
}
function suppression_photos() {
require(["dojo/_base/connect","dojo/ready","dojo/request",
], function(connect, ready, request){
request.get('http://www.appliseeit.com/suppression_photos_auto.php').then(
function(response786){
alert('Photos supprim&eacute;es');
})
})
}

function affichLien(photo){
alert(photo);
}

