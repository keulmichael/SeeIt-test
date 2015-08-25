var valalertNouvelleConnexion = registry.byId("alertNouvelleConnexion");
var valalertSonVibration = registry.byId("alertSonVibration");


	var ws = new WebSocket('ws://websocket-seeit.rhcloud.com:8000');
	    
ws.onmessage = function (event) { 
 var data = JSON.parse(event.data);
    switch(data.type)
    {
       case "nouvelle connexion":
       var id = Math.floor(Math.random() * 100000000000000) ;
       sessionStorage.id = id;
       	   // if(document.getElementById("alertNouvelleConnexion").innerHTML=='on'){
           alert("Bienvenue au nouvel utilisateur ! ");
       	   // }
           break;
       case "confirmation photo":
       	if (data.id != sessionStorage.id){
       	   // if(document.getElementById("alertSonVibration").innerHTML=='on'){
       	    	navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
       	       alert("Nouvelle photo prise " + data.lieu);
       	   // }
       	}
           break;
       case "confirmation message":
           alert(data.message);
           break
       case "confirmation ouvrir appareil photo":
          onCapture();
           break;
    }
};

function Envoi_photo(){
var data = { "type" : "envoi photo", "message" : "" };
var message = JSON.stringify(data);
ws.send(message);}
