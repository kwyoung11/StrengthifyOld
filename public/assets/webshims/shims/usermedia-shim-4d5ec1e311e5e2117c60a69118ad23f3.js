webshim.register("usermedia-shim",function(e,t,i,r,a,s){"use strict";function n(e,i,r){p?t.mediaelement.createSWF?o(e,i,r):(t.loader.loadList(["swfmini-embed"]),t.mediaelement.loadSwf=!0,t.reTest(["mediaelement-jaris"],!0),t.ready("mediaelement-jaris",function(){o(e,i,r)})):r({name:"NOT_SUPPORTED_ERROR"})}function o(e,t,i){var r,a=d();a&&(l++,r="webshimstream:stream"+l,c[r]={src:r,success:t,fail:i},m(),f.createSWF(a,{srcProp:r,streamrequest:!0,type:"jarisplayer/stream"}))}function d(){var i=e("video");return i=i.filter(".ws-usermedia"),i.length||(i=i.end()),1!=i.length&&(i=i.filter(h)),1!=i.length&&t.error('for getUserMedia an empty video element has to be already in the DOM. If you provide multiple empty videos. please mark your suggested video using the "ws-usermedia" class.'),i[0]}function u(e,i,r){e._cTNow=Date.now(),e._cTID=!1,t.defineProperties(this,{_swf:{value:i,enumerable:!1},_data:{value:e,enumerable:!1},_wsStreamId:{value:r,enumerable:!1}})}var m,l=0,c={},p=swfmini.hasFlashPlayerVersion("11.3"),f=t.mediaelement,h=function(){return!e.prop(this,"currentSrc")&&!f.srces(this).length};u.prototype={stop:function(){this._data._cTID&&clearInterval(this._data._cTID),f.queueSwfMethod(this._data._elem,"api_detach",[],this._data),this._data.ended=!0,e(this._data._elem).trigger("ended")}},t.usermedia={attach:function(i,r,a){var s;a._usermedia==r.srcProp?(f.queueSwfMethod(a._elem,"api_attach",[],a),s=e(a._elem).trigger("loadstart"),a._cTID=setInterval(function(){a.ended?clearInterval(a._cTID):a.paused||(a.currentTime=(Date.now()-a._cTNow)/1e3,s.triggerHandler("timeupdate"))},250),a.paused||f.queueSwfMethod(a._elem,"api_play",[],a)):t.error("something went wrong")},request:function(t,i,r){r._usermedia=i.srcProp,e(r.api).css(s.inline||e(t).hasClass("ws-inlineusermedia")?{position:"relative",zIndex:"999999"}:{position:"fixed",top:0,left:0,width:"100%",height:150,zIndex:"999999"})}},m=function(){if(t.mediaelement.createSWF){m=e.noop;var i=function(t){setTimeout(function(){e(t.api).css({position:"",top:"",left:"",width:"",height:"",zIndex:""}),e.prop(t._elem,"controls")&&e.prop(t._elem,"controls",!0)},50)},r=function(e,t){i(t),c[t._usermedia].fail({name:e.type})};e.extend(f.onEvent,{NotSupportedError:r,PermissionDeniedError:r,ConstraintNotSatisfiedError:r,onUserSuccess:function(e,t){i(t),c[t._usermedia].success(new u(t,t.api,t._usermedia))}})}},t.ready("mediaelement-jaris",m),t.getUserMedia=n,navigator.wsGetUserMedia=n,t.isReady("usermedia-api",!0)});