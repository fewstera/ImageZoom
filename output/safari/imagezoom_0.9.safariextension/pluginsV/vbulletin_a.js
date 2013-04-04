// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'vBulletin',
    version:'0.1',
    prepareImgLinks:function (callback) {
        if (!hoverZoom.pageGenerator || hoverZoom.pageGenerator.indexOf('vBulletin') == -1) {
            return;
        }
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="thumb=1"]',
            'thumb=1',
            'thumb=0'
        );
        callback($(res));
    }
});