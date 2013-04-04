// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.dropbox.com/*
// @include *://dropbox.com/*
// ==/UserScript==

﻿// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Dropbox',
    prepareImgLinks:function (callback) {
        var res = [];
        $('a[href]').filter(function () {
            return this.href.match(/\.(?:jpe?g|gif|png|svg|webp|bmp|ico|xbm)$/i);
        }).each(function () {
                var _this = $(this);
                _this.data().hoverZoomSrc = [this.href.replace('//www.', '//dl.')];
                res.push(_this);
            });
        callback($(res));
    }
});