﻿// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.gamekult.com/*
// ==/UserScript==
// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Pixiv',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [],
			filter = 'a img[src*="pixiv.net/img/"]',
			search = [/_(s|\d+(ms)?)\./, '/mobile/'];
			
		hoverZoom.urlReplace(res, filter, search, ['_m.', '/']);		
		if (options.showHighRes) {
			hoverZoom.urlReplace(res, filter, search, ['.', '/']);
		}
		hoverZoom.urlReplace(res, 'a img[src*="pixiv.net/profile/"]', search, ['.', '/']);
		
		callback($(res));	
	}
});