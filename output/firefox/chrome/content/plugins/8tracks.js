// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.8tracks.com/*
// @include *://8tracks.com/*
// ==/UserScript==

// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'8tracks',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        $('img[src*=".sq"], img[src*=".max"]').each(function () {
            var img = $(this),
                url = img.attr('src'),
                urls = [],
                search = /\.(sq|max)\d+\.jpg/;
            urls.push(url.replace(search, '.original.jpg'));
            urls.push(url.replace(search, '.original.png'));
            if (url.indexOf('.max200') == -1)
                urls.push(url.replace(search, '.max200.jpg'));
            img.data().hoverZoomSrc = urls;
            img.data().hoverZoomCaption = img.attr('alt');
            res.push(img);
        });
        callback($(res));
    }
});
