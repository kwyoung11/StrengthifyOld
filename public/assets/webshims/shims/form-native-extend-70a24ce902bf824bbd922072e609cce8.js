webshims.register("form-native-extend",function(t,e,i,a){"use strict";var r=i.Modernizr;if(r.inputtypes,r.formvalidation&&!e.bugs.bustedValidity){var n=e.inputTypes,o=!1,u={},p=function(){var e,i=function(){t(this).prop("validity")},a=function(){t("input").each(i)};return function(){clearTimeout(e),e=setTimeout(a,9)}}();e.addInputType=function(i,a){n[i]=a,o=!0,t.isDOMReady&&r.formvalidation&&!e.bugs.bustedValidity&&p()},e.addValidityRule=function(t,e){u[t]=e},t.each({typeMismatch:"mismatch",badInput:"bad"},function(t,i){e.addValidityRule(t,function(e,a,r,o){if(""===a)return!1;var u=o[t];return"type"in r||(r.type=(e[0].getAttribute("type")||"").toLowerCase()),n[r.type]&&n[r.type][i]&&(u=n[r.type][i](a,e)),u||!1})});var s=e.modules["form-number-date-api"],d=s.loaded&&!s.test(),c=["customError","badInput","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],f=["value"],l=[],v=function(e){if(e||o){var i=(e.getAttribute&&e.getAttribute("type")||e.type||"").toLowerCase();n[i]&&t.prop(e,"validity")}},m={};if(["input","textarea","select"].forEach(function(i){var a=e.defineNodeNameProperty(i,"setCustomValidity",{prop:{value:function(r){r+="";var n="input"==i?t(this).getNativeElement()[0]:this;a.prop._supvalue.call(n,r),d&&(e.data(n,"hasCustomError",!!r),v(n))}}});m[i]=a.prop._supvalue}),d&&(f.push("min"),f.push("max"),f.push("step"),l.push("input")),d){var y;if(l.forEach(function(i){var a=e.defineNodeNameProperty(i,"validity",{prop:{get:function(){if(!y){var r="input"==i?t(this).getNativeElement()[0]:this,o=a.prop._supget.call(r);if(!o)return o;var p={};if(c.forEach(function(t){p[t]=o[t]}),!t.prop(r,"willValidate"))return p;y=!0;var s,d=t(r),f={type:(r.getAttribute&&r.getAttribute("type")||r.type||"").toLowerCase(),nodeName:(r.nodeName||"").toLowerCase()},l=d.val(),v=!!e.data(r,"hasCustomError");if(y=!1,p.customError=v,p.valid&&p.customError)p.valid=!1;else if(!p.valid){var h=!0;t.each(p,function(t,e){return e?(h=!1,!1):void 0}),h&&(p.valid=!0)}return t.each(u,function(t,a){p[t]=a(d,l,f,p),p[t]&&(p.valid||!s)&&n[f.type]&&(m[i].call(r,e.createValidationMessage(r,t)),p.valid=!1,s=!0)}),p.valid&&(m[i].call(r,""),e.data(r,"hasCustomError",!1)),p}},writeable:!1}})}),f.forEach(function(t){e.onNodeNamesPropertyModify(l,t,function(){v(this)})}),a.addEventListener){var h,g=function(t){"form"in t.target&&(clearTimeout(h),v(t.target))};a.addEventListener("change",g,!0),a.addEventListener("input",function(t){clearTimeout(h),h=setTimeout(function(){v(t.target)},290)},!0)}var b=l.join(",");e.addReady(function(e,i){o&&t(b,e).add(i.filter(b)).each(function(){v(this)})})}e.defineNodeNameProperty("input","type",{prop:{get:function(){var t=this,i=(t.getAttribute&&t.getAttribute("type")||"").toLowerCase();return e.inputTypes[i]?i:t.type}}})}});