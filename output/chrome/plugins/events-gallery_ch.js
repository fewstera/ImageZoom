// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.events-gallery.ch/*
// @include *://events-gallery.ch/*
// ==/UserScript==

﻿// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Events-Gallery.ch',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'a img[src*="/mini_"]',
            '/mini_',
            '/'
        );
        callback($(res));
    }
});