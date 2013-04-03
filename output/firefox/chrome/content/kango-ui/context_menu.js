/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
ImageZoom_kango.ui.ContextMenuItem=function(a){this.superclass.apply(this,arguments);this.init(a)};
ImageZoom_kango.ui.ContextMenuItem.prototype=ImageZoom_kango.oop.extend(ImageZoom_kango.ui.ContextMenuItemBase,{init:function(a){this.addItem("kango-item1",a.caption,a.context||"all")},addItem:function(a,d,e){var c=document.getElementById("contentAreaContextMenu"),b=document.createElement("menuitem");b.setAttribute("id",a);b.setAttribute("label",d);b.addEventListener("command",ImageZoom_kango.lang.bind(function(a){var b=document.popupNode;this.fireEvent(this.event.CLICK,{srcUrl:b.src,linkUrl:b.href});a.preventDefault()},this),!1);c.appendChild(b);
c.addEventListener("popupshowing",function(){var b=document.getElementById(a);null!=b&&"image"==e&&(b.hidden=!gContextMenu.onImage)},!1)}});ImageZoom_kango.ContextMenuModule=function(){};ImageZoom_kango.ContextMenuModule.prototype.init=function(){var a=ImageZoom_kango.getExtensionInfo();"undefined"!=typeof a.context_menu_item&&(ImageZoom_kango.ui.contextMenuItem=new ImageZoom_kango.ui.ContextMenuItem(a.context_menu_item))};ImageZoom_kango.registerModule(ImageZoom_kango.ContextMenuModule);
