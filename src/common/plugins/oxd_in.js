// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.oxd.in/*
// @include *://oxd.in/*
// @include *://*.reddit.com/*
// @include *://reddit.com/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'oxd.in',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [],
            filter = 'a[href*="oxd.in/i/"]';
        if (document.location.hostname == 'oxd.in') {
            filter = 'a[href^="/i/"]';
        }
        hoverZoom.urlReplace(res,
            filter,
            /(\/i\/)(.*)/,
            '/img/$2.jpg'
        );
        callback($(res));
    }
});
