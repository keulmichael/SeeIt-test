

	var ws = new WebSocket('ws://websocket-seeit.rhcloud.com:8000');

ws.onmessage = function (event) { 

 var data = JSON.parse(event.data);
    switch(data.type)
    {
       case "nouvelle connexion":
       var id = Math.floor(Math.random() * 100000000000000) ;
       sessionStorage.id = id;
      		navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
		show('dlg_connexion','mess');
       break;
       
       case "confirmation photo":
       	if (data.id != sessionStorage.id){
       	    	navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
       	    	show('dlg_nouvelle_photo',data.lieu);
       	}
           break;
           
       case "confirmation message":
      		navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
       		show('dlg_message',data.message);
           break
           
       case "cron":
      		navigator.vibrate([100, 100, 100, 100, 100]);navigator.notification.beep(1);
            	show('dlg_photo',data.message);
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
