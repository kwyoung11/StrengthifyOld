webshims.register("form-number-date-api",function(t,e){"use strict";e.addInputType||e.error("you can not call forms-ext feature after calling forms feature. call both at once instead: $.webshims.polyfill('forms forms-ext')"),e.getStep||(e.getStep=function(e,a){var i=t.attr(e,"step");return"any"===i?i:(a=a||s(e),r[a]&&r[a].step?(i=c.number.asNumber(i),(!isNaN(i)&&i>0?i:r[a].step)*(r[a].stepScaleFactor||1)):i)}),e.addMinMaxNumberToCache||(e.addMinMaxNumberToCache=function(t,e,a){t+"AsNumber"in a||(a[t+"AsNumber"]=r[a.type].asNumber(e.attr(t)),isNaN(a[t+"AsNumber"])&&t+"Default"in r[a.type]&&(a[t+"AsNumber"]=r[a.type][t+"Default"]))});var a=parseInt("NaN",10),r=e.inputTypes,i=function(t){return"number"==typeof t||t&&t==1*t},n=function(e){return t('<input type="'+e+'" />').prop("type")===e},s=function(t){return(t.getAttribute("type")||"").toLowerCase()},u=function(t){return t&&!isNaN(1*t)},o=e.addMinMaxNumberToCache,p=function(t,e){t=""+t,e-=t.length;for(var a=0;e>a;a++)t="0"+t;return t},l=1e-7,d=e.bugs.bustedValidity;e.addValidityRule("stepMismatch",function(t,a,i,n){if(""===a)return!1;if("type"in i||(i.type=s(t[0])),"week"==i.type)return!1;var u,p,d=(n||{}).stepMismatch||!1;if(r[i.type]&&r[i.type].step){if("step"in i||(i.step=e.getStep(t[0],i.type)),"any"==i.step)return!1;if("valueAsNumber"in i||(i.valueAsNumber=r[i.type].asNumber(a)),isNaN(i.valueAsNumber))return!1;o("min",t,i),u=i.minAsNumber,isNaN(u)&&(p=t.prop("defaultValue"))&&(u=r[i.type].asNumber(p)),isNaN(u)&&(u=r[i.type].stepBase||0),d=Math.abs((i.valueAsNumber-u)%i.step),d=!(l>=d||Math.abs(d-i.step)<=l)}return d}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(t){e.addValidityRule(t.name,function(e,a,i,n){var u=(n||{})[t.name]||!1;if(""===a)return u;if("type"in i||(i.type=s(e[0])),r[i.type]&&r[i.type].asNumber){if("valueAsNumber"in i||(i.valueAsNumber=r[i.type].asNumber(a)),isNaN(i.valueAsNumber))return!1;if(o(t.attr,e,i),isNaN(i[t.attr+"AsNumber"]))return u;u=i[t.attr+"AsNumber"]*t.factor<i.valueAsNumber*t.factor-l}return u})}),e.reflectProperties(["input"],["max","min","step"]);var m=e.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var e=this,i=s(e),n=r[i]&&r[i].asNumber?r[i].asNumber(t.prop(e,"value")):m.prop._supget&&m.prop._supget.apply(e,arguments);return null==n&&(n=a),n},set:function(a){var i=this,n=s(i);if(r[n]&&r[n].numberToString){if(isNaN(a))return void t.prop(i,"value","");var u=r[n].numberToString(a);u!==!1?t.prop(i,"value",u):e.error("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(i,arguments)}}}),f=e.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var e=this,a=s(e);return r[a]&&r[a].asDate&&!r[a].noAsDate?r[a].asDate(t.prop(e,"value")):f.prop._supget&&f.prop._supget.call(e)||null},set:function(a){var i=this,n=s(i);if(!r[n]||!r[n].dateToString||r[n].noAsDate)return f.prop._supset&&f.prop._supset.apply(i,arguments)||null;if(null===a)return t.prop(i,"value",""),"";var u=r[n].dateToString(a);return u!==!1?(t.prop(i,"value",u),u):void e.error("INVALID_STATE_ERR: DOM Exception 11")}}});t.each({stepUp:1,stepDown:-1},function(a,i){var n=e.defineNodeNameProperty("input",a,{prop:{value:function(a){var u,o,p,d,m,f,c,h=s(this);if(!r[h]||!r[h].asNumber){if(n.prop&&n.prop._supvalue)return n.prop._supvalue.apply(this,arguments);throw e.info("no step method for type: "+h),"invalid state error"}if(m={type:h},a||(a=1,e.warn("you should always use a factor for stepUp/stepDown")),a*=i,u=e.getStep(this,h),"any"==u)throw e.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";return e.addMinMaxNumberToCache("min",t(this),m),e.addMinMaxNumberToCache("max",t(this),m),o=t.prop(this,"valueAsNumber"),a>0&&!isNaN(m.minAsNumber)&&(isNaN(o)||m.minAsNumber>o)?void t.prop(this,"valueAsNumber",m.minAsNumber):0>a&&!isNaN(m.maxAsNumber)&&(isNaN(o)||m.maxAsNumber<o)?void t.prop(this,"valueAsNumber",m.maxAsNumber):(isNaN(o)&&(o=0),f=m.minAsNumber,isNaN(f)&&(c=t.prop(this,"defaultValue"))&&(f=r[h].asNumber(c)),f||(f=0),u*=a,o=1*(o+u).toFixed(5),p=(o-f)%u,p&&Math.abs(p)>l&&(d=o-p,d+=p>0?u:-u,o=1*d.toFixed(5)),!isNaN(m.maxAsNumber)&&o>m.maxAsNumber||!isNaN(m.minAsNumber)&&o<m.minAsNumber?void e.info("max/min overflow can't apply stepUp/stepDown"):void t.prop(this,"valueAsNumber",o))}}})});var c={number:{bad:function(t){return!i(t)},step:1,stepScaleFactor:1,asNumber:function(t){return i(t)?1*t:a},numberToString:function(t){return i(t)?t:!1}},range:{minDefault:0,maxDefault:100},color:{bad:function(){var t=/^\u0023[a-f0-9]{6}$/;return function(e){return!e||7!=e.length||!t.test(e)}}()},date:{bad:function(t){if(!t||!t.split||!/\d$/.test(t))return!0;var e,a=t.split(/\u002D/);if(3!==a.length)return!0;var r=!1;if(a[0].length<4||2!=a[1].length||a[1]>12||2!=a[2].length||a[2]>33)r=!0;else for(e=0;3>e;e++)if(!u(a[e])){r=!0;break}return r||t!==this.dateToString(this.asDate(t,!0))},step:1,stepScaleFactor:864e5,asDate:function(t,e){return!e&&this.bad(t)?null:new Date(this.asNumber(t,!0))},asNumber:function(t,e){var r=a;return(e||!this.bad(t))&&(t=t.split(/\u002D/),r=Date.UTC(t[0],t[1]-1,t[2])),r},numberToString:function(t){return i(t)?this.dateToString(new Date(1*t)):!1},dateToString:function(t){return t&&t.getFullYear?p(t.getUTCFullYear(),4)+"-"+p(t.getUTCMonth()+1,2)+"-"+p(t.getUTCDate(),2):!1}},time:{bad:function(e,a){if(!e||!e.split||!/\d$/.test(e))return!0;if(e=e.split(/\u003A/),e.length<2||e.length>3)return!0;var r,i=!1;return e[2]&&(e[2]=e[2].split(/\u002E/),r=parseInt(e[2][1],10),e[2]=e[2][0]),t.each(e,function(t,e){return u(e)&&2===e.length?void 0:(i=!0,!1)}),i?!0:e[0]>23||e[0]<0||e[1]>59||e[1]<0?!0:e[2]&&(e[2]>59||e[2]<0)?!0:r&&isNaN(r)?!0:(r&&(100>r?r*=100:10>r&&(r*=10)),a===!0?[e,r]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(t){return t=new Date(this.asNumber(t)),isNaN(t)?null:t},asNumber:function(t){var e=a;return t=this.bad(t,!0),t!==!0&&(e=Date.UTC("1970",0,1,t[0][0],t[0][1],t[0][2]||0),t[1]&&(e+=t[1])),e},dateToString:function(t){if(t&&t.getUTCHours){var e=p(t.getUTCHours(),2)+":"+p(t.getUTCMinutes(),2),a=t.getSeconds();return"0"!=a&&(e+=":"+p(a,2)),a=t.getUTCMilliseconds(),"0"!=a&&(e+="."+p(a,3)),e}return!1}},month:{bad:function(t){return c.date.bad(t+"-01")},step:1,stepScaleFactor:!1,asDate:function(t){return new Date(c.date.asNumber(t+"-01"))},asNumber:function(t){var e=a;return t&&!this.bad(t)&&(t=t.split(/\u002D/),t[0]=1*t[0]-1970,t[1]=1*t[1]-1,e=12*t[0]+t[1]),e},numberToString:function(t){var e,a=!1;return i(t)&&(e=t%12,t=(t-e)/12+1970,e+=1,1>e&&(t-=1,e+=12),a=p(t,4)+"-"+p(e,2)),a},dateToString:function(t){if(t&&t.getUTCHours){var e=c.date.dateToString(t);return e.split&&(e=e.split(/\u002D/))?e[0]+"-"+e[1]:!1}return!1}},"datetime-local":{bad:function(t,e){return t&&t.split&&2===(t+"special").split(/\u0054/).length?(t=t.split(/\u0054/),c.date.bad(t[0])||c.time.bad(t[1],e)):!0},noAsDate:!0,asDate:function(t){return t=new Date(this.asNumber(t)),isNaN(t)?null:t},asNumber:function(t){var e=a,r=this.bad(t,!0);return r!==!0&&(t=t.split(/\u0054/)[0].split(/\u002D/),e=Date.UTC(t[0],t[1]-1,t[2],r[0][0],r[0][1],r[0][2]||0),r[1]&&(e+=r[1])),e},dateToString:function(t,e){return c.date.dateToString(t)+"T"+c.time.dateToString(t,e)}}};!d&&n("range")&&n("time")&&n("month")&&n("datetime-local")||(c.range=t.extend({},c.number,c.range),c.time=t.extend({},c.date,c.time),c.month=t.extend({},c.date,c.month),c["datetime-local"]=t.extend({},c.date,c.time,c["datetime-local"])),["number","month","range","date","time","color","datetime-local"].forEach(function(t){(d||!n(t))&&e.addInputType(t,c[t])}),null==t("<input />").prop("labels")&&e.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var e=this.id,a=t(this).closest("label").filter(function(){var t=this.attributes["for"]||{};return!t.specified||t.value==e});return e&&(a=a.add('label[for="'+e+'"]')),a.get()},writeable:!1}})}),webshims.register("form-datalist",function(t,e,a,r,i,n){"use strict";var s=function(t){t&&"string"==typeof t||(t="DOM"),s[t+"Loaded"]||(s[t+"Loaded"]=!0,e.ready(t,function(){e.loader.loadList(["form-datalist-lazy"])}))},u={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};e.modules["form-number-date-ui"].loaded&&t.extend(u,{number:1,time:1}),e.propTypes.element=function(a,i){e.createPropDefault(a,"attr"),a.prop||(a.prop={get:function(){var e=t.attr(this,i);return e&&(e=r.getElementById(e),e&&a.propNodeName&&!t.nodeName(e,a.propNodeName)&&(e=null)),e||null},writeable:!1})},function(){var o=e.cfg.forms,p=e.support.datalist;if(!p||o.customDatalist){var l=function(){var a=function(){var e;!t.data(this,"datalistWidgetData")&&(e=t.prop(this,"id"))?t('input[list="'+e+'"], input[data-wslist="'+e+'"]').eq(0).attr("list",e):t(this).triggerHandler("updateDatalist")},r={autocomplete:{attr:{get:function(){var e=this,a=t.data(e,"datalistWidget");return a?a._autocomplete:"autocomplete"in e?e.autocomplete:e.getAttribute("autocomplete")},set:function(e){var a=this,r=t.data(a,"datalistWidget");r?(r._autocomplete=e,"off"==e&&r.hideList()):"autocomplete"in a?a.autocomplete=e:a.setAttribute("autocomplete",e)}}}};p?((t("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var a=this,r=t("select",a);r[0]&&r[0].options&&r[0].options.length&&(e=r[0].options)}return e}}}),r.list={attr:{get:function(){var a=e.contentAttr(this,"list");return null!=a?(t.data(this,"datalistListAttr",a),u[t.prop(this,"type")]||u[t.attr(this,"type")]||this.removeAttribute("list")):a=t.data(this,"datalistListAttr"),null==a?i:a},set:function(a){var r=this;t.data(r,"datalistListAttr",a),u[t.prop(this,"type")]||u[t.attr(this,"type")]?r.setAttribute("list",a):(e.objectCreate(d,i,{input:r,id:a,datalist:t.prop(r,"list")}),r.setAttribute("data-wslist",a)),t(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):e.defineNodeNameProperties("input",{list:{attr:{get:function(){var t=e.contentAttr(this,"list");return null==t?i:t},set:function(a){var r=this;e.contentAttr(r,"list",a),e.objectCreate(n.shadowListProto,i,{input:r,id:a,datalist:t.prop(r,"list")}),t(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),e.defineNodeNameProperties("input",r),e.addReady(function(t,e){e.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(a)})},d={_create:function(r){if(!u[t.prop(r.input,"type")]&&!u[t.attr(r.input,"type")]){var i=r.datalist,n=t.data(r.input,"datalistWidget"),o=this;return i&&n&&n.datalist!==i?(n.datalist=i,n.id=r.id,t(n.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",t.proxy(n,"_resetListCached")),void n._resetListCached()):i?void(n&&n.datalist===i||(this.datalist=i,this.id=r.id,this.hasViewableData=!0,this._autocomplete=t.attr(r.input,"autocomplete"),t.data(r.input,"datalistWidget",this),t.data(i,"datalistWidgetData",this),s("WINDOWLOAD"),e.isReady("form-datalist-lazy")?a.QUnit?o._lazyCreate(r):setTimeout(function(){o._lazyCreate(r)},9):(t(r.input).one("focus",s),e.ready("form-datalist-lazy",function(){o._destroyed||o._lazyCreate(r)})))):void(n&&n.destroy())}},destroy:function(e){var n,s=t.attr(this.input,"autocomplete");t(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),t(r).off(".datalist"+this.id),t(a).off(".datalist"+this.id),this.input.form&&this.input.id&&t(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),s===i?this.input.removeAttribute("autocomplete"):t(this.input).attr("autocomplete",s),e&&"beforeunload"==e.type&&(n=this.input,setTimeout(function(){t.attr(n,"list",t.attr(n,"list"))},9)),this._destroyed=!0}};e.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:t.extend(n,{shadowListProto:d})}),n.list||(n.list={}),l()}}()});