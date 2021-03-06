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
    name:'Reddit',
    version:'0.2',
    prepareImgLinks:function (callback) {
        $('.hoverZoomLink').each(function () {
            var _this = $(this);
            if (options.filterNSFW && _this.parents('.over18').length) {
                _this.removeClass('hoverZoomLink');
            }
            _this.data().hoverZoomCaption = _this.parent().find('a.title').text();
        });
    }
});