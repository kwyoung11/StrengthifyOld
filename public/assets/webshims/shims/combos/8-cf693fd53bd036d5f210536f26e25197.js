var swfmini=function(){function e(){if(!P){try{var e=E.getElementsByTagName("body")[0].appendChild(c("span"));e.parentNode.removeChild(e)}catch(t){return}P=!0;for(var a=N.length,r=0;a>r;r++)N[r]()}}function t(e){P?e():N[N.length]=e}function a(){}function r(){T&&n()}function n(){var e=E.getElementsByTagName("body")[0],t=c(v);t.setAttribute("type",w);var a=e.appendChild(t);if(a){var r=0;!function(){if(typeof a.GetVariable!=m){var n=a.GetVariable("$version");n&&(n=n.split(" ")[1].split(","),S.pv=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)])}else if(10>r)return r++,void setTimeout(arguments.callee,10);e.removeChild(t),a=null}()}}function i(e){var t=null,a=d(e);if(a&&"OBJECT"==a.nodeName)if(typeof a.SetVariable!=m)t=a;else{var r=a.getElementsByTagName(v)[0];r&&(t=r)}return t}function o(e,t,a){var r,n=d(a);if(S.wk&&S.wk<312)return r;if(n)if(typeof e.id==m&&(e.id=a),S.ie&&S.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');n.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+l+"</object>",A[A.length]=e.id,r=d(e.id)}else{var f=c(v);f.setAttribute("type",w);for(var p in e)e[p]!=Object.prototype[p]&&("styleclass"==p.toLowerCase()?f.setAttribute("class",e[p]):"classid"!=p.toLowerCase()&&f.setAttribute(p,e[p]));for(var h in t)t[h]!=Object.prototype[h]&&"movie"!=h.toLowerCase()&&s(f,h,t[h]);n.parentNode.replaceChild(f,n),r=f}return r}function s(e,t,a){var r=c("param");r.setAttribute("name",t),r.setAttribute("value",a),e.appendChild(r)}function l(e){var t=d(e);t&&"OBJECT"==t.nodeName&&(S.ie&&S.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=d(e);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=null);t.parentNode.removeChild(t)}}function d(e){var t=null;try{t=E.getElementById(e)}catch(a){}return t}function c(e){return E.createElement(e)}function f(e){var t=S.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}function p(e,t){if(O){var a,r=t?"visible":"hidden";P&&a&&d(e)&&(d(e).style.visibility=r)}}{var m="undefined",v="object",h=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",w="application/x-shockwave-flash",b=window,E=document,M=navigator,T=!1,N=[r],A=[],x=[],P=!1,O=!0,S=function(){var e=typeof E.getElementById!=m&&typeof E.getElementsByTagName!=m&&typeof E.createElement!=m,t=M.userAgent.toLowerCase(),a=M.platform.toLowerCase(),r=/win/.test(a?a:t),n=/mac/.test(a?a:t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof M.plugins!=m&&typeof M.plugins[g]==v)l=M.plugins[g].description,!l||typeof M.mimeTypes!=m&&M.mimeTypes[w]&&!M.mimeTypes[w].enabledPlugin||(T=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof b.ActiveXObject!=m)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(d){}return{w3:e,pv:s,wk:i,ie:o,win:r,mac:n}}();!function(){S.ie&&S.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=x.length,t=0;e>t;t++)x[t][0].detachEvent(x[t][1],x[t][2]);for(var a=A.length,r=0;a>r;r++)l(A[r]);for(var n in S)S[n]=null;S=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}()}return h.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return S.w3?i(e):void 0},embedSWF:function(e,a,r,n,i,s,l,u,d,c){var h={success:!1,id:a};S.w3&&!(S.wk&&S.wk<312)&&e&&a&&r&&n&&i?(p(a,!1),t(function(){r+="",n+="";var t={};if(d&&typeof d===v)for(var s in d)t[s]=d[s];t.data=e,t.width=r,t.height=n;var g={};if(u&&typeof u===v)for(var y in u)g[y]=u[y];if(l&&typeof l===v)for(var w in l)typeof g.flashvars!=m?g.flashvars+="&"+w+"="+l[w]:g.flashvars=w+"="+l[w];if(f(i)){var b=o(t,g,a);t.id==a&&p(a,!0),h.success=!0,h.ref=b}else p(a,!0);c&&c(h)})):c&&c(h)},switchOffAutoHideShow:function(){O=!1},ua:S,getFlashPlayerVersion:function(){return{major:S.pv[0],minor:S.pv[1],release:S.pv[2]}},hasFlashPlayerVersion:f,createSWF:function(e,t,a){return S.w3?o(e,t,a):void 0},showExpressInstall:function(){},removeSWF:function(e){S.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:a,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,a,r,n){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var i=function(){if(!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},d={},c={},f={},p=e.fn.val,m=function(t,a,r,n,i){return i?p.call(e(t)):p.call(e(t),r)};e.widget||!function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var r,n=0;null!=(r=a[n]);n++)try{e(r).triggerHandler("remove")}catch(i){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):p.call(this);if(e.isArray(t))return p.apply(this,arguments);var r=e.isFunction(t);return this.each(function(i){if(a=this,1===a.nodeType)if(r){var o=t.call(a,i,e.prop(a,"value",n,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,n,i){return i||(i=r),e(i)[n?"onTrigger":"on"](t,a),this.on("remove",function(r){r.originalEvent||e(i).off(t,a)}),this};var v="_webshimsLib"+Math.round(1e3*Math.random()),h=function(t,a,r){if(t=t.jquery?t[0]:t,!t)return r||{};var i=e.data(t,v);return r!==n&&(i||(i=e.data(t,v,{})),a&&(i[a]=r)),a?i&&i[a]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var r=h(this,"shadowData"),n=r&&r[t.prop]||this;-1==e.inArray(n,a)&&a.push(n)}),this.pushStack(a)}}),["removeAttr","prop","attr"].forEach(function(a){l[a]=e[a],e[a]=function(t,r,i,o,s){var c="val"==o,p=c?m:l[a];if(!t||!u[r]||1!==t.nodeType||!c&&o&&"attr"==a&&e.attrFn[r])return p(t,r,i,o,s);var v,h,g,y=(t.nodeName||"").toLowerCase(),w=d[y],b="attr"!=a||i!==!1&&null!==i?a:"removeAttr";if(w||(w=d["*"]),w&&(w=w[r]),w&&(v=w[b]),v){if("value"==r&&(h=v.isVal,v.isVal=c),"removeAttr"===b)return v.value.call(t);if(i===n)return v.get?v.get.call(t):v.value;v.set&&("attr"==a&&i===!0&&(i=r),g=v.set.call(t,i)),"value"==r&&(v.isVal=h)}else g=p(t,r,i,o,s);if((i!==n||"removeAttr"===b)&&f[y]&&f[y][r]){var E;E="removeAttr"==b?!1:"prop"==b?!!i:!0,f[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,i,E,c?"val":b,a)})}return g},c[a]=function(e,r,i){d[e]||(d[e]={}),d[e][r]||(d[e][r]={});var o=d[e][r][a],s=function(e,t,n){return t&&t[e]?t[e]:n&&n[e]?n[e]:"prop"==a&&"value"==r?function(e){var t=this;return i.isVal?m(t,r,e,!1,0===arguments.length):l[a](t,r,e)}:"prop"==a&&"value"==e&&i.value.apply?function(){var e=l[a](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[a](this,r,e)}};d[e][r][a]=i,i.value===n&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),a=Object.prototype.hasOwnProperty,n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(n&&(l=r.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&a.call(l,o))s._supvalue=function(){var e=h(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var d=l[o];s._supvalue=function(){return d&&d.apply?d.apply(this,arguments):d},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var a={};t.addReady(function(r,n){var i={},o=function(t){i[t]||(i[t]=e(r.getElementsByTagName(t)),n[0]&&e.nodeName(n[0],t)&&(i[t]=i[t].add(n)))};e.each(a,function(e,a){return o(e),a&&a.forEach?void a.forEach(function(t){i[e].each(t)}):void t.warn("Error: with "+e+"-property. methods: "+a)}),i=null});var n,i=e([]),o=function(t,i){a[t]?a[t].push(i):a[t]=[i],e.isDOMReady&&(n||e(r.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(n=n||e(r.getElementsByTagName(t))),n||i},flushTmpCache:function(){n=null},content:function(t,a){o(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,a,r){o(t,function(){e(this).each(function(){var e=h(this,"propValue",{});e[a]=this[a],this[a]=r})})}}}(),w=function(e,t){e.defaultValue===n&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var r=a.prop("id");return r||(t++,r="ID-"+t,a.eq(0).prop("id",r)),r}}(),implement:function(e,a){var r=h(e,"implemented")||h(e,"implemented",{});return r[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(r[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},createPropDefault:w,data:h,moveToFirstEvent:function(t,a,r){var n,i=(e._data(t,"events")||{})[a];i&&i.length>1&&(n=i.pop(),r||(r="bind"),"bind"==r&&i.delegateCount?i.splice(i.delegateCount,0,n):i.unshift(n)),t=null},addShadowDom:function(){var n,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,s.runs<9&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(n),n=setTimeout(function(){if("resize"==t.type){var n=e(a).width(),l=e(a).width();if(l==i&&n==o)return;i=l,o=n,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=r.body,n=r.documentElement;s[t]=function(){return Math.max(a["scroll"+e],n["scroll"+e],a["offset"+e],n["offset"+e],n["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).on("updatelayout",this.handler),e(a).bind("resize",this.handler),function(){var t,a=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),a.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(a,r,n){if(a&&r){n=n||{},a.jquery&&(a=a[0]),r.jquery&&(r=r[0]);var i=e.data(a,v)||e.data(a,v,{}),o=e.data(r,v)||e.data(r,v,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=e.data(n.shadowFocusElement,v)||e.data(n.shadowFocusElement,v,s)):n.shadowFocusElement=r,e(a).on("remove",function(t){t.originalEvent||setTimeout(function(){e(r).remove()},4)}),i.hasShadow=r,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=i.shadowData={nativeElement:a,shadowElement:r,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){h(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=n.data),n=null}t.docObserve()}}(),propTypes:{standard:function(e){w(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){w(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(a,r){w(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,n=this.getAttribute(r);if(null==n)return"";if(t.setAttribute("href",n+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(i){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){w(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(a,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(a,r,n){return u[r]=!0,n.reflect&&t.propTypes[n.propType||"standard"](n,r),["prop","attr","removeAttr"].forEach(function(i){var o=n[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),c[i](a,r,o),"*"!=a&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(a,r,o),n[i]=o)}),n.initAttr&&y.content(a,r),n},defineNodeNameProperties:function(e,a,r,n){for(var i in a)!n&&a[i].initAttr&&y.createTmpCache(e),r&&(a[i][r]||(a[i][r]={},["value","set","get"].forEach(function(e){e in a[i]&&(a[i][r][e]=a[i][e],delete a[i][e])}))),a[i]=t.defineNodeNameProperty(e,i,a[i]);return n||y.flushTmpCache(),a},createElement:function(a,r,n){var i;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(a),r.before&&y.createElement(a,r.before),n&&(i=t.defineNodeNameProperties(a,n,!1,!0)),r.after&&y.createElement(a,r.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,a,r,n){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){f[e]||(f[e]={}),"string"==typeof a&&(a=a.split(s)),r.initAttr&&y.createTmpCache(e),a.forEach(function(t){f[e][t]||(f[e][t]=[],u[t]=!0),r.set&&(n&&(r.set.only=n),f[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,r,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(a,r,{attr:{set:function(e){this.setAttribute(r,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?n:r}},removeAttr:{value:function(){this.removeAttribute(r),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var r;return a===n?(r=e.attributes[t]||{},a=r.specified?r.value:null,null==a?n:a):void("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a))}},activeLang:function(){var a,r,n=[],i={},s=/:\/\/|^\.*\//,l=function(a,r,n){var i;return r&&n&&-1!==e.inArray(r,n.availabeLangs||[])?(a.loading=!0,i=n.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+r+".js",function(){a.langObj[r]?(a.loading=!1,d(a,!0)):e(function(){a.langObj[r]&&d(a,!0),a.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(a,r,"")})},d=function(e,t){if(e.activeLang!=a&&e.activeLang!==r){var n=o[e.module].options;e.langObj[a]||r&&e.langObj[r]?(e.activeLang=a,e.callback(e.langObj[a]||e.langObj[r],a),u(e.module)):t||l(e,a,n)||l(e,r,n)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],a),u(e.module))}},c=function(t){return"string"==typeof t&&t!==a?(a=t,r=a.split("-")[0],a==r&&(r=!1),e.each(n,function(e,t){d(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(a,r,"")):(t.activeLang||(t.activeLang=""),n.push(t),d(t))),a};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,r,n,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[a](e,r,n,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(n,i){if(e.each(a,function(t,a){for(var o=e(t,n).add(i.filter(t)),s=0,l=o.length;l>s;s++)r(o[s],a)}),n===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,a,r,n,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var a=["form-validation"];i.lazyCustomMessages&&(i.customMessages=!0,a.push("form-message")),i.addValidators&&a.push("form-validators"),t.reTest(a),e(r).off(".lazyloadvalidation")},l=function(t){var a=!1;return e(t).jProp("elements").each(function(){return a=e(this).is(":invalid"),a?!1:void 0}),a},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var d=e.expr[":"].focus;e.expr[":"].focus=function(){try{return d.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,a){e(t).trigger(a)};var c=function(e,a,r){s(),t.ready("form-validation",function(){e[a].apply(e,r)})},f="transitionDelay"in r.documentElement.style?"":" no-transition",p=t.cfg.wspopover;p.position||p.position===!1||(p.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},p,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+f+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,a,r){var n=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&n[r]?n=n[r]:n&&(a=a||e.prop(t,"validity")||{valid:1},a.valid&&(n="")),"object"==typeof n&&(a=a||e.prop(t,"validity")||{valid:1},a.valid||e.each(a,function(e,t){return t&&"valid"!=e&&n[e]?(n=n[e],!1):void 0})),"object"==typeof n&&(n=n.defaultMessage),n||""},e.fn.getErrorMessage=function(a){var r="",n=this[0];return n&&(r=t.getContentValidationMessage(n,!1,a)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),r},e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()}),t.ready("WINDOWLOAD",s),i.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})}),function(){var t,a,n=[];e(r).on("invalid",function(i){if(!i.wrongWebkitInvalid){var o=e(i.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(r).triggerHandler(s,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),n.push(i.target),i.extraData="fix",clearTimeout(a),a=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(i.target).trigger(a,a)},9),o=null}})}()}),webshims.register("form-message",function(e,t,a,r,n,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zul\xe4ssig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var l=o[""],u=function(t,a){return t&&"string"!=typeof t&&(t=t[e.prop(a,"type")]||t[(a.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},d={value:1,min:1,max:1};t.createValidationMessage=function(a,r){var n,i=u(l[r],a),s=e.prop(a,"type");return i||(i=u(o[""][r],a)||e.prop(a,"validationMessage"),t.info("could not find errormessage for: "+r+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):e.prop(a,o))||"";"patternMismatch"!=r||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),d[o]&&(n||(n=e(a).getShadowElement().data("wsWidget"+s)),n&&n.formatValue&&(l=n.formatValue(l,!1))),i=i.replace("{%"+o+"}",l),"value"==o&&(i=i.replace("{%valueLen}",l.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(){e.each(o,function(e,t){return o[t]?(l=o[t],!1):void 0})}}),s.forEach(function(a){var r={valid:1,badInput:1};t.defineNodeNamesProperty(["fieldset","output","button"],a,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var i=t.defineNodeNameProperty(n,a,{prop:{get:function(){var a=this,n="";if(!e.prop(a,"willValidate"))return n;var o=e.prop(a,"validity")||{valid:1};return o.valid?n:(n=t.getContentValidationMessage(a,o))?n:o.customError&&a.nodeName&&(n=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(a):t.data(a,"customvalidationMessage"))?n:(e.each(o,function(e,i){return!r[e]&&i?(n=t.createValidationMessage(a,e),n?!1:void 0):void 0}),!n&&o.badInput&&(n=t.createValidationMessage(a,"typeMismatch")||t.createValidationMessage(a,"valueMissing")),n||"")},writeable:!1}})})})}),function(e,t){"use strict";var a,r,n=t.$,i=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],i))})},d=t.cfg.mediaelement;if(!d)return void t.error("mediaelement wasn't implemented but loaded");if(i){var c=document.createElement("video");if(e.videoBuffered="buffered"in c,o="loop"in c,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var f={1:1,2:1},p=function(e){var a,i,o;if(!d.preferFlash&&(n(e.target).is("audio, video")||(o=e.target.parentNode)&&n("source:last",o)[0]==e.target)&&(a=n(e.target).closest("audio, video"))&&!f[i=a.prop("error")]){if(null==i)return void t.warn("There was an unspecified error on a mediaelement");n(function(){r&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||a.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",p,!0),n("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",p,!0)})}};document.addEventListener("error",p,!0),n("audio, video").each(function(){var e=n.prop(this,"error");return e&&!f[e]?(p({target:this}),!1):void 0})}}e.track&&!s.track&&!function(){if(s.track||(s.track="number"!=typeof n("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),a=e.track&&!s.track,t.register("mediaelement-core",function(e,t,n,s,c){r=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(r?"swf":"no-swf");var f=t.mediaelement;f.parseRtmp=function(e){var a,r,n,i=e.src.split("://"),o=i[1].split("/");for(e.server=i[0]+"://"+o[0]+"/",e.streamId=[],a=1,r=o.length;r>a;a++)n||-1===o[a].indexOf(":")||(o[a]=o[a].split(":")[1],n=!0),n?e.streamId.push(o[a]):e.server+=o[a]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var p=function(t,a){t=e(t);var r,n={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return n.src?(r=t.attr("data-server"),null!=r&&(n.server=r),r=t.attr("type"),r?(n.type=r,n.container=e.trim(r.split(";")[0])):(a||(a=t[0].nodeName.toLowerCase(),"source"==a&&(a=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),n.server?(n.type=a+"/rtmp",n.container=a+"/rtmp"):(r=f.getTypeForSrc(n.src,a,n),r&&(n.type=r,n.container=r))),r=t.attr("media"),r&&(n.media=r),("audio/rtmp"==n.type||"video/rtmp"==n.type)&&(n.server?n.streamId=n.src:f.parseRtmp(n)),n):n},m=!r&&"postMessage"in n&&i,v=function(){v.loaded||(v.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},h=function(){var a;return function(){!a&&m&&(a=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){r?u():h()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},f.mimeTypes.source=e.extend({},f.mimeTypes.audio,f.mimeTypes.video),f.getTypeForSrc=function(t,a){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return a+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var r;return e.each(f.mimeTypes[a],function(e,a){return-1!==a.indexOf(t)?(r=e,!1):void 0}),r},f.srces=function(t,a){if(t=e(t),!a){a=[];var r=t[0].nodeName.toLowerCase(),n=p(t,r);return n.src?a.push(n):e("source",t).each(function(){n=p(this,r),n.src&&a.push(n)}),a}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(a)||(a=[a]),a.forEach(function(a){"string"==typeof a&&(a={src:a}),t.append(e(s.createElement("source")).attr(a))})},e.fn.loadMediaSrc=function(t,a){return this.each(function(){a!==c&&(e(this).removeAttr("poster"),a&&e.attr(this,"poster",a)),f.srces(this,t),e(this).mediaLoad()
})},f.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],f.canThirdPlaySrces=function(t,a){var n="";return(r||m)&&(t=e(t),a=a||f.srces(t),e.each(a,function(e,t){return t.container&&t.src&&(r&&-1!=f.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(n=t,!1):void 0})),n};var y={};f.canNativePlaySrces=function(t,a){var r="";if(i){t=e(t);var n=(t[0].nodeName||"").toLowerCase(),o=(y[n]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return r;a=a||f.srces(t),e.each(a,function(e,a){return a.type&&o.call(t[0],a.type)?(r=a,!1):void 0})}return r};var w=/^\s*application\/octet\-stream\s*$/i,b=function(){var t=w.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};f.setError=function(a,r){if(e("source",a).filter(b).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(a).mediaLoad()}catch(n){}}else r||(r="can't play sources"),e(a).pause().data("mediaerror",r),t.error("mediaelementError: "+r),setTimeout(function(){e(a).data("mediaerror")&&e(a).trigger("mediaerror")},1)};var E=function(){var e;return function(a,n,i){t.ready(r?l:"mediaelement-yt",function(){f.createSWF?f.createSWF(a,n,i):e||(e=!0,g(),E(a,n,i))}),e||!m||f.createSWF||h()}}(),M=function(e,t,a,r,n){var i;a||a!==!1&&t&&"third"==t.isActive?(i=f.canThirdPlaySrces(e,r),i?E(e,i,t):n?f.setError(e,!1):M(e,t,!1,r,!0)):(i=f.canNativePlaySrces(e,r),i?t&&"third"==t.isActive&&f.setActive(e,"html5",t):n?(f.setError(e,!1),t&&"third"==t.isActive&&f.setActive(e,"html5",t)):M(e,t,!0,r,!0))},T=/^(?:embed|object|datalist)$/i,N=function(a,r){var n=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),i=f.srces(a),o=a.parentNode;clearTimeout(n.loadTimer),e.data(a,"mediaerror",!1),i.length&&o&&1==o.nodeType&&!T.test(o.nodeName||"")&&(r=r||t.data(a,"mediaelement"),f.sortMedia&&i.sort(f.sortMedia),M(a,r,d.preferFlash||c,i))};f.selectSource=N,e(s).on("ended",function(a){var r=t.data(a.target,"mediaelement");(!o||r&&"html5"!=r.isActive||e.prop(a.target,"loop"))&&setTimeout(function(){!e.prop(a.target,"paused")&&e.prop(a.target,"loop")&&e(a.target).prop("currentTime",0).play()},1)});var A=!1,x=function(){var s=function(){if(t.implement(this,"mediaelement")&&(N(this),i&&(!o||"ActiveXObject"in n))){var a,r,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var a="",r=0,n=t.length;n>r;r++)a+=t.end(r);return a}},u=function(){var a=l();a!=r&&(r=a,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(r=l()),clearTimeout(a),a=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(r=!1),clearTimeout(a)}}),"ActiveXObject"in n&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){A=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var n=t.defineNodeNameProperty(a,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");N(this,e),!i||e&&"html5"!=e.isActive||!n.prop._supvalue||n.prop._supvalue.apply(this,arguments)}}});y[a]=t.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(t){var n="";return i&&y[a].prop._supvalue&&(n=y[a].prop._supvalue.call(this,t),"no"==n&&(n="")),!n&&r&&(t=e.trim((t||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(t)&&(n="maybe")),n}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(a.loadTimer),a.loadTimer=setTimeout(function(){N(e),e=null},9)}}),t.addReady(function(t,a){var r=e("video, audio",t).add(a.filter("video, audio")).each(s);!v.loaded&&e("track",r).length&&v(),r=null})}),i&&!A&&t.addReady(function(r,n){A||e("video, audio",r).add(n.filter("video, audio")).each(function(){return f.canNativePlaySrces(this)?void(a&&!t.modules.track.options.override||v.loaded||!e("track",this).length||v()):(g(),A=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),i?(t.isReady("mediaelement-core",!0),x(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,x),t.ready("track",v)})}(Modernizr,webshims);