webshims.register("form-combat",function(e,t){"use strict";function o(t){e('select:not(.ui-select-nativeonly), input[type="radio"], input[type="checkbox"]',t).each(o.detectReplacement)}var n={},i=function(o,i,s){e.fn[o]&&("object"==typeof i&&(s=i,i=o),n[i]=s,t.info("detected use of "+o+" try to add support."))};i("select2",{shadow:"container",shadowFocus:"focusser",_create:function(o,n,i,s){if("container"in s&&e.isFunction(s.opened)){var a=function(a){t.wsPopover.isInElement([o,n,i,e(s.container)],a.target)||e(o).trigger("updatevalidation.webshims")};e(n).on("wsallowinstantvalidation",function(t,n){return e(document).off("focusin",a),"focusout"==n.type&&n.target!=o&&s.opened()?(e(document).on("focusin",a),!1):void 0})}}}),i("chosen",{shadow:"container",shadowFocus:"search_field"}),i("selectpicker",{shadow:"$newElement",shadowFocus:"$button",_create:function(o,n,i,s){if("$menu"in s){var a=function(a){t.wsPopover.isInElement([o,n,i,e(s.$menu)],a.target)||e(o).trigger("updatevalidation.webshims")};e(n).on("wsallowinstantvalidation",function(t,n){return e(document).off("focusin",a),"focusout"==n.type&&n.target!=o?(e(document).on("focusin",a),!1):void 0})}}}),i("selectBoxIt",{shadow:"dropdownContainer",shadowFocus:"dropdown"}),i("checkboxradio","mobileCheckboxradio",{shadow:"label",shadowFocus:"element"});var s={shadow:"button",shadowFocus:function(e){return e.options.nativeMenu?e.element:e.button},_create:function(o,n,i,s){var a;if("menu"in s?a="menuName":"listbox"in s&&(a="listbox"),a){var c=function(c){t.wsPopover.isInElement([o,n,i,e(s[a]).parent()],c.target)||e(o).trigger("updatevalidation.webshims")};e(n).on("wsallowinstantvalidation",function(t,n){return"focusout"==n.type&&n.target!=o&&s.isOpen?(setTimeout(function(){e(document).off("focusin",c).on("focusin",c)},1),!1):void 0})}}};i("selectmenu","mobileSelectmenu",s),i("selectmenu","uiSelectmenu",s),o.register=function(o,i,s,a){var c="string"==typeof s.shadow?i[s.shadow]:s.shadow(i,o),u="string"==typeof s.shadowFocus?i[s.shadowFocus]:s.shadowFocus(i,o);u||(u=c),c&&(n.success||e(u).attr("tabindex")||e(u).prop("tabIndex")>-1)?(t.addShadowDom(o,c,{shadowFocusElement:u}),s._create&&s._create(o,c,u,i),n.success=!0):(t.error("webshim could not add support for "+a),a in n&&delete n[a])},o.detectReplacement=function(){var i,s=e(this).data();if(s&&!(t.data(this)||{}).hasShadow)for(i in n)if(s[i]){o.register(this,s[i],n[i],i);break}},t.addReady(function(e){setTimeout(function(){o(e)},4)})});