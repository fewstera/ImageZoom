// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.reddit.com/*
// @include *://reddit.com/*
// ==/UserScript==

// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Picsarus',
    version:'0.2',
    prepareImgLinks:function (callback) {
        var res = [];

        $('a[href*="picsarus.com/"]').each(function () {
            if (this.href.match(/\.(jpe?g|gif|png)$/i)) {
                return;
            }
            var link = $(this),
                aHref = link.attr('href').split('/');
            if (aHref.length < 4) {
                return;
            }
            var url = 'http://www.picsarus.com/upload_images/' + aHref[3];
            link.data().hoverZoomSrc = [url + '.jpg', url + '.png', url + '.gif'];
            res.push(link);
        });

        if (res.length) {
            callback($(res));
        }
    }
});
