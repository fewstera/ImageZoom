﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.UninstallObserver={init:function(){this.register()},observe:function(a,c,b){a=a.QueryInterface(Components.interfaces.nsIUpdateItem);"item-uninstalled"==b&&a.id==ImageZoom_kango.getExtensionInfo().id&&ImageZoom_kango.fireEvent(ImageZoom_kango.event.UNINSTALL)},register:function(){Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService).addObserver(this,"em-action-requested",!1)},unregister:function(){Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService).removeObserver(this,
"em-action-requested")}};ImageZoom_kango.addEventListener(ImageZoom_kango.event.READY,function(){"undefined"!=typeof AddonManager?AddonManager.addAddonListener({onUninstalling:function(a){a.id==ImageZoom_kango.getExtensionInfo().id&&ImageZoom_kango.fireEvent(ImageZoom_kango.event.UNINSTALL)}}):ImageZoom_kango.UninstallObserver.init()});
