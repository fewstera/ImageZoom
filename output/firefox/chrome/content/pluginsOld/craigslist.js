// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.gamekult.com/*
// ==/UserScript==
// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Craigslist',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		$('span.ih[id^="images:"] ~ a').each(function() {
			var link = $(this);
			link.data().hoverZoomSrc = ['http://images.craigslist.org/' + link.siblings('span.ih').attr('id').substr(7)];
			res.push(link);
		});
		callback($(res));
	}
});