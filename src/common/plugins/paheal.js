// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.paheal.net/*
// @include *://paheal.net/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Paheal.net',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="thumbs"]',
            ['thumbs', 'thumbs'],
            ['images', 'images']
        );
        callback($(res));
    }
});