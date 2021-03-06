// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.jeuxvideo.com/*
// @include *://jeuxvideo.com/*
// ==/UserScript==

﻿// Copyright (c) 2012 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'JeuxVideo.com',
    version:'0.2',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'a img[src*="_m."]',
            '_m.',
            '.'
        );
        callback($(res));
    }
});