// ==UserScript==
// @name Website Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*
// ==/UserScript==
// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'deviantART',
	version: '0.1',
	prepareImgLinks: function(callback) {
		$('a[href*=".deviantart.com/art/"], a[href^="http://fav.me/"]').one('mouseenter', function() {
			hoverZoom.prepareOEmbedLink(this, 'http://backend.deviantart.com/oembed?url=', this.href);
		});
	}
});