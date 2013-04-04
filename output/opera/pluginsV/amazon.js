// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.amazon.com/*
// @include *://*.amazon.ca/*
// @include *://*.amazon.cn/*
// @include *://*.amazon.fr/*
// @include *://*.amazon.de/*
// @include *://*.amazon.co.jp/*
// @include *://*.amazon.co.uk/*
// @include *://*.gizmodo.jp/*
// ==/UserScript==

// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Amazon',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*=".images-amazon.com"]:not([src*="g-ecx.images-amazon.com"]), img[src*="/img.amazon."], .iv_thumb_image, img[src*="/ciu/"]',
            /_.+_\./,
            ''
        );
        callback($(res));
    }
});