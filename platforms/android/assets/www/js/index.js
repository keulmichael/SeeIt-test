function Settings() {
if ((typeof Camera !== "undefined")) {
this.destinationType = Camera.DestinationType.FILE_URI; // cameraOptions: destinationType
this.sourceType = Camera.PictureSourceType.CAMERA; 
this.mediaType = Camera.MediaType.PICTURE; // cameraOptions: mediaType
}
this.quality = 100; // cameraOptions: quality
this.targetWidth = 600; // cameraOptions: targetWidth
this.targetHeight = 1000; // cameraOptions: targetHeight
this.allowEdit = false; // cameraOptions: allowEdit
this.correctOrientation = false;
//this.cameraDirection = 0;
this.positionPaysage = true;
this.encodingType = (typeof Camera !== "undefined") ? Camera.EncodingType.JPEG : 0; // cameraOptions: encodingType
this.saveToPhotoAlbum = false; // cameraOptions: saveToPhotoAlbum
this.popoverOptions = new CameraPopoverOptions(100, 100, 100, 100, Camera.PopoverArrowDirection.ARROW_DOWN); // cameraOptions: popoverOptions
}


document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady (){
	
var networkState = navigator.network.connection.type;

var states = {};
states[Connection.UNKNOWN] = 'Connexion inconnue';
states[Connection.ETHERNET] = 'Connexion Ethernet';
states[Connection.WIFI] = 'Connexion WiFi';
states[Connection.CELL_2G] = 'Connexion 2G';
states[Connection.CELL_3G] = 'Connexion 3G';
states[Connection.CELL_4G] = 'Connexion 4G';
states[Connection.NONE] = 'Pas de connexion r&eacute;seau';

if (states[networkState] == 'Pas de connexion r&eacute;seau') {
document.getElementById("problemeReseau").innerHTML="<font color='red' size='2'>Absence de r&eacute;seau. Veuillez fermer l'application et l'ouvrir &agrave; nouveau lorsque l'appareil sera connect&eacute;.</font>";}

else {   
$("#open_camera_button").bind ("click", onCapture);
$("#open_lib_button").bind ("click", onCapture);
$("#open_alb_button").bind ("click", onCapture);
}
}
	
 


///////////////////////////////////////////////////////////////////////////////////////	
function onCapture(e) { 
	var settings
settings = new Settings();  
if (settings.positionPaysage==false)
	{
	navigator.accelerometer.getCurrentAcceleration(accelerometerSuccessPortrait, accelerometerErrorPortrait);

	function accelerometerSuccessPortrait(acceleration) {
//if (acceleration.x>1 || acceleration.x<-1 && acceleration.y<9 && acceleration.z>1 || acceleration.z<-1 ){
//   alert("Veuillez tenir l\'appareil en mode portrait.\nLe blocage en mode portrait peut être activé dans les options.");
//		}

//	else {
    var callerId = getTargetId(e, "a");
    
    switch (callerId) {
        case "open_camera_button":
            settings.sourceType = Camera.PictureSourceType.CAMERA;
            break;
        case "open_lib_button":
            settings.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            break;
        case "open_alb_button":
            settings.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            break;
        default:
            return;
    }
    
    navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });


//}
}
function accelerometerErrorPortrait() {
   alert('Veuillez activer l\'accéléromètre');
};								  
}

else
{
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccessPaysage, accelerometerErrorPaysage);

function accelerometerSuccessPaysage(acceleration) {
//if (acceleration.x<9 || acceleration.x>-9 && acceleration.y<0 || acceleration.y>1 && acceleration.z<0 || acceleration.y>1){
  //  alert("Veuillez tenir l'appareil en mode paysage. Le blocage en mode portrait peut être activé dans les options.");
//		}

//	else {
    var callerId = getTargetId(e, "a");
    
    switch (callerId) {
        case "open_camera_button":
            settings.sourceType = Camera.PictureSourceType.CAMERA;
            break;
        case "open_lib_button":
            settings.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            break;
        case "open_alb_button":
            settings.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            break;
        default:
            return;
    }
    
    navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });
//		}
	}

	function accelerometerErrorPaysage() {
    alert('Veuillez activer l\'acc&eacute;l&eacute;rom&egrave;tre');
};		

}
}
	
///////////////////////////////////////////////////////////////////////////////////////
function onCaptureSuccess(imageData) {
	var num = document.getElementById("num").value;	
	
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/numerophoto.php?num='+num).then(
function(response){

numphoto=num+"_"+response+".jpg";
var win = function (r) {}
var fail = function (error) {alert("An error has occurred: Code = " + error.code);}

    var fichierupload = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=non&numphoto="+numphoto+"&imageData="+imageData)
    var photo = getElement("pic");
    photo.style.display = "block";
    photo.src = imageData;
    $.mobile.changePage("#result_page", "slideup");
    var nomphoto = photo.src;	
var options = new FileUploadOptions();
            options.fileKey="photo";
            options.fileName=nomphoto.substr(nomphoto.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            options.chunkedMode = false;
            
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
            options.params = params;
            var ft = new FileTransfer();
            ft.upload(nomphoto, fichierupload, win, fail, options);


var winQuali = function (r) {}
var failQuali = function (error) {alert("An error has occurred: Code = " + error.code);}
	
var fichieruploadQuali = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=oui&numphoto="+numphoto+"&imageData="+imageData);
var ftQuali = new FileTransfer();
ftQuali.upload(imageData, fichieruploadQuali, winQuali, failQuali, options);
 


require(["dojo/request"], function(request){    
request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x=&y=&adress=').then(function(response271){ 	
navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	
function geolocationSuccess(position) {alert("Position enregistrée !\n"+position.coords.latitude+", "+position.coords.longitude);
require(["dojo/request"], function(request){    
var num = document.getElementById("num").value;	
var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
geocoder.geocode({'latLng': latlng}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
if (results[1]) {
     request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x='+position.coords.latitude+'&y='+position.coords.longitude+'&adress='+results[1].formatted_address).then(function(response276){document.getElementById("affichFormattedAddress").innerHTML="<font size=2 color=grey>"+results[1].formatted_address+"</font>";}) ;
var data = { "type" : "envoi photo", "lieu" : "à "+results[1].formatted_address, "photo" : numphoto, "id" : sessionStorage.id};
var message = JSON.stringify(data);
ws.send(message);
}
}
})	
})
}

function geolocationError(error) { alert("Erreur"); }

}) 	
})	
})
})
}


function onCaptureError(message) { }





function getTargetId(event, tagName) {
    var target = (event.target.tagName == tagName)
                    ? event.target
                    : $(event.target).closest(tagName)[0]
    return target.id;
}

function getElement(element) {
    
    if(typeof(element) == "string") {
    
        element = document.getElementById(element);
    }
    
    return element;
}

