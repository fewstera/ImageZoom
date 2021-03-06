// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.cyworld.com/*
// @include *://cyworld.com/*
// @include *://*.cyworld.co.kr/*
// @include *://cyworld.co.kr/*
// @include *://*.cyworld.co.cn/*
// @include *://cyworld.co.cn/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Cyworld',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="thumb.cyworld.com"]',
            /.+(http:.*)/,
            '$1'
        );
        callback($(res));
    }
});
