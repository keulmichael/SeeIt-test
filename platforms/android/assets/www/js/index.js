var app = {

    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');


    
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

var settings;
	
	

    
    settings = new Settings();
		

    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false)
	


///////////////////////////////////////////////////////////////////////////////////////	
function onCapture(e) { 


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



}
			  





	
///////////////////////////////////////////////////////////////////////////////////////
function onCaptureSuccess(imageData) {
	
	var num = document.getElementById("num").value;

var win = function (r) {}
var fail = function (error) {alert("An error has occurred: Code = " + error.code);}

    var fichierupload = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=non&num="+num+"&imageData="+imageData)
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
	
var fichieruploadQuali = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=oui&num="+num+"&imageData="+imageData);
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
      }}
})	

    })
}

function geolocationError(error) {
switch(error.code){
    case error.PERMISSION_DENIED:
      alert("L'utilisateur n'a pas autorisé l'accés à sa position");
      break;      
    case error.POSITION_UNAVAILABLE:
      alert("L'emplacement de l'utilisateur n'a pas pu être déterminé");
      break;
    case error.TIMEOUT:
      alert("Le service n'a pas répondu à temps");
      break;
    }
}
	}) 	
})	

}


function onCaptureError(message) {alert(message); }





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
},


  receivedEvent: function(id) {}
};

app.initialize();
