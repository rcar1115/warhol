/*! sly 1.2.3 - 9th Feb 2014 | https://github.com/darsain/sly */
(function(k,B,Ca){function la(f,h,Va){var z,R,qa,s,ra,B,sa,ma;function ba(){var b=0,l=w.length;e.old=k.extend({},e);y=H?0:E[c.horizontal?"width":"height"]();S=K[c.horizontal?"width":"height"]();t=H?f:u[c.horizontal?"outerWidth":"outerHeight"]();w.length=0;e.start=0;e.end=Math.max(t-y,0);if(C){b=n.length;F=u.children(c.itemSelector);n.length=0;var a=na(u,c.horizontal?"paddingLeft":"paddingTop"),ta=na(u,c.horizontal?"paddingRight":"paddingBottom"),h="border-box"===k(F).css("boxSizing"),m="none"!==F.css("float"),s=0,q=F.length-1,z;t=0;F.each(function(b,l){var d=k(l),e=d[c.horizontal?"outerWidth":"outerHeight"](),f=na(d,c.horizontal?"marginLeft":"marginTop"),d=na(d,c.horizontal?"marginRight":"marginBottom"),g=e+f+d,p=!f||!d,h={};h.el=l;h.size=p?e:g;h.half=h.size/2;h.start=t+(p?f:0);h.center=h.start-Math.round(y/2-h.size/2);h.end=h.start-y+h.size;b||(t+=a);t+=g;c.horizontal||m||d&&(f&&0<b)&&(t-=Math.min(f,d));b===q&&(h.end+=ta,t+=ta,s=p?d:0);n.push(h);z=h});u[0].style[c.horizontal?"width":"height"]=(h?t:t-a-ta)+"px";t-=s;n.length?(e.start=n[0][T?"center":"start"],e.end=T?z.center:y<t?z.end:e.start):e.start=e.end=0}e.center=Math.round(e.end/2+e.start/2);k.extend(g,ua(void 0));D.length&&0<S&&(c.dynamicHandle?(N=e.start===e.end?S:Math.round(S*y/t),N=v(N,c.minHandleSize,S),D[0].style[c.horizontal?"width":"height"]=N+"px"):N=D[c.horizontal?"outerWidth":"outerHeight"](),r.end=S-N,U||Da());if(!H&&0<y){var p=e.start,h="";if(C)k.each(n,function(b,l){T?w.push(l.center):l.start+l.size>p&&p<=e.end&&(p=l.start,w.push(p),p+=y,p>e.end&&p<e.end+y&&w.push(e.end))});else for(;p-y<e.end;)w.push(p),p+=y;if(V[0]&&l!==w.length){for(l=0;l<w.length;l++)h+=c.pageBuilder.call(d,l);ga=V.html(h).children();ga.eq(g.activePage).addClass(c.activeClass)}}g.slideeSize=t;g.frameSize=y;g.sbSize=S;g.handleSize=N;C?(d.initialized?(g.activeItem>=n.length||0===b&&0<n.length)&&oa(g.activeItem>=n.length?n.length-1:0,!b):(oa(c.startAt),d[L?"toCenter":"toStart"](c.startAt)),I(L&&n.length?n[g.activeItem].center:v(e.dest,e.start,e.end))):d.initialized?I(v(e.dest,e.start,e.end)):I(c.startAt,1);A("load")}function I(b,l,fa){if(C&&a.released&&!fa){fa=ua(b);var f=b>e.start&&b<e.end;L?(f&&(b=n[fa.centerItem].center),T&&c.activateMiddle&&oa(fa.centerItem)):f&&(b=n[fa.firstItem].start)}a.init&&a.slidee&&c.elasticBounds?b>e.end?b=e.end+(b-e.end)/6:b<e.start&&(b=e.start+(b-e.start)/6):b=v(b,e.start,e.end);z=+new Date;R=0;qa=e.cur;s=b;ra=b-e.cur;B=a.tweese||a.init&&!a.slidee;sa=!B&&(l||a.init&&a.slidee||!c.speed);a.tweese=0;b!==e.dest&&(e.dest=b,A("change"),U||va());a.released&&!d.isPaused&&d.resume();k.extend(g,ua(void 0));Ea();ga[0]&&q.page!==g.activePage&&(q.page=g.activePage,ga.removeClass(c.activeClass).eq(g.activePage).addClass(c.activeClass),A("activePage",q.page))}function va(){U?(sa?e.cur=s:B?(ma=s-e.cur,0.1>Math.abs(ma)?e.cur=s:e.cur+=ma*(a.released?c.swingSpeed:c.syncSpeed)):(R=Math.min(+new Date-z,c.speed),e.cur=qa+ra*jQuery.easing[c.easing](R/c.speed,R,0,1,c.speed)),s===e.cur?(e.cur=s,a.tweese=U=0):U=ha(va),A("move"),H||(J?u[0].style[J]=ia+(c.horizontal?"translateX":"translateY")+"("+-e.cur+"px)":u[0].style[c.horizontal?"left":"top"]=-Math.round(e.cur)+"px"),!U&&a.released&&A("moveEnd"),Da()):(U=ha(va),a.released&&A("moveStart"))}function Da(){D.length&&(r.cur=e.start===e.end?0:((a.init&&!a.slidee?e.dest:e.cur)-e.start)/(e.end-e.start)*r.end,r.cur=v(Math.round(r.cur),r.start,r.end),q.hPos!==r.cur&&(q.hPos=r.cur,J?D[0].style[J]=ia+(c.horizontal?"translateX":"translateY")+"("+r.cur+"px)":D[0].style[c.horizontal?"left":"top"]=r.cur+"px"))}function Fa(){p.speed&&e.cur!==(0<p.speed?e.end:e.start)||d.stop();Ga=a.init?ha(Fa):0;p.now=+new Date;p.pos=e.cur+(p.now-p.lastTime)/1E3*p.speed;I(a.init?p.pos:Math.round(p.pos));a.init||e.cur!==e.dest||A("moveEnd");p.lastTime=p.now}function wa(b,l,a){"boolean"===ja(l)&&(a=l,l=Ca);l===Ca?I(e[b],a):L&&"center"!==b||(l=d.getPos(l))&&I(l[b],a,!L)}function pa(b){return null!=b?O(b)?0<=b&&b<n.length?b:-1:F.index(b):-1}function xa(b){return pa(O(b)&&0>b?b+n.length:b)}function oa(b,l){var a=pa(b);if(!C||0>a)return!1;if(q.active!==a||l)F.eq(g.activeItem).removeClass(c.activeClass),F.eq(a).addClass(c.activeClass),q.active=g.activeItem=a,Ea(),A("active",a);return a}function ua(b){b=v(O(b)?b:e.dest,e.start,e.end);var a={},c=T?0:y/2;if(!H)for(var d=0,f=w.length;d<f;d++){if(b>=e.end||d===w.length-1){a.activePage=w.length-1;break}if(b<=w[d]+c){a.activePage=d;break}}if(C){for(var f=d=c=!1,g=0,h=n.length;g<h;g++)if(!1===c&&b<=n[g].start+n[g].half&&(c=g),!1===f&&b<=n[g].center+n[g].half&&(f=g),g===h-1||b<=n[g].end+n[g].half){d=g;break}a.firstItem=O(c)?c:0;a.centerItem=O(f)?f:a.firstItem;a.lastItem=O(d)?d:a.centerItem}return a}function Ea(){var b=e.dest<=e.start,l=e.dest>=e.end,d=b?1:l?2:3;q.slideePosState!==d&&(q.slideePosState=d,W.is("button,input")&&W.prop("disabled",b),X.is("button,input")&&X.prop("disabled",l),W.add(ca)[b?"addClass":"removeClass"](c.disabledClass),X.add(Y)[l?"addClass":"removeClass"](c.disabledClass));q.fwdbwdState!==d&&a.released&&(q.fwdbwdState=d,ca.is("button,input")&&ca.prop("disabled",b),Y.is("button,input")&&Y.prop("disabled",l));C&&(b=0===g.activeItem,l=g.activeItem>=n.length-1,d=b?1:l?2:3,q.itemsButtonState!==d&&(q.itemsButtonState=d,Z.is("button,input")&&Z.prop("disabled",b),$.is("button,input")&&$.prop("disabled",l),Z[b?"addClass":"removeClass"](c.disabledClass),$[l?"addClass":"removeClass"](c.disabledClass)))}function Ha(b,a,d){b=xa(b);a=xa(a);if(-1<b&&-1<a&&b!==a&&!(d&&a===b-1||!d&&a===b+1)){F.eq(b)[d?"insertAfter":"insertBefore"](n[a].el);var c=b<a?b:d?a:a-1,e=b>a?b:d?a+1:a,f=b>a;b===g.activeItem?q.active=g.activeItem=d?f?a+1:a:f?a:a-1:g.activeItem>c&&g.activeItem<e&&(q.active=g.activeItem+=f?1:-1);ba()}}function Ia(b,a){for(var d=0,c=G[b].length;d<c;d++)if(G[b][d]===a)return d;return-1}function Ja(b){return Math.round(v(b,r.start,r.end)/r.end*(e.end-e.start))+e.start}function Wa(){a.history[0]=a.history[1];a.history[1]=a.history[2];a.history[2]=a.history[3];a.history[3]=a.delta}function Ka(b){a.released=0;a.source=b;a.slidee="slidee"===b}function La(b){if(!(a.init||~k.inArray(b.target.nodeName,Ma)||k(b.target).is(c.interactive))){var l="touchstart"===b.type,f=b.data.source,g="slidee"===f;if("handle"!==f||c.dragHandle&&r.start!==r.end)if(!g||(l?c.touchDragging:c.mouseDragging&&2>b.which))l||M(b,1),Ka(f),a.init=1,a.$source=k(b.target),a.touch=l,a.pointer=l?b.originalEvent.touches[0]:b,a.initX=a.pointer.pageX,a.initY=a.pointer.pageY,a.initPos=g?e.cur:r.cur,a.start=+new Date,a.time=0,a.path=0,a.delta=0,a.locked=0,a.history=[0,0,0,0],a.pathToLock=g?l?30:10:0,a.initLoc=a[c.horizontal?"initX":"initY"],a.deltaMin=g?-a.initLoc:-r.cur,a.deltaMax=g?document[c.horizontal?"width":"height"]-a.initLoc:r.end-r.cur,da.on(l?Na:Oa,Pa),d.pause(1),(g?u:D).addClass(c.draggedClass),A("moveStart"),g&&(Qa=setInterval(Wa,10))}}function Pa(b){a.released="mouseup"===b.type||"touchend"===b.type;a.pointer=a.touch?b.originalEvent[a.released?"changedTouches":"touches"][0]:b;a.pathX=a.pointer.pageX-a.initX;a.pathY=a.pointer.pageY-a.initY;a.path=Math.sqrt(Math.pow(a.pathX,2)+Math.pow(a.pathY,2));a.delta=v(c.horizontal?a.pathX:a.pathY,a.deltaMin,a.deltaMax);if(!a.locked&&a.path>a.pathToLock)if(a.locked=1,c.horizontal?Math.abs(a.pathX)<Math.abs(a.pathY):Math.abs(a.pathX)>Math.abs(a.pathY))a.released=1;else if(a.slidee)a.$source.on(aa,ya);a.released?(a.touch||M(b),Xa(),c.releaseSwing&&a.slidee&&(a.swing=300*((a.delta-a.history[0])/40),a.delta+=a.swing,a.tweese=10<Math.abs(a.swing))):!a.locked&&a.touch||M(b);I(a.slidee?Math.round(a.initPos-a.delta):Ja(a.initPos+a.delta))}function Xa(){clearInterval(Qa);da.off(a.touch?Na:Oa,Pa);(a.slidee?u:D).removeClass(c.draggedClass);setTimeout(function(){a.$source.off(aa,ya)});d.resume(1);e.cur===e.dest&&a.init&&A("moveEnd");a.init=0}function Ra(){d.stop();da.off("mouseup",Ra)}function ea(b){M(b);switch(this){case Y[0]:case ca[0]:d.moveBy(Y.is(this)?c.moveBy:-c.moveBy);da.on("mouseup",Ra);break;case Z[0]:d.prev();break;case $[0]:d.next();break;case W[0]:d.prevPage();break;case X[0]:d.nextPage()}}function Ya(b){x.curDelta=b.wheelDelta?-b.wheelDelta/120:(b.detail||b.deltaY)/3;if(!C)return x.curDelta;za=+new Date;x.last<za-x.resetTime&&(x.delta=0);x.last=za;x.delta+=x.curDelta;1>Math.abs(x.delta)?x.finalDelta=0:(x.finalDelta=Math.round(x.delta/1),x.delta%=1);return x.finalDelta}function Za(b){c.scrollBy&&e.start!==e.end&&(M(b,1),d.slideBy(c.scrollBy*Ya(b.originalEvent)))}function $a(b){c.clickBar&&b.target===K[0]&&(M(b),I(Ja((c.horizontal?b.pageX-K.offset().left:b.pageY-K.offset().top)-N/2)))}function ab(b){if(c.keyboardNavBy)switch(b.which){case c.horizontal?37:38:M(b);d["pages"===c.keyboardNavBy?"prevPage":"prev"]();break;case c.horizontal?39:40:M(b),d["pages"===c.keyboardNavBy?"nextPage":"next"]()}}function bb(b){~k.inArray(this.nodeName,Ma)||k(this).is(c.interactive)?b.stopPropagation():this.parentNode===u[0]&&d.activate(this)}function cb(){this.parentNode===V[0]&&d.activatePage(ga.index(this))}function db(b){if(c.pauseOnHover)d["mouseenter"===b.type?"pause":"resume"](2)}function A(b,a){if(G[b]){Aa=G[b].length;for(P=Ba.length=0;P<Aa;P++)Ba.push(G[b][P]);for(P=0;P<Aa;P++)Ba[P].call(d,b,a)}}var c=k.extend({},la.defaults,h),d=this,H=O(f),E=k(f),u=E.children().eq(0),y=0,t=0,e={start:0,center:0,end:0,cur:0,dest:0},K=k(c.scrollBar).eq(0),D=K.children().eq(0),S=0,N=0,r={start:0,end:0,cur:0},V=k(c.pagesBar),ga=0,w=[],F=0,n=[],g={firstItem:0,lastItem:0,centerItem:0,activeItem:-1,activePage:0};h="basic"===c.itemNav;var T="forceCentered"===c.itemNav,L="centered"===c.itemNav||T,C=!H&&(h||L||T),Sa=c.scrollSource?k(c.scrollSource):E,eb=c.dragSource?k(c.dragSource):E,Y=k(c.forward),ca=k(c.backward),Z=k(c.prev),$=k(c.next),W=k(c.prevPage),X=k(c.nextPage),G={},q={};ma=sa=B=ra=s=qa=R=z=void 0;var p={},a={released:1},x={last:0,delta:0,resetTime:200},U=0,Qa=0,Q=0,Ga=0,P,Aa;H||(f=E[0]);d.initialized=0;d.frame=f;d.slidee=u[0];d.pos=e;d.rel=g;d.items=n;d.pages=w;d.isPaused=0;d.options=c;d.dragging=a;d.reload=ba;d.getPos=function(b){if(C)return b=pa(b),-1!==b?n[b]:!1;var a=u.find(b).eq(0);return a[0]?(b=c.horizontal?a.offset().left-u.offset().left:a.offset().top-u.offset().top,a=a[c.horizontal?"outerWidth":"outerHeight"](),{start:b,center:b-y/2+a/2,end:b-y+a,size:a}):!1};d.moveBy=function(b){p.speed=b;!a.init&&(p.speed&&e.cur!==(0<p.speed?e.end:e.start))&&(p.lastTime=+new Date,p.startPos=e.cur,Ka("button"),a.init=1,A("moveStart"),ka(Ga),Fa())};d.stop=function(){"button"===a.source&&(a.init=0,a.released=1)};d.prev=function(){d.activate(g.activeItem-1)};d.next=function(){d.activate(g.activeItem+1)};d.prevPage=function(){d.activatePage(g.activePage-1)};d.nextPage=function(){d.activatePage(g.activePage+1)};d.slideBy=function(b,a){if(b)if(C)d[L?"toCenter":"toStart"](v((L?g.centerItem:g.firstItem)+c.scrollBy*b,0,n.length));else I(e.dest+b,a)};d.slideTo=function(b,a){I(b,a)};d.toStart=function(b,a){wa("start",b,a)};d.toEnd=function(b,a){wa("end",b,a)};d.toCenter=function(b,a){wa("center",b,a)};d.getIndex=pa;d.activate=function(b,e){var f=oa(b);c.smart&&!1!==f&&(L?d.toCenter(f,e):f>=g.lastItem?d.toStart(f,e):f<=g.firstItem?d.toEnd(f,e):a.released&&!d.isPaused&&d.resume())};d.activatePage=function(b,a){O(b)&&I(w[v(b,0,w.length-1)],a)};d.resume=function(b){!c.cycleBy||(!c.cycleInterval||"items"===c.cycleBy&&!n[0]||b<d.isPaused)||(d.isPaused=0,Q?Q=clearTimeout(Q):A("resume"),Q=setTimeout(function(){A("cycle");switch(c.cycleBy){case "items":d.activate(g.activeItem>=n.length-1?0:g.activeItem+1);break;case "pages":d.activatePage(g.activePage>=w.length-1?0:g.activePage+1)}},c.cycleInterval))};d.pause=function(b){b<d.isPaused||(d.isPaused=b||100,Q&&(Q=clearTimeout(Q),A("pause")))};d.toggle=function(){d[Q?"pause":"resume"]()};d.set=function(b,a){k.isPlainObject(b)?k.extend(c,b):c.hasOwnProperty(b)&&(c[b]=a)};d.add=function(b,a){var d=k(b);C?(null!=a&&n[0]?n.length&&d.insertBefore(n[a].el):d.appendTo(u),a<=g.activeItem&&(q.active=g.activeItem+=d.length)):u.append(d);ba()};d.remove=function(b){if(C){if(b=xa(b),-1<b){F.eq(b).remove();var a=b===g.activeItem;b<g.activeItem&&(q.active=--g.activeItem);ba();a&&(q.active=null,d.activate(g.activeItem))}}else k(b).remove(),ba()};d.moveAfter=function(b,a){Ha(b,a,1)};d.moveBefore=function(b,a){Ha(b,a)};d.on=function(b,a){if("object"===ja(b))for(var c in b){if(b.hasOwnProperty(c))d.on(c,b[c])}else if("function"===ja(a)){c=b.split(" ");for(var e=0,f=c.length;e<f;e++)G[c[e]]=G[c[e]]||[],-1===Ia(c[e],a)&&G[c[e]].push(a)}else if("array"===ja(a))for(c=0,e=a.length;c<e;c++)d.on(b,a[c])};d.one=function(b,a){function c(){a.apply(d,arguments);d.off(b,c)}d.on(b,c)};d.off=function(a,c){if(c instanceof Array)for(var e=0,f=c.length;e<f;e++)d.off(a,c[e]);else for(var e=a.split(" "),f=0,g=e.length;f<g;f++)if(G[e[f]]=G[e[f]]||[],null==c)G[e[f]].length=0;else{var h=Ia(e[f],c);-1!==h&&G[e[f]].splice(h,1)}};d.destroy=function(){da.add(Sa).add(D).add(K).add(V).add(Y).add(ca).add(Z).add($).add(W).add(X).unbind("."+m);Z.add($).add(W).add(X).removeClass(c.disabledClass);F&&F.eq(g.activeItem).removeClass(c.activeClass);V.empty();H||(E.unbind("."+m),u.add(D).css(J||(c.horizontal?"left":"top"),J?"none":0),k.removeData(f,m));n.length=w.length=0;q={};d.initialized=0;return d};d.init=function(){if(!d.initialized){d.on(Va);var a=D;H||(a=a.add(u),E.css("overflow","hidden"),J||"static"!==E.css("position")||E.css("position","relative"));J?ia&&a.css(J,ia):("static"===K.css("position")&&K.css("position","relative"),a.css({position:"absolute"}));if(c.forward)Y.on(Ta,ea);if(c.backward)ca.on(Ta,ea);if(c.prev)Z.on(aa,ea);if(c.next)$.on(aa,ea);if(c.prevPage)W.on(aa,ea);if(c.nextPage)X.on(aa,ea);Sa.on("DOMMouseScroll."+m+" mousewheel."+m,Za);if(K[0])K.on(aa,$a);if(C&&c.activateOn)E.on(c.activateOn+"."+m,"*",bb);if(V[0]&&c.activatePageOn)V.on(c.activatePageOn+"."+m,"*",cb);eb.on(Ua,{source:"slidee"},La);if(D)D.on(Ua,{source:"handle"},La);da.bind("keydown."+m,ab);H||(E.on("mouseenter."+m+" mouseleave."+m,db),E.on("scroll."+m,fb));ba();if(c.cycleBy&&!H)d[c.startPaused?"pause":"resume"]();d.initialized=1;return d}}}function ja(f){return null==f?String(f):"object"===typeof f||"function"===typeof f?Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof f}function M(f,h){f.preventDefault();h&&f.stopPropagation()}function ya(f){M(f,1);k(this).off(f.type,ya)}function fb(){this.scrollTop=this.scrollLeft=0}function O(f){return!isNaN(parseFloat(f))&&isFinite(f)}function na(f,h){return 0|Math.round(String(f.css(h)).replace(/[^\-0-9.]/g,""))}function v(f,h,k){return f<h?h:f>k?k:f}var m="sly",ka=B.cancelAnimationFrame||B.cancelRequestAnimationFrame,ha=B.requestAnimationFrame,J,ia,da=k(document),Ua="touchstart."+m+" mousedown."+m,Oa="mousemove."+m+" mouseup."+m,Na="touchmove."+m+" touchend."+m,aa="click."+m,Ta="mousedown."+m,Ma=["INPUT","SELECT","BUTTON","TEXTAREA"],Ba=[],za;(function(f){for(var h=["moz","webkit","o"],k=0,m=0,R=h.length;m<R&&!ka;++m)ha=(ka=f[h[m]+"CancelAnimationFrame"]||f[h[m]+"CancelRequestAnimationFrame"])&&f[h[m]+"RequestAnimationFrame"];ka||(ha=function(h){var m=+new Date,z=Math.max(0,16-(m-k));k=m+z;return f.setTimeout(function(){h(m+z)},z)},ka=function(f){clearTimeout(f)})})(window);(function(){function f(f){for(var m=0,v=h.length;m<v;m++){var s=h[m]?h[m]+f.charAt(0).toUpperCase()+f.slice(1):f;if(null!=k.style[s])return s}}var h=["","webkit","moz","ms","o"],k=document.createElement("div");J=f("transform");ia=f("perspective")?"translateZ(0) ":""})();B.Sly=la;k.fn.sly=function(f,h){var v,z;if(!k.isPlainObject(f)){if("string"===ja(f)||!1===f)v=!1===f?"destroy":f,z=Array.prototype.slice.call(arguments,1);f={}}return this.each(function(J,B){var s=k.data(B,m);s||v?s&&v&&s[v]&&s[v].apply(s,z):k.data(B,m,(new la(B,f,h)).init())})};la.defaults={horizontal:0,itemNav:null,itemSelector:null,smart:0,activateOn:null,activateMiddle:0,scrollSource:null,scrollBy:0,dragSource:null,mouseDragging:0,touchDragging:0,releaseSwing:0,swingSpeed:0.2,elasticBounds:0,interactive:null,scrollBar:null,dragHandle:0,dynamicHandle:0,minHandleSize:50,clickBar:0,syncSpeed:0.5,pagesBar:null,activatePageOn:null,pageBuilder:function(f){return"<li>"+(f+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5E3,pauseOnHover:0,startPaused:0,moveBy:300,speed:0,easing:"swing",startAt:0,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}})(jQuery,window);
this["Handlebars"] = this["Handlebars"] || {};

this["Handlebars"]["article_thumb"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"";
  if (helper = helpers.column_css) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.column_css); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"thumb\">\n    <a class=\"h-5 thumb-link\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.category)),stack1 == null || stack1 === false ? stack1 : stack1.permalink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.category)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    <a href=\"";
  if (helper = helpers.permalink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.permalink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumb-feature\">\n      <img src=\"";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"m-overlay blanket-light\"></div>\n      <span class=\"thumb-time\">";
  if (helper = helpers.when) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.when); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n      <span class=\"thumb-views data-views\"><i class=\"icon-views\"></i>";
  if (helper = helpers.views) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.views); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </a>\n    <a href=\"";
  if (helper = helpers.permalink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.permalink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"h-2 thumb-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    <div class=\"h-5 thumb-caption\">";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </div>\n</div>";
  return buffer;
  });
this["Handlebars"] = this["Handlebars"] || {};

this["Handlebars"]["instabinge_thumb"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li>\n  <a href=\"javascript:void(0)\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.low_resolution)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"instabinge-link\">@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n  </a>\n</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["instabinge_thumb_modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <li>\n            <a href=\"http://www.instagram.com/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.from)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"instabinge-username\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.from)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n            <div class=\"instabinge-comment\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n          </li>\n          ";
  return buffer;
  }

  buffer += "<li style=\"width:";
  if (helper = helpers.window_width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.window_width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\">\n  <div class=\"instabinge-pod-wrap\">\n    <div class=\"modal-view-image m-wrap m-transparent\">\n      <img class=\"m-bg\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1.standard_resolution)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n    <div class=\"modal-view-details\">\n      <div class=\"instabinge-profile\">\n        <div class=\"instabinge-profile-img\">\n          <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.profile_picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n        <div class=\"instabinge-profile-details\">\n          <div class=\"instabinge-profile-details-primary\">\n            <div class=\"instabinge-username\">@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <div class=\"instabinge-name\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.full_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n          </div>\n          <div class=\"instabinge-profile-details-secondary\">\n            <div class=\"instabinge-when\">";
  if (helper = helpers.created_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"instabinge-likes\"><i class=\"icon-likes\"></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.likes)),stack1 == null || stack1 === false ? stack1 : stack1.count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"instabinge-comment\">\n        <span class=\"instabinge-caption\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.caption)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        <span class=\"instabinge-tags\">";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n      <div class=\"instabinge-comments\">\n        <div class=\"instabinge-secondary\">Comments</div>\n        <ul class=\"instabinge-other-comments\">\n          ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.comments)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </div>\n    </div>\n  </div>\n</li>";
  return buffer;
  });
/*!
 * imagesLoaded PACKAGED v3.1.6
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/* global LWA, Handlebars */
window.LWA = window.LWA || { Views: {}, Modules: {} };

LWA.Views.PostThumbs = (function() {

  var $body = $('html,body');

  var AjaxFeature = {

    element: {
      container: $('#tmpl_featured')
    },

    state: {
      loader: undefined,
      loading: false
    },

    template: Handlebars.article_thumb,
    
    params: {
      'action': 'do_ajax',
      'fn': 'get_next_featured_posts',
      'page': 2
    },

    done: function(response) {
      AjaxFeature.params.page = response.nextPage;
      AjaxFeature.render(response.posts);
      AjaxFeature.renderButton();
      AjaxFeature.hide();
    },

    render: function(posts) {
      var e, html = '', idx = 0;

      $.each(posts, function(o) {
        
        if (idx === 0) {
          html += '<div class="f-row">';
        }
        
        posts[o].column_css = 'f-1-2 bp2-1';
        html += AjaxFeature.template(posts[o]);
        idx++;
        
        if (idx === 2) {
          idx = 0;
          html += '</div>';
        }
      });

      if (idx === 1) {
        html += '</div>';
      }

      e = $(html);
      AjaxFeature.element.container.append(e);
      scrollPage(e);
    },

    renderButton: function() {
      if (this.params.page === false) {
        AjaxFeature.state.loader.el.addClass('button-disabled');
      }
    },

    isLoadable: function() {
      return this.params.page !== false && this.state.loading === false;
    },

    onClick: function() {
      if (AjaxFeature.isLoadable()) {
        AjaxFeature.show();
        get(AjaxFeature.done, AjaxFeature.params);
      }
    },

    show: function() {
      AjaxFeature.state.loading = true;
      AjaxFeature.state.loader.start();
    },

    hide: function() {
      AjaxFeature.state.loading = false;
      AjaxFeature.state.loader.stop();
    },

    init: function() {
      AjaxFeature.state.loader = LWA.Modules.ButtonLoader('#ajax-load-features');
      AjaxFeature.state.loader.el.click(AjaxFeature.onClick);
    }
  };

  var AjaxNews = {

    element: {
      container: $('#tmpl_news')
    },

    state: {
      loading: false,
      loader: undefined
    },

    template: Handlebars.article_thumb,

    params: {
      'action': 'do_ajax',
      'fn': 'get_next_news_posts',
      'page': 2
    },

    done: function(response) {
      AjaxNews.params.page = response.nextPage;
      AjaxNews.render(response.posts);
      AjaxNews.renderButton();
      AjaxNews.hide();
    },

    render: function(posts) {
      var e, html = '';

      $.each(posts, function(o) {
        posts[o].column_css = 'f-1-3 bp2-1-2 thumb-inline';
        html += AjaxNews.template(posts[o]);
      });

      e = $(html);
      AjaxNews.element.container.append(e);
      scrollPage(e);
    },

    renderButton: function() {
      if (this.params.page === false) {
        this.state.loader.el.addClass('button-disabled');
      }
    },

    isLoadable: function() {
      return this.params.page !== false && this.state.loading === false;
    },

    onClick: function() {
      if (AjaxNews.isLoadable()) {
        AjaxNews.show();
        get(AjaxNews.done, AjaxNews.params);
      }
    },

    show: function() {
      this.state.loading = true;
      this.state.loader.start();
    },

    hide: function() {
      this.state.loading = false;
      this.state.loader.stop();
    },

    init: function() {
      this.state.loader = LWA.Modules.ButtonLoader('#ajax-load-news');
      this.state.loader.el.click(this.onClick);
    }
  };

  function get(callback, params) {
    $.getJSON(LWA.Data.url + '/wp-admin/admin-ajax.php', params)
      .done(function(response) {
        callback(response);
      })
      .fail(function(response) {
        console.log(response);
      });
  }

  function scrollPage(element) {
    $body.animate({
      scrollTop: element.offset().top - 20
    }, 500);
  }

  return {
    init: function() {
      AjaxFeature.init();
      AjaxNews.init();
    }
  };

})();

LWA.Views.PostThumbs.init();
/* global LWA */
window.LWA = window.LWA || { Views: {}, Modules: {} };

LWA.Views.Home = (function() {

  return {
    initialiseCarousel: function() {
      $('.feature-carousel').flexslider({
        controlsContainer: '#feature-carousel-control',
        initDelay: 1000 // delay the start
      });
    },

    init: function() {
      LWA.Modules.Loader({
        imageContent: '.header-feature-bg',
        hiddenContent: '.header-feature .m-wrap',
        loader: LWA.Modules.Spinner('.header-feature .loader-icon', {show: true}),
        delayLoader: 1600,
        delayReveal: 1700,
        callback: this.initialiseCarousel
      });
    }
  };

})();

LWA.Views.Home.init();

/* global LWA, Sly, Handlebars, imagesLoaded, Hammer */
window.LWA = window.LWA || { Views: {}, Modules: {} };

LWA.Views.Instabinge = (function() {

  var Time = {
    MINUTE_IN_SECONDS : 60,
    HOUR_IN_SECONDS   : 60 * 60,
    DAY_IN_SECONDS    : 24 * 60 * 60,
    WEEK_IN_SECONDS   : 7 * 24 * 60 * 60,
    YEAR_IN_SECONDS   : 365 * 24 * 60 * 60,

    convert: function(now, unixSeconds) {
      var
        since,
        calc,
        diff = (now/1000) - unixSeconds;
      
      if ( diff < Time.HOUR_IN_SECONDS ) {
        calc = Math.round( diff / Time.MINUTE_IN_SECONDS );
        if ( calc <= 1 ) {
          calc = 1;
        }
        since = calc + 'min';
      } else if ( diff < Time.DAY_IN_SECONDS && diff >= Time.HOUR_IN_SECONDS ) {
        calc = Math.round( diff / Time.HOUR_IN_SECONDS );
        if ( calc <= 1 ) {
          calc = 1;
        }
        since = calc + 'h';
      } else if ( diff < Time.WEEK_IN_SECONDS && diff >= Time.DAY_IN_SECONDS ) {
        calc = Math.round( diff / Time.DAY_IN_SECONDS );
        if ( calc <= 1 ) {
          calc = 1;
        }
        since = calc + 'd';
      } else if ( diff < 30 * Time.DAY_IN_SECONDS && diff >= Time.WEEK_IN_SECONDS ) {
        calc = Math.round( diff / Time.WEEK_IN_SECONDS );
        if ( calc <= 1 ) {
          calc = 1;
        }
        since = calc + 'w';
      } else if ( diff < Time.YEAR_IN_SECONDS && diff >= 30 * Time.DAY_IN_SECONDS ) {
        calc = Math.round( diff / ( 30 * Time.DAY_IN_SECONDS ) );
        if ( calc <= 1 ) {
          calc = 1;
        }
        since = calc + 'm';
      } else if ( diff >= Time.YEAR_IN_SECONDS ) {
        calc = Math.round( diff / Time.YEAR_IN_SECONDS );
        if ( calc <= 1 ){
          calc = 1;
        }
        since = calc + 'y';
      }

      return since;
    }
  };

  var Ajax = {
    cache: [],
    feedUrl: 'https://api.instagram.com/v1/users/self/feed?access_token=9513217.1f648b0.783f3c9408a64877b9783ccc25bb983f&callback=?',
    get: function(callback) {
      $.getJSON(Ajax.feedUrl)
        .done(function(response) {
          Ajax.cache = Ajax.cache.concat(response.data);
          Ajax.feedUrl = response.pagination.next_url + '&callback=?';
          if (callback) {
            callback(response);
          } else {
            View.render(response);
          }
        })
        .fail(function(response) {
          console.log(response);
        });
    }
  };

  var View = {
    
    element: {
      $frame: $('#instabinge')
    },

    state: {
      sly: undefined,
      modal: undefined
    },

    template: Handlebars.instabinge_thumb,

    initialize: function() {
      var instabingeButtons = $('#instabinge-buttons');
      
      View.state.sly = new Sly('#instabinge', {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: null,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 0,
        startAt: 0,
        activatePageOn: null,
        speed: 300,
        elasticBounds: 1,
        easing: 'swing',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        prevPage: instabingeButtons.find('.sly-prev'),
        nextPage: instabingeButtons.find('.sly-next')
      });

      View.state.sly.on('moveEnd', function(eventName) {
        if (this.pos.dest === this.pos.end) {
          Ajax.get(View.append);
        }
      });

      View.element.$frame.on('click', 'li', function(ev) {
        View.state.modal.show();
        Modal.initialize(View.state.sly.getIndex($(ev.currentTarget)));
      });

      Ajax.get();
    },

    render: function(response) {
      View.element.$frame.find('ul').append(this.template(response));
      View.state.sly.init();
    },

    append: function(response) {
      View.state.sly.add(View.template(response));
    },

    reload: function() {
      View.state.sly.reload();
    }
  };

  var Modal = {

    element: {
      $frame: $('#modal-instabinge-frame')
    },

    template: Handlebars.instabinge_thumb_modal,

    initialize: function(index) {
      View.state.modal.loader.start();
      console.log('initialize modal');
      
      Modal.state = Modal.setDefaults();
      Modal.state.singleLoader = LWA.Modules.Spinner('#modal-instabinge .loader-icon');
      Modal.element.$frame.width(Modal.getWindowWidth());

      console.log('start at', index);
      if (index === 0) {
        Modal.state.isLoad = false;
      }

      // get cached data and render
      Modal.state.activeItem = Modal.render(index);
      Modal.initializeSly(Modal.state.activeItem);
      Modal.state.nextIndex = index + 1;
    },

    initializeSly: function(index) {
      var $wrap = $('#modal-instabinge-controls');
      Modal.state.sly = new Sly('#modal-instabinge-frame', {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateMiddle: 1,
        releaseSwing: 0,
        touchDragging: 1,
        startAt: index,
        speed: 240,
        elasticBounds: 1,
        easing: 'swing',
        prev: $wrap.find('.sly-prev'),
        next: $wrap.find('.sly-next')
      });

      Modal.state.sly.init();
      Modal.state.sly.on('moveEnd', Modal.onActivate);
    },

    setDefaults: function() {
      return {
        sly: undefined,
        modal: undefined,
        singleLoader: undefined,
        isLoad: true,
        activeItem: 0,
        nextIndex: 0
      };
    },

    onActivate: function(eventName) {
      if (Modal.state.isLoad) {
        Modal.state.isLoad = false;
        return;
      }

      // if left load next
      if (Modal.state.activeItem < this.rel.activeItem) {
        // if one before end
        if (this.rel.activeItem === this.items.length - 1) {
          Modal.renderNext();
        }
      }
      
      Modal.state.activeItem = this.rel.activeItem;
    },

    renderNext: function() {
      if (Modal.isLast(Modal.state.nextIndex)) {
        console.log('last item');
        Ajax.get(Modal.onLoad);
        return;
      }

      Modal.state.nextIndex++;

      var frame = Modal.renderFrame(Modal.state.nextIndex);
      Modal.handleImageLoad(frame, frame.find('img'));
      Modal.state.sly.add(frame);
    },

    handleImageLoad: function(wrapper, images) {
      imagesLoaded(images, function(instance) {
        Modal.state.singleLoader.hide();
        wrapper.find('.m-wrap').removeClass('m-transparent');
      });
    },

    isLast: function(index) {
      return (index === Ajax.cache.length - 1);
    },

    getWindowWidth: function() {
      if (window.matchMedia && window.matchMedia("(max-width: 599px)").matches) {
        return $(window).width() - 20;
      } else {
        return $(window).width();
      }
    },

    isMobile: function() {
      // todo cache this and update on browser resize
      return (window.matchMedia && window.matchMedia("(max-width: 599px)").matches);
    },

    onLoad: function(response) {
      // keep horizontal view in sync
      View.state.sly.add(View.template(response));
      View.state.sly.reload();
      Modal.renderNext();
    },

    reload: function() {
      // todo
      var width = Modal.getWindowWidth();
      Modal.element.$frame.width(Modal.getWindowWidth()).find('li').css('width', width);
      Modal.state.sly.reload();
    },

    destroy: function() {
      Modal.state.sly.destroy();
      Modal.element.$frame.attr('style', null)
        .find('.slidee').attr('style', null)
        .find('li').remove();
    },

    render: function(index) {
      Modal.state.singleLoader.show();
      var slidee = Modal.element.$frame.find('.slidee');

      if (index > 0) {
        var fragment = $(document.createDocumentFragment());
        for (var i = 0; i < index; i++) {
          fragment.append(Modal.renderFrame(i));
        }
        slidee.append(fragment);
      }

      slidee.append(Modal.renderFrame(index));
      slidee.append(Modal.renderFrame(index + 1));

      imagesLoaded(Modal.element.$frame.find('img'), function(instance) {
        View.state.modal.loader.stop();
        Modal.state.singleLoader.hide();
        Modal.element.$frame.find('.m-wrap').removeClass('m-transparent');
      });

      return index;
    },

    renderFrame: function(index) {
      var item = Modal.formatData(Ajax.cache[index]);
      return $(this.template(item));
    },

    formatData: function(data) {
      if (Modal.isMobile() && data.caption.text.length >= 100) {
        data.caption.text = data.caption.text.substring(0, 100);
      }
      data.created_time = Time.convert(Date.now(), data.created_time);
      data.window_width = Modal.getWindowWidth();
      return data;
    },

    init: function() {
      View.state.modal = LWA.Modules.Modal(undefined, '#modal-instabinge', {
        close: Modal.destroy
      });
    }
  };

  // hold off on resize event
  var delay = (function() {
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  function updateSly() {
    delay(function() {
      console.log("reload...");
      View.reload();
      Modal.reload();
    }, 200);
  }

  return {
    init: function() {
      View.initialize();
      Modal.init();

      $(window).resize(updateSly);
    }
  };

})();

LWA.Views.Instabinge.init();