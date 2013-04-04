// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.rakuten.co.jp/*
// @include *://rakuten.co.jp/*
// @include *://*.rakuten.com/*
// @include *://rakuten.com/*
// ==/UserScript==

// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Rakuten',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="?_ex="]',
            /\?_ex=.*$/,
            ''
        );
        callback($(res));
    }
});