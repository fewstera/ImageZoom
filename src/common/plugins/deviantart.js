// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.deviantart.com/*
// @include *://deviantart.com/*
// ==/UserScript==

// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'deviantART',
    prepareImgLinks:function (callback) {
        var res = [];
        $('a[data-super-img]').each(function () {
            var _this = $(this),
                url = this.dataset.superImg;
            if (options.showHighRes && this.dataset.superFullImg)
                url = this.dataset.superFullImg;
            _this.data().hoverZoomSrc = [url];
            res.push(_this);
        });
        hoverZoom.urlReplace(res,
            'a:not([data-super-img]) img[src*="deviantart.net/fs"]',
            /\/(fs\d+)\/\d+\w+\//,
            '/$1/',
            ':eq(0)'
        );
        callback($(res));
    }
});