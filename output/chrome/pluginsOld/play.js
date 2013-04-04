// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.gamekult.com/*
// ==/UserScript==
// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Play.com',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		hoverZoom.urlReplace(res, 
			'a img[src$="s.jpg"], a img[src$="m.jpg"]',
			/[sm]\.jpg/,
			'x.jpg'
		);			
		return callback($(res));
	}
});