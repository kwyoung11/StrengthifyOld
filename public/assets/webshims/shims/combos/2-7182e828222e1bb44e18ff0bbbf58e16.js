var swfmini=function(){function e(){if(!O){try{var e=E.getElementsByTagName("body")[0].appendChild(c("span"));e.parentNode.removeChild(e)}catch(t){return}O=!0;for(var a=N.length,r=0;a>r;r++)N[r]()}}function t(e){O?e():N[N.length]=e}function a(){}function r(){A&&i()}function i(){var e=E.getElementsByTagName("body")[0],t=c(v);t.setAttribute("type",w);var a=e.appendChild(t);if(a){var r=0;!function(){if(typeof a.GetVariable!=m){var i=a.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),L.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>r)return r++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),a=null}()}}function n(e){var t=null,a=d(e);if(a&&"OBJECT"==a.nodeName)if(typeof a.SetVariable!=m)t=a;else{var r=a.getElementsByTagName(v)[0];r&&(t=r)}return t}function o(e,t,a){var r,i=d(a);if(L.wk&&L.wk<312)return r;if(i)if(typeof e.id==m&&(e.id=a),L.ie&&L.win){var n="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?n+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(n+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+n+">"+l+"</object>",D[D.length]=e.id,r=d(e.id)}else{var p=c(v);p.setAttribute("type",w);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?p.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&p.setAttribute(f,e[f]));for(var h in t)t[h]!=Object.prototype[h]&&"movie"!=h.toLowerCase()&&s(p,h,t[h]);i.parentNode.replaceChild(p,i),r=p}return r}function s(e,t,a){var r=c("param");r.setAttribute("name",t),r.setAttribute("value",a),e.appendChild(r)}function l(e){var t=d(e);t&&"OBJECT"==t.nodeName&&(L.ie&&L.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=d(e);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=null);t.parentNode.removeChild(t)}}function d(e){var t=null;try{t=E.getElementById(e)}catch(a){}return t}function c(e){return E.createElement(e)}function p(e){var t=L.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}function f(e,t){if(x){var a,r=t?"visible":"hidden";O&&a&&d(e)&&(d(e).style.visibility=r)}}var m="undefined",v="object",h=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",w="application/x-shockwave-flash",b=window,E=document,T=navigator,A=!1,N=[r],D=[],P=[],O=!1,x=!0,L=function(){var e=typeof E.getElementById!=m&&typeof E.getElementsByTagName!=m&&typeof E.createElement!=m,t=T.userAgent.toLowerCase(),a=T.platform.toLowerCase(),r=a?/win/.test(a):/win/.test(t),i=a?/mac/.test(a):/mac/.test(t),n=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof T.plugins!=m&&typeof T.plugins[g]==v)l=T.plugins[g].description,!l||typeof T.mimeTypes!=m&&T.mimeTypes[w]&&!T.mimeTypes[w].enabledPlugin||(A=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof b.ActiveXObject!=m)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(d){}return{w3:e,pv:s,wk:n,ie:o,win:r,mac:i}}();return function(){L.ie&&L.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=P.length,t=0;e>t;t++)P[t][0].detachEvent(P[t][1],P[t][2]);for(var a=D.length,r=0;a>r;r++)l(D[r]);for(var i in L)L[i]=null;L=null;for(var n in swfmini)swfmini[n]=null;swfmini=null})}(),h.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return L.w3?n(e):void 0},embedSWF:function(e,a,r,i,n,s,l,u,d,c){var h={success:!1,id:a};L.w3&&!(L.wk&&L.wk<312)&&e&&a&&r&&i&&n?(f(a,!1),t(function(){r+="",i+="";var t={};if(d&&typeof d===v)for(var s in d)t[s]=d[s];t.data=e,t.width=r,t.height=i;var g={};if(u&&typeof u===v)for(var y in u)g[y]=u[y];if(l&&typeof l===v)for(var w in l)typeof g.flashvars!=m?g.flashvars+="&"+w+"="+l[w]:g.flashvars=w+"="+l[w];if(p(n)){var b=o(t,g,a);t.id==a&&f(a,!0),h.success=!0,h.ref=b}else f(a,!0);c&&c(h)})):c&&c(h)},switchOffAutoHideShow:function(){x=!1},ua:L,getFlashPlayerVersion:function(){return{major:L.pv[0],minor:L.pv[1],release:L.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,a){return L.w3?o(e,t,a):void 0},showExpressInstall:function(){},removeSWF:function(e){L.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:a,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,a,r,i){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var n=function(){if(!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};n(),setTimeout(n,90),t.ready("DOM",n),e(n),t.ready("WINDOWLOAD",n)}var o=t.modules,s=/\s*,\s*/,l={},u={},d={},c={},p={},f=e.fn.val,m=function(t,a,r,i,n){return n?f.call(e(t)):f.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var r,i=0;null!=(r=a[i]);i++)try{e(r).triggerHandler("remove")}catch(n){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var r=e.isFunction(t);return this.each(function(n){if(a=this,1===a.nodeType)if(r){var o=t.call(a,n,e.prop(a,"value",i,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,i,n){return n||(n=r),e(n)[i?"onTrigger":"on"](t,a),this.on("remove",function(r){r.originalEvent||e(n).off(t,a)}),this};var v="_webshimsLib"+Math.round(1e3*Math.random()),h=function(t,a,r){if(t=t.jquery?t[0]:t,!t)return r||{};var n=e.data(t,v);return r!==i&&(n||(n=e.data(t,v,{})),a&&(n[a]=r)),a?n&&n[a]:n};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var r=h(this,"shadowData"),i=r&&r[t.prop]||this;-1==e.inArray(i,a)&&a.push(i)}),this.pushStack(a)}}),["removeAttr","prop","attr"].forEach(function(a){l[a]=e[a],e[a]=function(t,r,n,o,s){var c="val"==o,f=c?m:l[a];if(!t||!u[r]||1!==t.nodeType||!c&&o&&"attr"==a&&e.attrFn[r])return f(t,r,n,o,s);var v,h,g,y=(t.nodeName||"").toLowerCase(),w=d[y],b="attr"!=a||n!==!1&&null!==n?a:"removeAttr";if(w||(w=d["*"]),w&&(w=w[r]),w&&(v=w[b]),v){if("value"==r&&(h=v.isVal,v.isVal=c),"removeAttr"===b)return v.value.call(t);if(n===i)return v.get?v.get.call(t):v.value;v.set&&("attr"==a&&n===!0&&(n=r),g=v.set.call(t,n)),"value"==r&&(v.isVal=h)}else g=f(t,r,n,o,s);if((n!==i||"removeAttr"===b)&&p[y]&&p[y][r]){var E;E="removeAttr"==b?!1:"prop"==b?!!n:!0,p[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,n,E,c?"val":b,a)})}return g},c[a]=function(e,r,n){d[e]||(d[e]={}),d[e][r]||(d[e][r]={});var o=d[e][r][a],s=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==a&&"value"==r?function(e){var t=this;return n.isVal?m(t,r,e,!1,0===arguments.length):l[a](t,r,e)}:"prop"==a&&"value"==e&&n.value.apply?function(){var e=l[a](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[a](this,r,e)}};d[e][r][a]=n,n.value===i&&(n.set||(n.set=n.writeable?s("set",n,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),n.get||(n.get=s("get",n,o))),["value","get","set"].forEach(function(e){n[e]&&(n["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),a=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(n,o,s){var l,u;if(!(i&&(l=r.createElement(n))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&a.call(l,o))s._supvalue=function(){var e=h(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(n,o,s.value);else{var d=l[o];s._supvalue=function(){return d&&d.apply?d.apply(this,arguments):d},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var a={};t.addReady(function(r,i){var n={},o=function(t){n[t]||(n[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(n[t]=n[t].add(i)))};e.each(a,function(e,a){return o(e),a&&a.forEach?(a.forEach(function(t){n[e].each(t)}),void 0):(t.warn("Error: with "+e+"-property. methods: "+a),void 0)}),n=null});var i,n=e([]),o=function(t,n){a[t]?a[t].push(n):a[t]=[n],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(n)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||n},flushTmpCache:function(){i=null},content:function(t,a){o(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,a,r){o(t,function(){e(this).each(function(){var e=h(this,"propValue",{});e[a]=this[a],this[a]=r})})}}}(),w=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var r=a.prop("id");return r||(t++,r="ID-"+t,a.eq(0).prop("id",r)),r}}(),implement:function(e,a){var r=h(e,"implemented")||h(e,"implemented",{});return r[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(r[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},createPropDefault:w,data:h,moveToFirstEvent:function(t,a,r){var i,n=(e._data(t,"events")||{})[a];n&&n.length>1&&(i=n.pop(),r||(r="bind"),"bind"==r&&n.delegateCount?n.splice(n.delegateCount,0,i):n.unshift(i)),t=null},addShadowDom:function(){var i,n,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,s.runs<9&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(a).width(),l=e(a).width();if(l==n&&i==o)return;n=l,o=i,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=r.body,i=r.documentElement;s[t]=function(){return Math.max(a["scroll"+e],i["scroll"+e],a["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).on("updatelayout",this.handler),e(a).bind("resize",this.handler),function(){var t,a=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),a.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(a,r,i){if(a&&r){i=i||{},a.jquery&&(a=a[0]),r.jquery&&(r=r[0]);var n=e.data(a,v)||e.data(a,v,{}),o=e.data(r,v)||e.data(r,v,{}),s={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),s=e.data(i.shadowFocusElement,v)||e.data(i.shadowFocusElement,v,s)):i.shadowFocusElement=r,e(a).on("remove",function(t){t.originalEvent||setTimeout(function(){e(r).remove()},4)}),n.hasShadow=r,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=n.shadowData={nativeElement:a,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){h(this,"shadowData",o.shadowData)}),i.data&&(s.shadowData.data=o.shadowData.data=n.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){w(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){w(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(a,r){w(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,i=this.getAttribute(r);if(null==i)return"";if(t.setAttribute("href",i+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(n){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){w(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(a,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(a,r,i){return u[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(n){var o=i[n];o&&(o="prop"===n?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),c[n](a,r,o),"*"!=a&&t.cfg.extendNative&&"prop"==n&&o.value&&e.isFunction(o.value)&&g(a,r,o),i[n]=o)}),i.initAttr&&y.content(a,r),i},defineNodeNameProperties:function(e,a,r,i){for(var n in a)!i&&a[n].initAttr&&y.createTmpCache(e),r&&(a[n][r]||(a[n][r]={},["value","set","get"].forEach(function(e){e in a[n]&&(a[n][r][e]=a[n][e],delete a[n][e])}))),a[n]=t.defineNodeNameProperty(e,n,a[n]);return i||y.flushTmpCache(),a},createElement:function(a,r,i){var n;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(a),r.before&&y.createElement(a,r.before),i&&(n=t.defineNodeNameProperties(a,i,!1,!0)),r.after&&y.createElement(a,r.after),y.flushTmpCache(),n},onNodeNamesPropertyModify:function(t,a,r,i){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof a&&(a=a.split(s)),r.initAttr&&y.createTmpCache(e),a.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),r.set&&(i&&(r.set.only=i),p[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,r,n){n||(n={}),e.isFunction(n)&&(n.set=n),t.defineNodeNamesProperty(a,r,{attr:{set:function(e){this.setAttribute(r,e),n.set&&n.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?i:r}},removeAttr:{value:function(){this.removeAttribute(r),n.set&&n.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:n.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var r;return a===i?(r=e.attributes[t]||{},a=r.specified?r.value:null,null==a?i:a):("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a),void 0)}},activeLang:function(){var a,r,i=[],n={},s=/:\/\/|^\.*\//,l=function(a,r,i){var n;return r&&i&&-1!==e.inArray(r,i.availabeLangs||[])?(a.loading=!0,n=i.langSrc,s.test(n)||(n=t.cfg.basePath+n),t.loader.loadScript(n+r+".js",function(){a.langObj[r]?(a.loading=!1,d(a,!0)):e(function(){a.langObj[r]&&d(a,!0),a.loading=!1})}),!0):!1},u=function(e){n[e]&&n[e].forEach(function(e){e.callback(a,r,"")})},d=function(e,t){if(e.activeLang!=a&&e.activeLang!==r){var i=o[e.module].options;e.langObj[a]||r&&e.langObj[r]?(e.activeLang=a,e.callback(e.langObj[a]||e.langObj[r],a),u(e.module)):t||l(e,a,i)||l(e,r,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],a),u(e.module))}},c=function(t){return"string"==typeof t&&t!==a?(a=t,r=a.split("-")[0],a==r&&(r=!1),e.each(i,function(e,t){d(t)})):"object"==typeof t&&(t.register?(n[t.register]||(n[t.register]=[]),n[t.register].push(t),t.callback(a,r,"")):(t.activeLang||(t.activeLang=""),i.push(t),d(t))),a};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,r,i,n){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[a](e,r,i,n)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(i,n){if(e.each(a,function(t,a){for(var o=e(t,i).add(n.filter(t)),s=0,l=o.length;l>s;s++)r(o[s],a)}),i===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,a,r,i,n){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var a=["form-validation"];n.lazyCustomMessages&&(n.customMessages=!0,a.push("form-message")),n.addValidators&&a.push("form-validators"),t.reTest(a),e(r).off(".lazyloadvalidation")},l=function(t){var a=!1;return e(t).jProp("elements").each(function(){return a=e(this).is(":invalid"),a?!1:void 0}),a},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var d=e.expr[":"].focus;e.expr[":"].focus=function(){try{return d.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,a){e(t).trigger(a)};var c=function(e,a,r){s(),t.ready("form-validation",function(){e[a].apply(e,r)})},p="transitionDelay"in r.documentElement.style?"":" no-transition",f=t.cfg.wspopover;f.position||f.position===!1||(f.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},f,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,a,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]?i=i[r]:i&&(a=a||e.prop(t,"validity")||{valid:1},a.valid&&(i="")),"object"==typeof i&&(a=a||e.prop(t,"validity")||{valid:1},a.valid||e.each(a,function(e,t){return t&&"valid"!=e&&i[e]?(i=i[e],!1):void 0})),"object"==typeof i&&(i=i.defaultMessage),i||""},e.fn.getErrorMessage=function(a){var r="",i=this[0];return i&&(r=t.getContentValidationMessage(i,!1,a)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),r},e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()}),t.ready("WINDOWLOAD",s),n.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})}),function(){var t,a,i=[];e(r).on("invalid",function(n){if(!n.wrongWebkitInvalid){var o=e(n.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=n.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(r).triggerHandler(s,{element:n.target,form:n.target.form,isInvalidUIPrevented:n.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&n.preventDefault(),i.push(n.target),n.extraData="fix",clearTimeout(a),a=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:e(i)};t=!1,i=[],e(n.target).trigger(a,a)},9),o=null}})}()}),webshims.register("form-datalist",function(e,t,a,r,i,n){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(a){t.createPropDefault(a,"attr"),a.prop||(a.prop={get:function(){var t=e.attr(this,"list");return t&&(t=r.getElementById(t),t&&a.propNodeName&&!e.nodeName(t,a.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var d=function(){var a={autocomplete:{attr:{get:function(){var t=this,a=e.data(t,"datalistWidget");return a?a._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var a=this,r=e.data(a,"datalistWidget");r?(r._autocomplete=t,"off"==t&&r.hideList()):"autocomplete"in a?a.autocomplete=t:a.setAttribute("autocomplete",t)}}}};!l.customDatalist||u&&"selectedOption"in e("<input />")[0]||(a.selectedOption={prop:{writeable:!1,get:function(){var t,a,r=this,i=e.prop(r,"list"),n=null;return i?(t=e.prop(r,"value"))?(a=e.prop(i,"options"),a.length?(e.each(a,function(a,r){return t==e.prop(r,"value")?(n=r,!1):void 0}),n):n):n:n}}}),u&&((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var a=this,r=e("select",a);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}}),a.list={attr:{get:function(){var a=t.contentAttr(this,"list");return null!=a?(e.data(this,"datalistListAttr",a),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):a=e.data(this,"datalistListAttr"),null==a?i:a},set:function(a){var r=this;e.data(r,"datalistListAttr",a),s[e.prop(this,"type")]||s[e.attr(this,"type")]?r.setAttribute("list",a):t.objectCreate(c,i,{input:r,id:a,datalist:e.prop(r,"list")}),e(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),t.defineNodeNameProperties("input",a),t.addReady(function(t,a){a.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},c={_create:function(a){if(!s[e.prop(a.input,"type")]&&!s[e.attr(a.input,"type")]){var r=a.datalist,i=e.data(a.input,"datalistWidget"),n=this;return r&&i&&i.datalist!==r?(i.datalist=r,i.id=a.id,e(i.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(i,"_resetListCached")),i._resetListCached(),void 0):r?(i&&i.datalist===r||(this.datalist=r,this.id=a.id,this.hasViewableData=!0,this._autocomplete=e.attr(a.input,"autocomplete"),e.data(a.input,"datalistWidget",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(a):(e(a.input).one("focus",o),t.ready("form-datalist-lazy",function(){n._destroyed||n._lazyCreate(a)}))),void 0):(i&&i.destroy(),void 0)}},destroy:function(t){var n,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(r).off(".datalist"+this.id),e(a).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===i?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(n=this.input,setTimeout(function(){e.attr(n,"list",e.attr(n,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(n,{shadowListProto:c})}),d()}}()}),function(e,t){"use strict";var a,r,i=t.$,n=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],n))})},d=t.cfg.mediaelement;if(!d)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(n){var c=document.createElement("video");if(e.videoBuffered="buffered"in c,o="loop"in c,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var p={1:1,2:1},f=function(e){var a,n,o;if(!d.preferFlash&&(i(e.target).is("audio, video")||(o=e.target.parentNode)&&i("source:last",o)[0]==e.target)&&(a=i(e.target).closest("audio, video"))&&!p[n=a.prop("error")]){if(null==n)return t.warn("There was an unspecified error on a mediaelement"),void 0;i(function(){r&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||a.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",f,!0),i("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",f,!0)})}};document.addEventListener("error",f,!0),i("audio, video").each(function(){var e=i.prop(this,"error");return e&&!p[e]?(f({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof i("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),a=e.track&&!s.track,t.register("mediaelement-core",function(e,t,i,s,c){r=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(r?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var a,r,i,n=e.src.split("://"),o=n[1].split("/");for(e.server=n[0]+"://"+o[0]+"/",e.streamId=[],a=1,r=o.length;r>a;a++)i||-1===o[a].indexOf(":")||(o[a]=o[a].split(":")[1],i=!0),i?e.streamId.push(o[a]):e.server+=o[a]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,a){t=e(t);var r,i={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return i.src?(r=t.attr("data-server"),null!=r&&(i.server=r),r=t.attr("type"),r?(i.type=r,i.container=e.trim(r.split(";")[0])):(a||(a=t[0].nodeName.toLowerCase(),"source"==a&&(a=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=a+"/rtmp",i.container=a+"/rtmp"):(r=p.getTypeForSrc(i.src,a,i),r&&(i.type=r,i.container=r))),r=t.attr("media"),r&&(i.media=r),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:p.parseRtmp(i)),i):i},m=!r&&"postMessage"in i&&n,v=function(){v.loaded||(v.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},h=function(){var a;return function(){!a&&m&&(a=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){r?u():h()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,a){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return a+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var r;return e.each(p.mimeTypes[a],function(e,a){return-1!==a.indexOf(t)?(r=e,!1):void 0}),r},p.srces=function(t,a){if(t=e(t),!a){a=[];var r=t[0].nodeName.toLowerCase(),i=f(t,r);return i.src?a.push(i):e("source",t).each(function(){i=f(this,r),i.src&&a.push(i)}),a}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(a)||(a=[a]),a.forEach(function(a){"string"==typeof a&&(a={src:a}),t.append(e(s.createElement("source")).attr(a))})},e.fn.loadMediaSrc=function(t,a){return this.each(function(){a!==c&&(e(this).removeAttr("poster"),a&&e.attr(this,"poster",a)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,a){var i="";return(r||m)&&(t=e(t),a=a||p.srces(t),e.each(a,function(e,t){return t.container&&t.src&&(r&&-1!=p.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(i=t,!1):void 0})),i};var y={};p.canNativePlaySrces=function(t,a){var r="";if(n){t=e(t);var i=(t[0].nodeName||"").toLowerCase(),o=(y[i]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return r;a=a||p.srces(t),e.each(a,function(e,a){return a.type&&o.call(t[0],a.type)?(r=a,!1):void 0})}return r};var w=/^\s*application\/octet\-stream\s*$/i,b=function(){var t=w.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(a,r){if(e("source",a).filter(b).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(a).mediaLoad()}catch(i){}}else r||(r="can't play sources"),e(a).pause().data("mediaerror",r),t.error("mediaelementError: "+r),setTimeout(function(){e(a).data("mediaerror")&&e(a).trigger("mediaerror")},1)};var E=function(){var e;return function(a,i,n){t.ready(r?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(a,i,n):e||(e=!0,g(),E(a,i,n))
}),e||!m||p.createSWF||h()}}(),T=function(e,t,a,r,i){var n;a||a!==!1&&t&&"third"==t.isActive?(n=p.canThirdPlaySrces(e,r),n?E(e,n,t):i?p.setError(e,!1):T(e,t,!1,r,!0)):(n=p.canNativePlaySrces(e,r),n?t&&"third"==t.isActive&&p.setActive(e,"html5",t):i?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):T(e,t,!0,r,!0))},A=/^(?:embed|object|datalist)$/i,N=function(a,r){var i=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),n=p.srces(a),o=a.parentNode;clearTimeout(i.loadTimer),e.data(a,"mediaerror",!1),n.length&&o&&1==o.nodeType&&!A.test(o.nodeName||"")&&(r=r||t.data(a,"mediaelement"),p.sortMedia&&n.sort(p.sortMedia),T(a,r,d.preferFlash||c,n))};p.selectSource=N,e(s).on("ended",function(a){var r=t.data(a.target,"mediaelement");(!o||r&&"html5"!=r.isActive||e.prop(a.target,"loop"))&&setTimeout(function(){!e.prop(a.target,"paused")&&e.prop(a.target,"loop")&&e(a.target).prop("currentTime",0).play()},1)});var D=!1,P=function(){var s=function(){if(t.implement(this,"mediaelement")&&(N(this),n&&(!o||"ActiveXObject"in i))){var a,r,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var a="",r=0,i=t.length;i>r;r++)a+=t.end(r);return a}},u=function(){var a=l();a!=r&&(r=a,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(r=l()),clearTimeout(a),a=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(r=!1),clearTimeout(a)}}),"ActiveXObject"in i&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){D=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var i=t.defineNodeNameProperty(a,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");N(this,e),!n||e&&"html5"!=e.isActive||!i.prop._supvalue||i.prop._supvalue.apply(this,arguments)}}});y[a]=t.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(t){var i="";return n&&y[a].prop._supvalue&&(i=y[a].prop._supvalue.call(this,t),"no"==i&&(i="")),!i&&r&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(i="maybe")),i}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(a.loadTimer),a.loadTimer=setTimeout(function(){N(e),e=null},9)}}),t.addReady(function(t,a){var r=e("video, audio",t).add(a.filter("video, audio")).each(s);!v.loaded&&e("track",r).length&&v(),r=null})}),n&&!D&&t.addReady(function(r,i){D||e("video, audio",r).add(i.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?(a&&!t.modules.track.options.override||v.loaded||!e("track",this).length||v(),void 0):(g(),D=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),n?(t.isReady("mediaelement-core",!0),P(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,P),t.ready("track",v)})}(Modernizr,webshims);