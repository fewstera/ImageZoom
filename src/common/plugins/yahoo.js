// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.search.yahoo.com/*
// @include *://search.yahoo.com/*
// @include *://*.search.yahoo.co.jp/*
// @include *://search.yahoo.co.jp/*
// ==/UserScript==

// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

// Very similar to google plugin

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Yahoo',
    version:'0.4',
    prepareImgLinks:function (callback) {
        function prepareImgLink(img) {
            var img = $(this),
                link = this.parentNode,
                href = link.href,
                imgUrlIndex = href.indexOf('imgurl=');
            href = href.substring(imgUrlIndex + 7, href.indexOf('&', imgUrlIndex));
            while (decodeURIComponent(href) != href)
                href = decodeURIComponent(href);
            img.data().hoverZoomSrc = [href];
            img.addClass('hoverZoomLink');
        }

        $('a[href*="imgurl="] > img').each(prepareImgLink);
        $('#ihover-img').load(prepareImgLink);

        var res = [];
        hoverZoom.urlReplace(res, 'img[src*="/http"]', /.*\/(http.*)/, '$1');
        callback($(res));
    }
});