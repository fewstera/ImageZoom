// ==UserScript==
// @name HozerZoom Plugin
// @require js/jquery-1.9.1.min.js
// @all-frames true
// @include *://*
// ==/UserScript==


function sendMessageToBackground(message, response){
	kango.addMessageListener(message.action, function(messageResponse){
		response(messageResponse.data);
	});
	kango.dispatchMessage(message.action, message);
}