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
	name: 'Steam',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		hoverZoom.urlReplace(res, 
			'img[src*="/avatars/"]:not([src*="_full."])',
			/(_medium)?\.(jpg|png)$/,
			'_full.$2'
		);
		hoverZoom.urlReplace(res, 
			'img[src*=".116x65."]',
			'.116x65.',
			'.1920x1080.'
		);
		callback($(res));
	}
});