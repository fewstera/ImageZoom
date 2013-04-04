// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.newegg.com/*
// @include *://newegg.com/*
// @include *://*.newegg.ca/*
// @include *://newegg.ca/*
// @include *://*.newegg.com.cn/*
// @include *://newegg.com.cn/*
// ==/UserScript==

﻿// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'NewEgg',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="?$"]',
            /\?.*$/,
            ''
        );
        hoverZoom.urlReplace(res,
            'img[src*="neweggimages"]',
            /\/P\d+\//,
            '/P800/'
        );
        hoverZoom.urlReplace(res,
            'img[src*="ProductImageCompress"]',
            /NeweggImage\/ProductImageCompress.*\//,
            'productimage/'
        );
        callback($(res));
    }
});