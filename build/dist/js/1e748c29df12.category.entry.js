!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=n(1);o("#dropdown-sort"),LWA.Modules.Loader({imageContent:".header-feature-bg",hiddenContent:".header-feature .m-wrap"})},function(e,t){"use strict";e.exports=function(e,t){var n={element:{$wrap:void 0,$label:void 0,$items:void 0},close:function(){n.element.$wrap.removeClass("dropdown-active")},onClick:function(e){e.preventDefault(),e.stopPropagation(),n.element.$wrap.toggleClass("dropdown-active")},onItemClick:function(e){n.element.$wrap.removeClass("dropdown-active");var t=$(e.currentTarget),o=t.addClass("dropdown-item-active").html();t.siblings().removeClass("dropdown-item-active"),n.setLabel(o)},setLabel:function(e){n.element.$label.html(e)},init:function(e,t){n.element.$wrap=$(e),n.element.$label=n.element.$wrap.find(".dropdown-label span"),n.element.$wrap.find(".dropdown-label").click(n.onClick)}},o={init:function(){$("html").click(n.close)}};n.init(e,t),o.init()}}]);
//# sourceMappingURL=category.entry.js.map