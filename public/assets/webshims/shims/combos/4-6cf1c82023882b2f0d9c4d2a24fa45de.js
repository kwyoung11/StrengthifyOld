webshims.register("dom-extend",function(e,t,n,a,r){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var i=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},f={},h=e.fn.val,m=function(t,n,a,r,i){return i?h.call(e(t)):h.call(e(t),a)};e.widget||!function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var a,r=0;null!=(a=n[r]);r++)try{e(a).triggerHandler("remove")}catch(i){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):h.call(this);if(e.isArray(t))return h.apply(this,arguments);var a=e.isFunction(t);return this.each(function(i){if(n=this,1===n.nodeType)if(a){var o=t.call(n,i,e.prop(n,"value",r,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,r,i){return i||(i=a),e(i)[r?"onTrigger":"on"](t,n),this.on("remove",function(a){a.originalEvent||e(i).off(t,n)}),this};var p="_webshimsLib"+Math.round(1e3*Math.random()),g=function(t,n,a){if(t=t.jquery?t[0]:t,!t)return a||{};var i=e.data(t,p);return a!==r&&(i||(i=e.data(t,p,{})),n&&(i[n]=a)),n?i&&i[n]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var a=g(this,"shadowData"),r=a&&a[t.prop]||this;-1==e.inArray(r,n)&&n.push(r)}),this.pushStack(n)}}),["removeAttr","prop","attr"].forEach(function(n){l[n]=e[n],e[n]=function(t,a,i,o,s){var d="val"==o,h=d?m:l[n];if(!t||!u[a]||1!==t.nodeType||!d&&o&&"attr"==n&&e.attrFn[a])return h(t,a,i,o,s);var p,g,v,b=(t.nodeName||"").toLowerCase(),y=c[b],w="attr"!=n||i!==!1&&null!==i?n:"removeAttr";if(y||(y=c["*"]),y&&(y=y[a]),y&&(p=y[w]),p){if("value"==a&&(g=p.isVal,p.isVal=d),"removeAttr"===w)return p.value.call(t);if(i===r)return p.get?p.get.call(t):p.value;p.set&&("attr"==n&&i===!0&&(i=a),v=p.set.call(t,i)),"value"==a&&(p.isVal=g)}else v=h(t,a,i,o,s);if((i!==r||"removeAttr"===w)&&f[b]&&f[b][a]){var E;E="removeAttr"==w?!1:"prop"==w?!!i:!0,f[b][a].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,i,E,d?"val":w,n)})}return v},d[n]=function(e,a,i){c[e]||(c[e]={}),c[e][a]||(c[e][a]={});var o=c[e][a][n],s=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:"prop"==n&&"value"==a?function(e){var t=this;return i.isVal?m(t,a,e,!1,0===arguments.length):l[n](t,a,e)}:"prop"==n&&"value"==e&&i.value.apply?function(){var e=l[n](this,a);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[n](this,a,e)}};c[e][a][n]=i,i.value===r&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+e}:function(){t.info(a+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var v=function(){var e=t.getPrototypeOf(a.createElement("foobar")),n=Object.prototype.hasOwnProperty,r=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(r&&(l=a.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&n.call(l,o))s._supvalue=function(){var e=g(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},b.extendValue(i,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),b=function(){var n={};t.addReady(function(a,r){var i={},o=function(t){i[t]||(i[t]=e(a.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(i[t]=i[t].add(r)))};e.each(n,function(e,n){return o(e),n&&n.forEach?void n.forEach(function(t){i[e].each(t)}):void t.warn("Error: with "+e+"-property. methods: "+n)}),i=null});var r,i=e([]),o=function(t,i){n[t]?n[t].push(i):n[t]=[i],e.isDOMReady&&(r||e(a.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(a.getElementsByTagName(t))),r||i},flushTmpCache:function(){r=null},content:function(t,n){o(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,n,a){o(t,function(){e(this).each(function(){var e=g(this,"propValue",{});e[n]=this[n],this[n]=a})})}}}(),y=function(e,t){e.defaultValue===r&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var a=n.prop("id");return a||(t++,a="ID-"+t,n.eq(0).prop("id",a)),a}}(),implement:function(e,n){var a=g(e,"implemented")||g(e,"implemented",{});return a[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(a[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:y,data:g,moveToFirstEvent:function(t,n,a){var r,i=(e._data(t,"events")||{})[n];i&&i.length>1&&(r=i.pop(),a||(a="bind"),"bind"==a&&i.delegateCount?i.splice(i.delegateCount,0,r):i.unshift(r)),t=null},addShadowDom:function(){var r,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,s.runs<9&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(r),r=setTimeout(function(){if("resize"==t.type){var r=e(n).width(),l=e(n).width();if(l==i&&r==o)return;i=l,o=r,s.height=s.getHeight(),s.width=s.getWidth()}e(a).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=a.body,r=a.documentElement;s[t]=function(){return Math.max(n["scroll"+e],r["scroll"+e],n["offset"+e],r["offset"+e],r["client"+e])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(a).on("updatelayout",this.handler),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,a,r){if(n&&a){r=r||{},n.jquery&&(n=n[0]),a.jquery&&(a=a[0]);var i=e.data(n,p)||e.data(n,p,{}),o=e.data(a,p)||e.data(a,p,{}),s={};r.shadowFocusElement?r.shadowFocusElement&&(r.shadowFocusElement.jquery&&(r.shadowFocusElement=r.shadowFocusElement[0]),s=e.data(r.shadowFocusElement,p)||e.data(r.shadowFocusElement,p,s)):r.shadowFocusElement=a,e(n).on("remove",function(t){t.originalEvent||setTimeout(function(){e(a).remove()},4)}),i.hasShadow=a,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=i.shadowData={nativeElement:n,shadowElement:a,shadowFocusElement:r.shadowFocusElement},r.shadowChilds&&r.shadowChilds.each(function(){g(this,"shadowData",o.shadowData)}),r.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=r.data),r=null}t.docObserve()}}(),propTypes:{standard:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){y(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=a.createElement("a");return t.style.display="none",function(n,a){y(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,r=this.getAttribute(a);if(null==r)return"";if(t.setAttribute("href",r+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(i){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,a){"string"==typeof a&&(a=a.split(s)),a.forEach(function(a){t.defineNodeNamesProperty(n,a,{prop:{set:function(t){e.attr(this,a,t)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(n,a,r){return u[a]=!0,r.reflect&&t.propTypes[r.propType||"standard"](r,a),["prop","attr","removeAttr"].forEach(function(i){var o=r[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](n,a,o),"*"!=n&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&v(n,a,o),r[i]=o)}),r.initAttr&&b.content(n,a),r},defineNodeNameProperties:function(e,n,a,r){for(var i in n)!r&&n[i].initAttr&&b.createTmpCache(e),a&&(n[i][a]||(n[i][a]={},["value","set","get"].forEach(function(e){e in n[i]&&(n[i][a][e]=n[i][e],delete n[i][e])}))),n[i]=t.defineNodeNameProperty(e,i,n[i]);return r||b.flushTmpCache(),n},createElement:function(n,a,r){var i;return e.isFunction(a)&&(a={after:a}),b.createTmpCache(n),a.before&&b.createElement(n,a.before),r&&(i=t.defineNodeNameProperties(n,r,!1,!0)),a.after&&b.createElement(n,a.after),b.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,n,a,r){"string"==typeof t&&(t=t.split(s)),e.isFunction(a)&&(a={set:a}),t.forEach(function(e){f[e]||(f[e]={}),"string"==typeof n&&(n=n.split(s)),a.initAttr&&b.createTmpCache(e),n.forEach(function(t){f[e][t]||(f[e][t]=[],u[t]=!0),a.set&&(r&&(a.set.only=r),f[e][t].push(a.set)),a.initAttr&&b.content(e,t)}),b.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,a,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(n,a,{attr:{set:function(e){this.setAttribute(a,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(a);return null==e?r:a}},removeAttr:{value:function(){this.removeAttribute(a),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var a;return n===r?(a=e.attributes[t]||{},n=a.specified?a.value:null,null==n?r:n):void("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n))}},activeLang:function(){var n,a,r=[],i={},s=/:\/\/|^\.*\//,l=function(n,a,r){var i;return a&&r&&-1!==e.inArray(a,r.availabeLangs||[])?(n.loading=!0,i=r.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+a+".js",function(){n.langObj[a]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[a]&&c(n,!0),n.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(n,a,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==a){var r=o[e.module].options;e.langObj[n]||a&&e.langObj[a]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[a],n),u(e.module)):t||l(e,n,r)||l(e,a,r)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),u(e.module))}},d=function(t){return"string"==typeof t&&t!==n?(n=t,a=n.split("-")[0],n==a&&(a=!1),e.each(r,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(n,a,"")):(t.activeLang||(t.activeLang=""),r.push(t),c(t))),n};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,a,r,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,a,r,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},a=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(r,i){if(e.each(n,function(t,n){for(var o=e(t,r).add(i.filter(t)),s=0,l=o.length;l>s;s++)a(o[s],n)}),r===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&a(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||a(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-message",function(e,t,n,a,r,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zul\xe4ssig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var l=o[""],u=function(t,n){return t&&"string"!=typeof t&&(t=t[e.prop(n,"type")]||t[(n.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(n,a){var r,i=u(l[a],n),s=e.prop(n,"type");return i||(i=u(o[""][a],n)||e.prop(n,"validationMessage"),t.info("could not find errormessage for: "+a+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.prop(n,o))||"";"patternMismatch"!=a||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(r||(r=e(n).getShadowElement().data("wsWidget"+s)),r&&r.formatValue&&(l=r.formatValue(l,!1))),i=i.replace("{%"+o+"}",l),"value"==o&&(i=i.replace("{%valueLen}",l.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(){e.each(o,function(e,t){return o[t]?(l=o[t],!1):void 0})}}),s.forEach(function(n){var a={valid:1,badInput:1};t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var o=e.prop(n,"validity")||{valid:1};return o.valid?r:(r=t.getContentValidationMessage(n,o))?r:o.customError&&n.nodeName&&(r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage"))?r:(e.each(o,function(e,i){return!a[e]&&i?(r=t.createValidationMessage(n,e),r?!1:void 0):void 0}),!r&&o.badInput&&(r=t.createValidationMessage(n,"typeMismatch")||t.createValidationMessage(n,"valueMissing")),r||"")},writeable:!1}})})})});