// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.panoramio.com/*
// @include *://panoramio.com/*
// ==/UserScript==

﻿// Copyright (c) 2011 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Panoramio',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [],
            search = 'img[src*="/photos/"]';
        hoverZoom.urlReplace(res,
            search,
            /(square|thumbnail|small)/,
            'medium'
        );
        hoverZoom.urlReplace(res,
            search,
            /(square|thumbnail|small|medium)/,
            'large'
        );
        if (options.showHighRes) {
            hoverZoom.urlReplace(res,
                search,
                /(.*)(square|thumbnail|small|medium)/,
                'http://static.panoramio.com/photos/original'
            );
        }
        callback($(res));
    }
});
