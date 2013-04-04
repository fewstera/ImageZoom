// ==UserScript==
// @name Plugin
// @require js/jquery.min.js
// @all-frames true
// @include *://*.02blog.it/*
// @include *://02blog.it/*
// @include *://*.06blog.it/*
// @include *://06blog.it/*
// @include *://*.artsblog.it/*
// @include *://artsblog.it/*
// @include *://*.autoblog.it/*
// @include *://autoblog.it/*
// @include *://*.bebeblog.it/*
// @include *://bebeblog.it/*
// @include *://*.benessereblog.it/*
// @include *://benessereblog.it/*
// @include *://*.betsblog.it/*
// @include *://betsblog.it/*
// @include *://*.booksblog.it/*
// @include *://booksblog.it/*
// @include *://*.calcioblog.it/*
// @include *://calcioblog.it/*
// @include *://*.cineblog.it/*
// @include *://cineblog.it/*
// @include *://*.clickblog.it/*
// @include *://clickblog.it/*
// @include *://*.comicsblog.it/*
// @include *://comicsblog.it/*
// @include *://*.crimeblog.it/*
// @include *://crimeblog.it/*
// @include *://*.deluxeblog.it/*
// @include *://deluxeblog.it/*
// @include *://*.designerblog.it/*
// @include *://designerblog.it/*
// @include *://*.downloadblog.it/*
// @include *://downloadblog.it/*
// @include *://*.ecoblog.it/*
// @include *://ecoblog.it/*
// @include *://*.fashionblog.it/*
// @include *://fashionblog.it/*
// @include *://*.finanzablog.it/*
// @include *://finanzablog.it/*
// @include *://*.gadgetblog.it/*
// @include *://gadgetblog.it/*
// @include *://*.gamesblog.it/*
// @include *://gamesblog.it/*
// @include *://*.gossipblog.it/*
// @include *://gossipblog.it/*
// @include *://*.gustoblog.it/*
// @include *://gustoblog.it/*
// @include *://*.happyblog.it/*
// @include *://happyblog.it/*
// @include *://*.melablog.it/*
// @include *://melablog.it/*
// @include *://*.mobileblog.it/*
// @include *://mobileblog.it/*
// @include *://*.motoblog.it/*
// @include *://motoblog.it/*
// @include *://*.motorsportblog.it/*
// @include *://motorsportblog.it/*
// @include *://*.ossblog.it/*
// @include *://ossblog.it/*
// @include *://*.outdoorblog.it/*
// @include *://outdoorblog.it/*
// @include *://*.pinkblog.it/*
// @include *://pinkblog.it/*
// @include *://*.polisblog.it/*
// @include *://polisblog.it/*
// @include *://*.queerblog.it/*
// @include *://queerblog.it/*
// @include *://*.softblog.it/*
// @include *://softblog.it/*
// @include *://*.soldiblog.it/*
// @include *://soldiblog.it/*
// @include *://*.soundsblog.it/*
// @include *://soundsblog.it/*
// @include *://*.toysblog.it/*
// @include *://toysblog.it/*
// @include *://*.travelblog.it/*
// @include *://travelblog.it/*
// @include *://*.tvblog.it/*
// @include *://tvblog.it/*
// ==/UserScript==

// Copyright (c) 2011 Andrea Carron <mail2hox@gmail.com> and Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Blogo.it',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res, 'img[src*="/thn_"]', 'thn_', 'big_');
        callback($(res));
    }
});
