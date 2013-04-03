// ==UserScript==
// @name Shortcut Helper
// @require js/commonFunctions.js
// @include *://*
// ==/UserScript==

kango.addMessageListener('createdWindowOrTab', function(message){	
	sendMessageToBackground({action:'getOptions'}, function (options) {
		kango.console.log('Got Options');
		if(message.data=="Window"){
			kango.console.log('Got Message');
			sendMessageToBackground({action:'windowRecieved'}, function(text){});
		    window.addEventListener('keydown', function (event) {
		    	kango.console.log('Added window shortcut');
		        if (event.which == options.openImageInWindowKey) {
		            window.close();
		        }
		    });
	    }else{
	    	kango.console.log('Told background were done');		    	
	    	sendMessageToBackground({action:'tabRecieved'}, function(text){});
		    window.addEventListener('keydown', function (event) {
		        if (event.which == options.openImageInTabKey) {
		            window.close();
		        } 
		    });
	    }
	});
});