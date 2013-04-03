/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.MessageRouter=function(){};ImageZoom_kango.MessageRouter.prototype={_onMessage:function(a){this.onmessage(a)},onmessage:function(){},dispatchMessage:function(a,b){var c={name:a,data:b,origin:"background",target:ImageZoom_kango,source:ImageZoom_kango},d=this;window.setTimeout(function(){d.onmessage(c)},1);return!0}};
