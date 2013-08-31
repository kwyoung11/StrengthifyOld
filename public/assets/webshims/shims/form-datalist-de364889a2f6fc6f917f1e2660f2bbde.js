webshims.register("form-datalist",function(t,i,e,a,o,s){"use strict";var r=function(t){t&&"string"==typeof t||(t="DOM"),r[t+"Loaded"]||(r[t+"Loaded"]=!0,i.ready(t,function(){i.loader.loadList(["form-datalist-lazy"])}))},d={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};i.modules["form-number-date-ui"].loaded&&t.extend(d,{number:1,time:1}),i.propTypes.element=function(e){i.createPropDefault(e,"attr"),e.prop||(e.prop={get:function(){var i=t.attr(this,"list");return i&&(i=a.getElementById(i),i&&e.propNodeName&&!t.nodeName(i,e.propNodeName)&&(i=null)),i||null},writeable:!1})},function(){var l=t.webshims.cfg.forms,n=Modernizr.input.list;if(!n||l.customDatalist){var p=function(){var e={autocomplete:{attr:{get:function(){var i=this,e=t.data(i,"datalistWidget");return e?e._autocomplete:"autocomplete"in i?i.autocomplete:i.getAttribute("autocomplete")},set:function(i){var e=this,a=t.data(e,"datalistWidget");a?(a._autocomplete=i,"off"==i&&a.hideList()):"autocomplete"in e?e.autocomplete=i:e.setAttribute("autocomplete",i)}}}};n&&((t("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i=this.options||[];if(!i.length){var e=this,a=t("select",e);a[0]&&a[0].options&&a[0].options.length&&(i=a[0].options)}return i}}}),e.list={attr:{get:function(){var e=i.contentAttr(this,"list");return null!=e?(t.data(this,"datalistListAttr",e),d[t.prop(this,"type")]||d[t.attr(this,"type")]||this.removeAttribute("list")):e=t.data(this,"datalistListAttr"),null==e?o:e},set:function(e){var a=this;t.data(a,"datalistListAttr",e),d[t.prop(this,"type")]||d[t.attr(this,"type")]?a.setAttribute("list",e):i.objectCreate(u,o,{input:a,id:e,datalist:t.prop(a,"list")}),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),i.defineNodeNameProperties("input",e),i.addReady(function(i,e){e.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){t(this).triggerHandler("updateDatalist")})})},u={_create:function(e){if(!d[t.prop(e.input,"type")]&&!d[t.attr(e.input,"type")]){var a=e.datalist,o=t.data(e.input,"datalistWidget"),s=this;return a&&o&&o.datalist!==a?(o.datalist=a,o.id=e.id,t(o.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",t.proxy(o,"_resetListCached")),o._resetListCached(),void 0):a?(o&&o.datalist===a||(this.datalist=a,this.id=e.id,this.hasViewableData=!0,this._autocomplete=t.attr(e.input,"autocomplete"),t.data(e.input,"datalistWidget",this),r("WINDOWLOAD"),i.isReady("form-datalist-lazy")?this._lazyCreate(e):(t(e.input).one("focus",r),i.ready("form-datalist-lazy",function(){s._destroyed||s._lazyCreate(e)}))),void 0):(o&&o.destroy(),void 0)}},destroy:function(i){var s,r=t.attr(this.input,"autocomplete");t(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),t(a).off(".datalist"+this.id),t(e).off(".datalist"+this.id),this.input.form&&this.input.id&&t(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),r===o?this.input.removeAttribute("autocomplete"):t(this.input).attr("autocomplete",r),i&&"beforeunload"==i.type&&(s=this.input,setTimeout(function(){t.attr(s,"list",t.attr(s,"list"))},9)),this._destroyed=!0}};i.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:t.extend(s,{shadowListProto:u})}),p()}}()});