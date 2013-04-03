﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.Storage=function(){};
ImageZoom_kango.Storage.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.IStorage,{getItem:function(a){a=ImageZoom_kango.simpleStorage.getItem(a);return"undefined"!=typeof a&&null!=a?JSON.parse(a):null},setItem:function(a,b){if("undefined"!=typeof b){var c=JSON.stringify(b);"undefined"!=typeof c&&ImageZoom_kango.simpleStorage.setItem(a,c)}else return this.removeItem(a)},removeItem:function(a){return ImageZoom_kango.simpleStorage.removeItem(a)},clear:function(){return ImageZoom_kango.simpleStorage.clear()},getKeys:function(){for(var a=[],b=ImageZoom_kango.simpleStorage.getKeys(),
c=0;c<b.length;c++){var d=b[c];0!=d.indexOf(this.SYSTEM_STORAGE_PREFIX)&&a.push(d)}return a}});ImageZoom_kango.storage=new ImageZoom_kango.Storage;ImageZoom_kango.SystemStorage=function(){this.PREFIX=ImageZoom_kango.storage.SYSTEM_STORAGE_PREFIX};ImageZoom_kango.SystemStorage.prototype={PREFIX:null,getItem:function(a){return ImageZoom_kango.simpleStorage.getItem(this.PREFIX+a)},setItem:function(a,b){return ImageZoom_kango.simpleStorage.setItem(this.PREFIX+a,b)},removeItem:function(a){return ImageZoom_kango.simpleStorage.removeItem(this.PREFIX+a)}};ImageZoom_kango.systemStorage=new ImageZoom_kango.SystemStorage;


// Merged from /Users/fewstera/ImageZoom_kango/src/js/firefox/ImageZoom_kango/jsonstorage.part.js

ImageZoom_kango.PrefStorage=function(){this._preferenceBranch=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch(this.PREFERENCE_BRANCH_NAME)};
ImageZoom_kango.PrefStorage.prototype={_preferenceBranch:null,PREFERENCE_BRANCH_NAME:"extensions.ImageZoom_kango.storage.",setItem:function(a,b){return this._preferenceBranch.setCharPref(a,JSON.stringify(b))},getItem:function(a){var b=this._preferenceBranch.getPrefType(a),c=null;b==this._preferenceBranch.PREF_STRING?c=this._preferenceBranch.getCharPref(a):b==this._preferenceBranch.PREF_INT?c=this._preferenceBranch.getIntPref(a):b==this._preferenceBranch.PREF_BOOL&&(c=this._preferenceBranch.getBoolPref(a));return"undefined"!=
typeof c&&null!=c?JSON.parse(c):null},removeItem:function(a){try{return this._preferenceBranch.clearUserPref(a)}catch(b){return!1}},getKeys:function(){return this._preferenceBranch.getChildList("",{})},clear:function(){return this._preferenceBranch.deleteBranch("")}};(function(){var a=new ImageZoom_kango.PrefStorage,b=a.getKeys();if(0<b.length){for(var c=0;c<b.length;c++)ImageZoom_kango.storage.setItem(b[c],a.getItem(b[c]));a.clear()}})();
