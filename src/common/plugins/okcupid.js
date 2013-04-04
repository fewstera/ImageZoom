// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.okcupid.com/*
// @include *://okcupid.com/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'OkCupid',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="/images/"]',
            /\/(\d+x\d+)\/(\d+x\d+)\/(\d+x\d+)\/(\d+x\d+)\/(\d+)/,
            '/$1/558x800/$3/$4/0'
        );
        callback($(res));
    }
});