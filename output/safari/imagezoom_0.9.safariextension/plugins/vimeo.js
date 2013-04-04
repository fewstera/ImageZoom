// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.vimeo.com/*
// @include *://vimeo.com/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Vimeo',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="/ps/"]',
            /_\d+\./,
            '_300.'
        );
        hoverZoom.urlReplace(res,
            'img[src*="/ts/"]',
            /_\d+\./,
            '_640.'
        );
        callback($(res));
    }
});
