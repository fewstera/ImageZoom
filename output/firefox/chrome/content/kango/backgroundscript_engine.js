/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.BackgroundScriptEngine=function(){};
ImageZoom_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(a){var b=this;this._sandbox=ImageZoom_kango.lang.createHTMLSandbox("background.html",function(c){b._initScripts(c,a)})},getContext:function(){return this._window},_initScripts:function(a,b){this._window=a;a.kango=b;var c=a.document,d=ImageZoom_kango.getExtensionInfo().background_scripts;if("undefined"!=typeof d){var e=0,f=function(){var a=c.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",ImageZoom_kango.io.getExtensionFileUrl(d[e]));
var b=function(){e++;e<d.length&&f()};"undefined"!=typeof a.onreadystatechange?a.onreadystatechange=function(){"complete"==a.readyState&&b()}:a.onload=b;c.body.appendChild(a)};f()}}};ImageZoom_kango.BackgroundScriptModule=function(){};ImageZoom_kango.BackgroundScriptModule.prototype.init=function(a){ImageZoom_kango.backgroundScript=new ImageZoom_kango.BackgroundScriptEngine;ImageZoom_kango.addEventListener(ImageZoom_kango.event.READY,function(){ImageZoom_kango.backgroundScript.init(a)})};ImageZoom_kango.registerModule(ImageZoom_kango.BackgroundScriptModule);
