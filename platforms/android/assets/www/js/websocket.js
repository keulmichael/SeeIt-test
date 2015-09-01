	var ws = new WebSocket('ws://websocket-seeit.rhcloud.com:8000');
	    
ws.onmessage = function (event) { 
 var data = JSON.parse(event.data);
    switch(data.type)
    {
       case "nouvelle connexion":
       var id = Math.floor(Math.random() * 100000000000000) ;
       sessionStorage.id = id;
       //alert("Bienvenue au nouvel utilisateur !");

require([ "dijit/registry", "dojox/mobile", "dojox/mobile/parser", "dojox/mobile/SimpleDialog", "dojox/mobile/Button"
], function(registry){

registry.byId('dlg_connexion').show();


});

       break;
       
       case "confirmation photo":
       	if (data.id != sessionStorage.id){
	
       	    	navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
       	       alert("Nouvelle photo prise " + data.lieu);
       	    
       	}
           break;
           
       case "confirmation message":
           alert(data.message);
           break
           
       case "cron":
          // alert(data.message);
             show('dlg_photo');
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
