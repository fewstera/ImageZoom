// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.last.fm/*
// @include *://*.lastfm.fr/*
// @include *://*.lastfm.de/*
// @include *://*.lastfm.es/*
// @include *://*.lastfm.it/*
// @include *://*.lastfm.jp/*
// @include *://*.lastfm.pl/*
// @include *://*.lastfm.com.br/*
// @include *://*.lastfm.ru/*
// @include *://*.lastfm.se/*
// @include *://*.lastfm.com.tr/*
// ==/UserScript==

﻿// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Last.fm',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="/serve/"]',
            /\/serve\/.*\//,
            '/serve/_/'
        );
        hoverZoom.urlReplace(res,
            '.albumCover img[src*="/serve/"]',
            /\/serve\/.*\//,
            '/serve/_/',
            ':eq(0)'
        );
        hoverZoom.urlReplace(res,
            '.albumCover img[src*="amazon.com"]',
            /(\/[^\.]+)[^\/]+\.(\w+)$/,
            '$1.$2',
            ':eq(0)'
        );
        callback($(res));
    }
});