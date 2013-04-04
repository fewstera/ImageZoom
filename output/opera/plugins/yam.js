// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.yam.com/*
// @include *://yam.com/*
// ==/UserScript==

// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Yam',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res, 'img[src*="/t_"], img[src*="/s_"]', /\/[ts]_/, '/');
        hoverZoom.urlReplace(res, 'img[src*="/tindex"]', '/tindex', '/index');
        callback($(res));
    }
});
