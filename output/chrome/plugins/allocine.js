// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.allocine.fr/*
// @include *://allocine.fr/*
// @include *://*.filmstarts.de/*
// @include *://filmstarts.de/*
// @include *://*.sensacine.com/*
// @include *://sensacine.com/*
// ==/UserScript==

// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Allocine',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        $('a img:not([src$="empty.gif"]):not(.hnipimg)').each(function () {
            var img = $(this);
            var src = img.attr('src');
            if (!src) return;
            var aSrc = src.split('/');
            if (options.showHighRes) {
                aSrc.splice(3, 1)
            } else {
                aSrc[3] = 'r_600_600';
            }
            src = aSrc.join('/');
            var link = $(this).parents('a:eq(0)');
            link.data().hoverZoomSrc = [src];
            res.push(link);
        });
        callback($(res));
    }
});