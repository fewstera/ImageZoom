// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.furaffinity.net/*
// ==/UserScript==

﻿// Copyright (c) 2013 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'FurAffinity',
    prepareImgLinks:function (callback) {
        var res = [];
        $('a[href*="/view/"]').one('mouseover', function() {
            hoverZoom.prepareFromDocument($(this), this.href, function(doc) {
                var srcLink = doc.querySelector('a[href*="d.facdn.net"]');
                return srcLink ? srcLink.href : false;
            });
        });
        callback($(res));
    }
});