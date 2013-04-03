// ==UserScript==
// @name HozerZoom Plugin
// @require js/jquery-1.9.1.min.js
// @require js/commonFunctions.js
// @all-frames true
// @include *://*
// ==/UserScript==

sendMessageToBackground({action:'ajaxGet', url: 'http://www.azlyrics.com/lyrics/liljontheeastsideboyz/getlow.html'}, function(response){
	console.log(response)
})