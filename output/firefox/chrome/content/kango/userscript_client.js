/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.UserscriptEngineClient=function(){};ImageZoom_kango.UserscriptEngineClient.prototype={run:function(c,b,a){var d=this;ImageZoom_kango.invokeAsync("kango.userscript.getScripts",c.document.URL,b,a,function(a){for(var b in a)a.hasOwnProperty(b)&&d.executeScript(c,a[b].join("\n\n"))})},executeScript:function(c,b){try{var a=new ImageZoom_kango.UserscriptApi(c);a.kango=ImageZoom_kango;ImageZoom_kango.lang.evalInSandbox(c,a,b)}catch(d){ImageZoom_kango.console.log("US: "+d.message+"\n"+d.stack||"")}}};ImageZoom_kango.UserscriptApi=function(){};
ImageZoom_kango.UserscriptApi.prototype={};
