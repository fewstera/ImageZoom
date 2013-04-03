﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.ui.Notification=function(a,b,c,d){this.superclass.apply(this,arguments);this.id=a;this.title=b;this.text=c;this.icon=d;this.tabId=-1};ImageZoom_kango.ui.Notification.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.ui.NotificationBase,{id:"",title:"",text:"",icon:null,tabId:-1,show:function(){},close:function(){}});
ImageZoom_kango.ui.Notifications=function(){this.superclass.apply(this,arguments);this._notifications={};this._notificationCounter=0;ImageZoom_kango.addMessageListener("KangoNotification_show",ImageZoom_kango.lang.bind(this._onNotificationShow,this));ImageZoom_kango.addMessageListener("KangoNotification_close",ImageZoom_kango.lang.bind(this._onNotificationClose,this));ImageZoom_kango.addMessageListener("KangoNotification_click",ImageZoom_kango.lang.bind(this._onNotificationClick,this));ImageZoom_kango.browser.addEventListener(ImageZoom_kango.browser.event.TAB_REMOVED,ImageZoom_kango.lang.bind(this._onTabRemoved,
this));ImageZoom_kango.browser.addEventListener(ImageZoom_kango.browser.event.DOCUMENT_COMPLETE,ImageZoom_kango.lang.bind(this._onDocumentComplete,this));ImageZoom_kango.browser.addEventListener(ImageZoom_kango.browser.event.BEFORE_NAVIGATE,ImageZoom_kango.lang.bind(this._onBeforeNavigate,this))};
ImageZoom_kango.ui.Notifications.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.ui.NotificationsBase,{_notifications:{},_notificationCounter:0,_onNotificationShow:function(a){this._fireNotificationEvent(a.data,ImageZoom_kango.ui.Notification.prototype.event.Show)},_onNotificationClose:function(a){var b=a.data;this._fireNotificationEvent(b,ImageZoom_kango.ui.Notification.prototype.event.Close);this._removeNotification(b);a.source.dispatchMessage("KangoNotifications_rearrange")},_onNotificationClick:function(a){this._fireNotificationEvent(a.data,
ImageZoom_kango.ui.Notification.prototype.event.Click)},_onTabRemoved:function(a){this._removeNotificationForTab(a.tabId)},_onDocumentComplete:function(a){this._removeNotificationForTab(a.target.getId())},_onBeforeNavigate:function(a){this._removeNotificationForTab(a.target.getId())},_getTabById:function(a,b){ImageZoom_kango.browser.tabs.getAll(function(c){for(var d=0;d<c.length;d++)if(c[d].getId()==a){b(c[d]);return}b(null)})},_removeNotificationForTab:function(a){for(var b=ImageZoom_kango.object.getKeys(this._notifications),
c=0;c<b.length;c++){var d=b[c];if("undefined"!=typeof this._notifications[d]){var e=this._notifications[d];e.tabId==a&&(e.fireEvent(e.event.Close),this._removeNotification(d))}}},_fireNotificationEvent:function(a,b){var c=this._getNotificationById(a);null!=c&&c.fireEvent(b)},_generateId:function(){return(Math.random()+this._notificationCounter++).toString()},_getNotificationById:function(a){return this._notifications[a]||null},_registerNotification:function(a,b){this._notifications[b]=a},_removeNotification:function(a){delete this._notifications[a]},
_closeNotification:function(a){var b=this._getNotificationById(a);null!=b&&this._getTabById(b.tabId,function(b){null!=b&&b.dispatchMessage("KangoNotifications_close",a)})},_showNotification:function(a){var b=this._getNotificationById(a);null!=b&&ImageZoom_kango.browser.tabs.getCurrent(function(c){b.tabId=c.getId();var d={id:a,caption:ImageZoom_kango.getExtensionInfo().name,title:b.title,text:b.text,icon:b.icon};c.dispatchMessage("KangoNotifications_show",d)})},createNotification:function(a,b,c){var d=this,e=this._generateId(),
a=new ImageZoom_kango.ui.Notification(e,a,b,c);a.show=function(){d._showNotification(e)};a.close=function(){d._closeNotification(e)};this._registerNotification(a,e);return a}});ImageZoom_kango.NotificationsModule=function(){};ImageZoom_kango.NotificationsModule.prototype.init=function(){ImageZoom_kango.ui.notifications=new ImageZoom_kango.ui.Notifications};"undefined"!=typeof ImageZoom_kango&&"undefined"!=typeof ImageZoom_kango.registerModule&&ImageZoom_kango.registerModule(ImageZoom_kango.NotificationsModule);
