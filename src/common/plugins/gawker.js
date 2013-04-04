// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.gawker.com/*
// @include *://gawker.com/*
// @include *://*.kotaku.com/*
// @include *://kotaku.com/*
// @include *://*.io9.com/*
// @include *://io9.com/*
// @include *://*.lifehacker.com/*
// @include *://lifehacker.com/*
// @include *://*.gizmodo.com/*
// @include *://gizmodo.com/*
// @include *://*.gizmodo.jp/*
// @include *://gizmodo.jp/*
// @include *://*.gizmodo.de/*
// @include *://gizmodo.de/*
// @include *://*.gizmodo.com.au/*
// @include *://gizmodo.com.au/*
// @include *://*.gizmodo.pl/*
// @include *://gizmodo.pl/*
// @include *://*.deadspin.com/*
// @include *://deadspin.com/*
// @include *://*.jezebel.com/*
// @include *://jezebel.com/*
// @include *://*.jalopnik.com/*
// @include *://jalopnik.com/*
// ==/UserScript==

﻿// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Gawker',
    version:'0.3',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="img.gawkerassets.com"]',
            /(gallery|medium|small|xsmall|micro)(_\d+)?/,
            'xlarge'
        );
        hoverZoom.urlReplace(res,
            'img[src*="gizmodo.jp/assets_c"]',
            /^.*\/([^\/]*)-thumb-.*$/,
            'http://img.gizmodo.jp/upload_files2/$1.jpg'
        );
        hoverZoom.urlReplace(res,
            'img.CommenterImage',
            /_\d+\./,
            '_160.'
        );
        hoverZoom.urlReplace(res,
            'a img.FB_profile_pic',
            /_[sqta]\./,
            '_n.'
        );
        hoverZoom.urlReplace(res,
            'img[src*="/wp/"], img[src*="/wp-content/"]',
            /-\d+x\d+\./,
            '.'
        );
        hoverZoom.urlReplace(res,
            'img[src*="_thumb."]',
            '_thumb.',
            '.'
        );
        callback($(res));
    }
});