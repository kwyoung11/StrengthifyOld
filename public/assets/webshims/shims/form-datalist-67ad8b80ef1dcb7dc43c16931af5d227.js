webshims.register("form-datalist",function(t,e,i,a,o,s){"use strict";var r=function(t){t&&"string"==typeof t||(t="DOM"),r[t+"Loaded"]||(r[t+"Loaded"]=!0,e.ready(t,function(){e.loader.loadList(["form-datalist-lazy"])}))},d={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};e.modules["form-number-date-ui"].loaded&&t.extend(d,{number:1,time:1}),e.propTypes.element=function(i){e.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var e=t.attr(this,"list");return e&&(e=a.getElementById(e),e&&i.propNodeName&&!t.nodeName(e,i.propNodeName)&&(e=null)),e||null},writeable:!1})},function(){var n=t.webshims.cfg.forms,l=Modernizr.input.list;if(!l||n.customDatalist){var p=function(){var i={autocomplete:{attr:{get:function(){var e=this,i=t.data(e,"datalistWidget");return i?i._autocomplete:"autocomplete"in e?e.autocomplete:e.getAttribute("autocomplete")},set:function(e){var i=this,a=t.data(i,"datalistWidget");a?(a._autocomplete=e,"off"==e&&a.hideList()):"autocomplete"in i?i.autocomplete=e:i.setAttribute("autocomplete",e)}}}};!n.customDatalist||l&&"selectedOption"in t("<input />")[0]||(i.selectedOption={prop:{writeable:!1,get:function(){var e,i,a=this,o=t.prop(a,"list"),s=null;return o&&(e=t.prop(a,"value"))?(i=t.prop(o,"options"),i.length?(t.each(i,function(i,a){return e==t.prop(a,"value")?(s=a,!1):void 0}),s):s):s}}}),l&&((t("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var i=this,a=t("select",i);a[0]&&a[0].options&&a[0].options.length&&(e=a[0].options)}return e}}}),i.list={attr:{get:function(){var i=e.contentAttr(this,"list");return null!=i?(t.data(this,"datalistListAttr",i),d[t.prop(this,"type")]||d[t.attr(this,"type")]||this.removeAttribute("list")):i=t.data(this,"datalistListAttr"),null==i?o:i},set:function(i){var a=this;t.data(a,"datalistListAttr",i),d[t.prop(this,"type")]||d[t.attr(this,"type")]?a.setAttribute("list",i):e.objectCreate(u,o,{input:a,id:i,datalist:t.prop(a,"list")}),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),e.defineNodeNameProperties("input",i),e.addReady(function(e,i){i.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){t(this).triggerHandler("updateDatalist")})})},u={_create:function(i){if(!d[t.prop(i.input,"type")]&&!d[t.attr(i.input,"type")]){var a=i.datalist,o=t.data(i.input,"datalistWidget"),s=this;return a&&o&&o.datalist!==a?(o.datalist=a,o.id=i.id,t(o.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",t.proxy(o,"_resetListCached")),void o._resetListCached()):a?void(o&&o.datalist===a||(this.datalist=a,this.id=i.id,this.hasViewableData=!0,this._autocomplete=t.attr(i.input,"autocomplete"),t.data(i.input,"datalistWidget",this),r("WINDOWLOAD"),e.isReady("form-datalist-lazy")?this._lazyCreate(i):(t(i.input).one("focus",r),e.ready("form-datalist-lazy",function(){s._destroyed||s._lazyCreate(i)})))):void(o&&o.destroy())}},destroy:function(e){var s,r=t.attr(this.input,"autocomplete");t(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),t(a).off(".datalist"+this.id),t(i).off(".datalist"+this.id),this.input.form&&this.input.id&&t(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),r===o?this.input.removeAttribute("autocomplete"):t(this.input).attr("autocomplete",r),e&&"beforeunload"==e.type&&(s=this.input,setTimeout(function(){t.attr(s,"list",t.attr(s,"list"))},9)),this._destroyed=!0}};e.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:t.extend(s,{shadowListProto:u})}),p()}}()});