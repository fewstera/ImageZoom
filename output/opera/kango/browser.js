﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
kango.KangoBrowserCookie=function(){this.path=this.hostOnly=this.domain=this.value=this.name="";this.session=this.httpOnly=this.secure=!1;this.expires=0};kango.BrowserBase=function(){kango.oop.mixin(this,kango.EventTarget.prototype);kango.oop.mixin(this,new kango.EventTarget)};
kango.BrowserBase.prototype={event:{DocumentComplete:"DocumentComplete",DOCUMENT_COMPLETE:"DocumentComplete",BeforeNavigate:"BeforeNavigate",BEFORE_NAVIGATE:"BeforeNavigate",TabChanged:"TabChanged",TAB_CHANGED:"TabChanged",TabCreated:"TabCreated",TAB_CREATED:"TabCreated",TabRemoved:"TabRemoved",TAB_REMOVED:"TabRemoved"},getName:function(){throw new kango.NotImplementedException;},getCookies:function(){throw new kango.NotImplementedException;},getCookie:function(){throw new kango.NotImplementedException;
},setCookie:function(){throw new kango.NotImplementedException;},tabs:{getAll:function(){throw new kango.NotImplementedException;},getCurrent:function(){throw new kango.NotImplementedException;},create:function(){throw new kango.NotImplementedException;}},windows:{getAll:function(){throw new kango.NotImplementedException;},getCurrent:function(){throw new kango.NotImplementedException;},create:function(){throw new kango.NotImplementedException;}}};kango.IBrowserWindow=function(){};
kango.IBrowserWindow.prototype={getTabs:function(){throw new kango.NotImplementedException;},getCurrentTab:function(){throw new kango.NotImplementedException;},isActive:function(){throw new kango.NotImplementedException;}};kango.IBrowserTab=function(){};
kango.IBrowserTab.prototype={getId:function(){throw new kango.NotImplementedException;},getUrl:function(){throw new kango.NotImplementedException;},getTitle:function(){throw new kango.NotImplementedException;},getDOMWindow:function(){throw new kango.NotImplementedException;},isActive:function(){throw new kango.NotImplementedException;},navigate:function(){throw new kango.NotImplementedException;},dispatchMessage:function(){throw new kango.NotImplementedException;},close:function(){throw new kango.NotImplementedException;
}};


// Merged from /Users/fewstera/kango/src/js/opera/kango/browser.part.js

kango.Browser=function(){this.superclass.apply(this,arguments);opera.extension.tabs.addEventListener("focus",kango.lang.bind(this._onTabFocus,this),!1);opera.extension.tabs.addEventListener("close",kango.lang.bind(this._onTabClose,this),!1);opera.extension.tabs.addEventListener("create",kango.lang.bind(this._onTabCreate,this),!1);var a=this;kango.addEventListener(kango.event.READY,function(){kango.addMessageListener("KangoBrowser_DOMContentLoaded",function(b){a._onDOMContentLoaded(b.target,b.data)});
kango.addMessageListener("KangoBrowser_BeforeNavigate",function(b){a._onBeforeNavigate(b.target,b.data)})})};
kango.Browser.prototype=kango.oop.extend(kango.BrowserBase,{_onBeforeNavigate:function(a,b){this.fireEvent(this.event.BEFORE_NAVIGATE,{url:b.url,target:a})},_onDOMContentLoaded:function(a,b){this.fireEvent(this.event.DOCUMENT_COMPLETE,{url:b.url,title:b.title,target:a})},_onTabFocus:function(a){"undefined"!=typeof a.tab&&(a=a.tab,this.fireEvent(this.event.TAB_CHANGED,{url:a.url||"",title:a.title||"",tabId:a.id,target:new kango.BrowserTab(a)}))},_onTabCreate:function(a){"undefined"!=typeof a.tab&&
this.fireEvent(this.event.TAB_CREATED,{tabId:a.tab.id,target:new kango.BrowserTab(a.tab)})},_onTabClose:function(a){"undefined"!=typeof a.tab&&this.fireEvent(this.event.TAB_REMOVED,{tabId:a.tab.id})},getName:function(){return"opera"},tabs:{getAll:function(a){for(var b=[],d=opera.extension.tabs.getAll(),c=0;c<d.length;c++)d[c].url&&b.push(new kango.BrowserTab(d[c]));a(b)},getCurrent:function(a){var b=opera.extension.tabs.getSelected();null!=b&&a(new kango.BrowserTab(b))},create:function(a){opera.extension.tabs.create({url:a.url,
focused:"undefined"!=typeof a.focused?a.focused:!0})}},windows:{getAll:function(a){a(kango.array.map(opera.extension.windows.getAll(),function(a){return new kango.BrowserWindow(a)}))},getCurrent:function(a){var b=opera.extension.windows.getLastFocused();null!=b&&a(new kango.BrowserWindow(b))},create:function(a){opera.extension.windows.create().tabs[0].url=a.url}},getTabFromUrl:function(a){var b=opera.extension.tabs.getFocused();if(null==b||b.url!=a)for(var d=opera.extension.windows.getAll(),c=0;c<
d.length;c++)for(var f=d[c].tabs.getAll(),e=0;e<f.length&&!(f[e].url==a&&(b=f[e],f[e].focused));e++);return new kango.BrowserTab(b)}});kango.BrowserWindow=function(a){this._window=a};
kango.BrowserWindow.prototype=kango.oop.extend(kango.IBrowserWindow,{_window:null,getTabs:function(a){var b=[],d=this._window.tabs.getAll();if(null!=d)for(var c=0;c<d.length;c++)d[c].url&&b.push(new kango.BrowserTab(d[c]));a(b)},getCurrentTab:function(a){var b=this._window.tabs.getSelected();null!=b&&a(new kango.BrowserTab(b))},isActive:function(){return this._window.focused}});kango.BrowserTab=function(a){this._tab=a};
kango.BrowserTab.prototype=kango.oop.extend(kango.IBrowserTab,{_tab:null,getId:function(){return this._tab.id},getUrl:function(){return this._tab.url||""},getTitle:function(){return this._tab.title||""},getDOMWindow:function(){return null},isActive:function(){return this._tab.focused},navigate:function(a){this.dispatchMessage("KangoBrowser_navigate",a)},dispatchMessage:function(a,b){try{return this._tab.postMessage(JSON.stringify({name:a,data:b})),!0}catch(d){return!1}},close:function(){this._tab.close()}});
kango.browser=new kango.Browser;
