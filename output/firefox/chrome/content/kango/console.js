/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.Console=function(){this._consoleService=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService)};ImageZoom_kango.Console.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.IConsole,{_consoleService:null,log:function(a){1<arguments.length&&(a=ImageZoom_kango.string.format.apply(ImageZoom_kango.string,arguments));this._consoleService.logStringMessage(a)}});ImageZoom_kango.console=new ImageZoom_kango.Console;
