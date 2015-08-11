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

settings = new Settings();

    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    

}



function onCapture(e) { 
    
alert('onCapture');
    
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

function onCaptureSuccess(imageData) {}

function onCaptureError(message) {alert(message); }

