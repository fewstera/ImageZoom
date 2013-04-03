/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.ui.OptionsPage=function(){var a=ImageZoom_kango.getExtensionInfo();if("undefined"!=typeof a.options_page){var b=this._optionsUrl=ImageZoom_kango.io.getExtensionFileUrl(a.options_page).toLowerCase();ImageZoom_kango.browser.addEventListener("DOMContentLoaded",function(a){0==a.url.toLowerCase().indexOf(b)&&(a.window.kango=ImageZoom_kango)})}};
ImageZoom_kango.ui.OptionsPage.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.ui.IOptionsPage,{_optionsUrl:"",open:function(a){if(""!=this._optionsUrl){var b=this._optionsUrl;"undefined"!=typeof a&&(b+="#"+a);ImageZoom_kango.browser.tabs.create({url:b,focused:!0,reuse:!0});return!0}return!1}});ImageZoom_kango.ui.optionsPage=new ImageZoom_kango.ui.OptionsPage;
