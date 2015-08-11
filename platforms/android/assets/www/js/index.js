var settings;
    
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

function onLoadCamera() {alert('onloadCamera');

document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
    
    
    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false)
}

function onCapture(e) { alert("onCapture");

}
