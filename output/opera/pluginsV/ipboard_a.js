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
    name:'IP.Board',
    version:'0.1',
    prepareImgLinks:function (callback) {
        if (document.body.id != 'ipboard_body') {
            return;
        }
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="_thumb."]',
            '_thumb.',
            '.'
        );
        callback($(res));
    }
});