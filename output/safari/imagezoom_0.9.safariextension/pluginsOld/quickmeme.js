﻿// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.gamekult.com/*
// ==/UserScript==
// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Quick Meme',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		hoverZoom.urlReplace(res, 
			'a[href*="quickmeme.com/meme/"]',
			/^.*\/meme\/(\w+).*$/,
			'http://i.qkme.me/$1.jpg'
		);		
		hoverZoom.urlReplace(res, 
			'a[href*="qkme.me/"]',
			/^.*qkme.me\/(\w+).*$/,
			'http://i.qkme.me/$1.jpg'
		);		
		callback($(res));	
	}
});