// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.fukung.net/*
// @include *://fukung.net/*
// @include *://*.reddit.com/*
// @include *://reddit.com/*
// ==/UserScript==

﻿// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Fukung.net',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [],
            filter = 'a[href*="/fukung.net/v/"]';
        if (document.location.hostname == 'fukung.net') {
            filter = 'a[href^="/v/"]';
        }
        hoverZoom.urlReplace(res,
            filter,
            /^.*\/v\//,
            'http://media.fukung.net/images/'
        );
        if (res.length) {
            callback($(res));
        }
    }
});