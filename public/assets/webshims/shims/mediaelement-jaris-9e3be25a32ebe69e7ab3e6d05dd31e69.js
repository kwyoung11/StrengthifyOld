webshims.register("mediaelement-jaris",function(e,t,a,i,r,o){"use strict";var n=t.mediaelement,d=a.swfmini,u=Modernizr.audio&&Modernizr.video,l=d.hasFlashPlayerVersion("9.0.115"),s=0,m="ActiveXObject"in a&&u,p={paused:!0,ended:!1,currentSrc:"",duration:a.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?void t.error("buffered index size error"):0},end:function(e){return e?void t.error("buffered index size error"):0},length:0}},c=Object.keys(p),h={currentTime:0,volume:1,muted:!1},f=(Object.keys(h),e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:r,_calledMeta:!1,lastDuration:0},p,h)),v=function(e){try{e.nodeName}catch(a){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},g=function(t,a){a=e.Event(a),a.preventDefault(),e.event.trigger(a,r,t)},y=o.playerPath||t.cfg.basePath+"swf/"+(o.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(o.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(o.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(o.attrs,{bgcolor:"#000000"});var _=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&t.readyState<3&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){_(4,t)},4e3)),e>=4&&t.readyState<4&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};n.jarisEvent={};var w,E={onPlayPause:function(e,t,a){var i,r;if(null==a)try{i=t.api.api_get("isPlaying")}catch(o){}else i=a;i==t.paused&&(t.paused=!i,r=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,r),t.readyState<3&&_(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){_(3,t)},onDataInitialized:function(e,t){var a,i=t.duration;t.duration=e.duration,i==t.duration||isNaN(t.duration)||t._calledMeta&&(a=Math.abs(t.lastDuration-t.duration))<2||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),t.readyState<1&&_(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},a>50?0:a>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),_(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),t.readyState<3&&(_(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,a){if(a.ended&&(a.ended=!1),a.duration&&!isNaN(a.duration)){var i=t.loaded/t.total;i>.02&&.2>i?_(3,a):i>.2&&(i>.99&&(a.networkState=1),_(4,a)),a._bufferedEnd&&a._bufferedEnd>i&&(a._bufferedStart=a.currentTime||0),a._bufferedEnd=i,a.buffered.length=1,e.event.trigger("progress",r,a._elem,!0)}},onPlaybackFinished:function(e,t){t.readyState<4&&_(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var a=function(e){var t=!0;try{e.api.api_get("volume")}catch(a){t=!1}return t};return function(i,r){var o=0,n=function(){return o>9?void(r.tryedReframeing=0):(o++,r.tryedReframeing++,void(a(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,N(r),T(r)):r.tryedReframeing<6?r.tryedReframeing<3?(r.reframeTimer=setTimeout(n,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error"))))};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(w),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(n,9):n())}}()};E.onMute=E.onVolumeChange;var T=function(e){var a,i=e.actionQueue.length,r=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>r;){r++,a=e.actionQueue.shift();try{e.api[a.fn].apply(e.api,a.args)}catch(o){t.warn(o)}}e.actionQueue.length&&(e.actionQueue=[])},N=function(t){t&&((t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(a){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},b=e.noop;if(u){var S={play:1,playing:1},P=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=P.map(function(e){return e+".webshimspolyfill"}).join(" "),D=function(a){var i=t.data(a.target,"mediaelement");if(i){var r=a.originalEvent&&a.originalEvent.type===a.type;r==("third"==i.activating)&&(a.stopImmediatePropagation(),S[a.type]&&(i.isActive!=i.activating?e(a.target).pause():r&&(e.prop(a.target,"pause")._supvalue||e.noop).apply(a.target)))}};b=function(a){e(a).off(A).on(A,D),P.forEach(function(e){t.moveToFirstEvent(a,e)})},b(i)}n.setActive=function(a,i,r){if(r||(r=t.data(a,"mediaelement")),r&&r.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var o=t.data(a,"shadowData");r.activating=i,e(a).pause(),r.isActive=i,"third"==i?(o.shadowElement=o.shadowFocusElement=r.shadowElem[0],e(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),o.shadowElement=o.shadowFocusElement=!1),e(a).trigger("mediaelementapichange")}};var F=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(a){if(a){var i=t,r=a.networkState;for(_(0,a),clearTimeout(a._durationChangeTimer);--i>-1;)delete a[e[i]];a.actionQueue=[],a.buffered.length=0,r&&g(a._elem,"emptied")}}}(),C=function(){var t={},a=function(a){var r,o,n;return t[a.currentSrc]?r=t[a.currentSrc]:a.videoHeight&&a.videoWidth?(t[a.currentSrc]={width:a.videoWidth,height:a.videoHeight},r=t[a.currentSrc]):(o=e.attr(a._elem,"poster"))&&(r=t[o],r||(n=i.createElement("img"),n.onload=function(){t[o]={width:this.width,height:this.height},t[o].height&&t[o].width?W(a,e.prop(a._elem,"controls")):delete t[o]},n.src=o,n.complete&&n.onload())),r||{width:300,height:"video"==a._elemNodeName?150:50}};return function(t){var i,r,o=t.elemDimensions;return("auto"==o.width||"auto"==o.height)&&(o=e.extend({},t.elemDimensions),i=a(t),r=i.width/i.height,"auto"==o.width&&"auto"==o.height?o=i:"auto"==o.width?(t.shadowElem.css({height:o.height}),o.width=t.shadowElem.height()*r):(t.shadowElem.css({width:o.width}),o.height=t.shadowElem.width()/r)),o}}(),W=function(t,a){var i,r=t._elem,o=t.shadowElem;e(r)[a?"addClass":"removeClass"]("webshims-controls"),"third"==t.isActive&&("audio"!=t._elemNodeName||a?(t.elemDimensions={width:r.style.width||e.attr(r,"width")||e(r).width(),height:r.style.height||e.attr(r,"height")||e(r).height()},i=C(t),i.minWidth=r.style.minWidth,i.minHeight=r.style.minHeight,o.css(i)):o.css({width:0,height:0}))},k=function(){var t={"":1,auto:1};return function(a){var i=e.attr(a,"preload");return null==i||"none"==i||e.prop(a,"autoplay")?!1:(i=e.prop(a,"preload"),!!(t[i]||"metadata"==i&&e(a).is(".preload-in-doubt, video:not([poster])")))}}(),M={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},x=function(e){return e.replace?e.replace(M.A,"%26").replace(M.a,"%26").replace(M.e,"%3D").replace(M.q,"%3F"):e};if("matchMedia"in a){var j=!1;try{j=a.matchMedia("only all").matches}catch(H){}j&&(n.sortMedia=function(e,t){try{e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches}catch(a){return 0}return e==t?0:e?-1:1})}n.createSWF=function(a,i,r){if(!l)return void setTimeout(function(){e(a).mediaLoad()},1);1>s?s=1:s++,r||(r=t.data(a,"mediaelement")),(e.attr(a,"height")||e.attr(a,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var m,p="audio/rtmp"==i.type||"video/rtmp"==i.type,c=e.extend({},o.vars,{poster:x(e.attr(a,"poster")&&e.prop(a,"poster")||""),source:x(i.streamId||i.srcProp),server:x(i.server||"")}),h=e(a).data("vars")||{},v=e.prop(a,"controls"),g="jarisplayer-"+t.getID(a),_=e.extend({},o.params,e(a).data("params")),T=a.nodeName.toLowerCase(),N=e.extend({},o.attrs,{name:g,id:g},e(a).data("attrs")),S=function(){"third"==r.isActive&&W(r,e.prop(a,"controls"))};r&&r.swfCreated?(n.setActive(a,"third",r),r.currentSrc=i.srcProp,r.shadowElem.html('<div id="'+g+'">'),r.api=!1,r.actionQueue=[],m=r.shadowElem,F(r)):(m=e('<div class="polyfill-'+T+' polyfill-mediaelement" id="wrapper-'+g+'"><div id="'+g+'"></div>').css({position:"relative",overflow:"hidden"}),r=t.data(a,"mediaelement",t.objectCreate(f,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:T},_elem:{value:a},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:g.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=r.buffered.length?void t.error("buffered index size error"):0},end:function(e){return e>=r.buffered.length?void t.error("buffered index size error"):(r.duration-r._bufferedStart)*r._bufferedEnd+r._bufferedStart},length:0}}})),m.insertBefore(a),u&&e.extend(r,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted"),paused:e.prop(a,"paused")}),t.addShadowDom(a,m),t.data(a,"mediaelement")||t.data(a,"mediaelement",r),b(a),n.setActive(a,"third",r),W(r,v),e(a).on({"updatemediaelementdimensions loadedmetadata emptied":S,remove:function(e){!e.originalEvent&&n.jarisEvent[r.id]&&n.jarisEvent[r.id].elem==a&&(delete n.jarisEvent[r.id],clearTimeout(w),clearTimeout(r.flashBlock))}}).onWSOff("updateshadowdom",S)),n.jarisEvent[r.id]&&n.jarisEvent[r.id].elem==a||(n.jarisEvent[r.id]=function(e){if("ready"==e.type){var t=function(){r.api&&(k(a)&&r.api.api_preload(),E.ready(e,r))};r.api?t():setTimeout(t,9)}else r.currentTime=e.position,r.api&&(!r._calledMeta&&isNaN(e.duration)&&r.duration!=e.duration&&isNaN(r.duration)&&E.onDataInitialized(e,r),r._ppFlag||"onPlayPause"==e.type||E.onPlayPause(e,r),E[e.type]&&E[e.type](e,r)),r.duration=e.duration},n.jarisEvent[r.id].elem=a),e.extend(c,{id:g,evtId:r.id,controls:""+v,autostart:"false",nodename:T},h),p?c.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(c.type="audio",c.streamtype="file"):"video/youtube"==i.type&&(c.streamtype="youtube"),o.changeSWF(c,a,i,r,"embed"),clearTimeout(r.flashBlock),d.embedSWF(y,g,"100%","100%","9.0.115",!1,c,_,N,function(i){if(i.success){var o=function(){(!i.ref.parentNode&&m[0].parentNode||"none"==i.ref.style.display)&&(m.addClass("flashblocker-assumed"),e(a).trigger("flashblocker"),t.warn("flashblocker assumed")),e(i.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};r.api=i.ref,v||e(i.ref).attr("tabindex","-1").css("outline","none"),r.flashBlock=setTimeout(o,99),w||(clearTimeout(w),w=setTimeout(function(){o();var a=e(i.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(a[0].offsetWidth<2||a[0].offsetHeight<2)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),a=null},8e3))}})};var R=function(e,t,a,i){return i=i||v(e),i?(i.api&&i.api[t]?i.api[t].apply(i.api,a||[]):(i.actionQueue.push({fn:t,args:a}),i.actionQueue.length>10&&setTimeout(function(){i.actionQueue.length>5&&i.actionQueue.shift()},99)),i):!1};if(["audio","video"].forEach(function(a){var i,r={},o=function(e){("audio"!=a||"videoHeight"!=e&&"videoWidth"!=e)&&(r[e]={get:function(){var t=v(this);return t?t[e]:u&&i[e].prop._supget?i[e].prop._supget.apply(this):f[e]},writeable:!1})},n=function(e,t){o(e),delete r[e].writeable,r[e].set=t};n("volume",function(e){var a=v(this);if(a)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),R(this,"api_volume",[e],a),a.volume!=e&&(a.volume=e,g(a._elem,"volumechange")),a=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),n("muted",function(e){var t=v(this);if(t)e=!!e,R(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),n("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||R(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),R(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),c.forEach(o),t.onNodeNamesPropertyModify(a,"controls",function(t,i){var r=v(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),r&&("audio"==a&&W(r,i),R(this,"api_controls",[i],r))}),t.onNodeNamesPropertyModify(a,"preload",function(){var a,i,r;k(this)&&(a=v(this),a?R(this,"api_preload",[],a):!m||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(r=this,i=t.data(r,"mediaelementBase")||t.data(r,"mediaelementBase",{}),clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){e(r).mediaLoad()},9)))}),i=t.defineNodeNameProperties(a,r,"prop")}),l&&e.cleanData){var O=e.cleanData,Q={object:1,OBJECT:1};e.cleanData=function(e){var t,a;if(e&&(a=e.length)&&s)for(t=0;a>t;t++)if(Q[e[t].nodeName]&&"api_pause"in e[t]){s--;try{e[t].api_pause()}catch(i){}}return O.apply(this,arguments)}}u?"media"in i.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});