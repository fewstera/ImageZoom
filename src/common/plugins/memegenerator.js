// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.reddit.com/*
// @include *://reddit.com/*
// ==/UserScript==

﻿// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Memegenerator',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'a[href*="memegenerator.net/instance/"]',
            /.*instance\/(\d+).*/,
            'http://images.memegenerator.net/instances/500x/$1.jpg'
        );
        callback($(res));
    }
});