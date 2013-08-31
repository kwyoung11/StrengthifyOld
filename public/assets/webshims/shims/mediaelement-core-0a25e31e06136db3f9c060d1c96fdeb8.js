!function(e,t){"use strict";var r,a,i=t.$,o=e.audio&&e.video,n=!1,d=t.bugs,s="mediaelement-jaris",p=function(){t.ready(s,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([s],o))})},u=t.cfg,m=u.mediaelement;if(!m)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(o){var c=document.createElement("video");if(e.videoBuffered="buffered"in c,n="loop"in c,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!m.preferFlash){var l={1:1,2:1},v=function(e){var r,o,n;if(!m.preferFlash&&(i(e.target).is("audio, video")||(n=e.target.parentNode)&&i("source:last",n)[0]==e.target)&&(r=i(e.target).closest("audio, video"))&&!l[o=r.prop("error")]){if(null==o)return t.warn("There was an unspecified error on a mediaelement"),void 0;i(function(){a&&!m.preferFlash?(p(),t.ready("WINDOWLOAD "+s,function(){setTimeout(function(){m.preferFlash||!t.mediaelement.createSWF||r.is(".nonnative-api-active")||(m.preferFlash=!0,document.removeEventListener("error",v,!0),i("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+r.prop("error")))},9)})):document.removeEventListener("error",v,!0)})}};document.addEventListener("error",v,!0),i("audio, video").each(function(){var e=i.prop(this,"error");return e&&!l[e]?(v({target:this}),!1):void 0})}}e.track&&!d.track&&function(){if(d.track||(d.track="number"!=typeof i("<track />")[0].readyState),!d.track)try{new TextTrackCue(2,3,"")}catch(e){d.track=!0}}(),r=e.track&&!d.track,t.register("mediaelement-core",function(e,t,i,d,u,m){a=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(a?"swf":"no-swf");var c=t.mediaelement;c.parseRtmp=function(e){var r,a,i,o=e.src.split("://"),n=o[1].split("/");for(e.server=o[0]+"://"+n[0]+"/",e.streamId=[],r=1,a=n.length;a>r;r++)i||-1===n[r].indexOf(":")||(n[r]=n[r].split(":")[1],i=!0),i?e.streamId.push(n[r]):e.server+=n[r]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var l=function(t,r){t=e(t);var a,i={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return i.src?(a=t.attr("data-server"),null!=a&&(i.server=a),a=t.attr("type"),a?(i.type=a,i.container=e.trim(a.split(";")[0])):(r||(r=t[0].nodeName.toLowerCase(),"source"==r&&(r=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=r+"/rtmp",i.container=r+"/rtmp"):(a=c.getTypeForSrc(i.src,r,i),a&&(i.type=a,i.container=a))),a=t.attr("media"),a&&(i.media=a),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:c.parseRtmp(i)),i):i},v=!a&&"postMessage"in i&&o,f=function(){f.loaded||(f.loaded=!0,m.noAutoTrack||t.ready("WINDOWLOAD",function(){h(),t.loader.loadList(["track-ui"])}))},y=function(){var r;return function(){!r&&v&&(r=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),h=function(){a?p():y()};t.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),c.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},c.mimeTypes.source=e.extend({},c.mimeTypes.audio,c.mimeTypes.video),c.getTypeForSrc=function(t,r){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return r+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var a;return e.each(c.mimeTypes[r],function(e,r){return-1!==r.indexOf(t)?(a=e,!1):void 0}),a},c.srces=function(t,r){if(t=e(t),!r){r=[];var a=t[0].nodeName.toLowerCase(),i=l(t,a);return i.src?r.push(i):e("source",t).each(function(){i=l(this,a),i.src&&r.push(i)}),r}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(r)||(r=[r]),r.forEach(function(r){"string"==typeof r&&(r={src:r}),t.append(e(d.createElement("source")).attr(r))})},e.fn.loadMediaSrc=function(t,r){return this.each(function(){r!==u&&(e(this).removeAttr("poster"),r&&e.attr(this,"poster",r)),c.srces(this,t),e(this).mediaLoad()})},c.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],c.canThirdPlaySrces=function(t,r){var i="";return(a||v)&&(t=e(t),r=r||c.srces(t),e.each(r,function(e,t){return t.container&&t.src&&(a&&-1!=c.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(i=t,!1):void 0})),i};var g={};c.canNativePlaySrces=function(t,r){var a="";if(o){t=e(t);var i=(t[0].nodeName||"").toLowerCase(),n=(g[i]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!n)return a;r=r||c.srces(t),e.each(r,function(e,r){return r.type&&n.call(t[0],r.type)?(a=r,!1):void 0})}return a};var T=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=T.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};c.setError=function(r,a){if(e("source",r).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(r).mediaLoad()}catch(i){}}else a||(a="can't play sources"),e(r).pause().data("mediaerror",a),t.error("mediaelementError: "+a),setTimeout(function(){e(r).data("mediaerror")&&e(r).trigger("mediaerror")},1)};var b=function(){var e;return function(r,i,o){t.ready(a?s:"mediaelement-yt",function(){c.createSWF?c.createSWF(r,i,o):e||(e=!0,h(),b(r,i,o))}),e||!v||c.createSWF||y()}}(),x=function(e,t,r,a,i){var o;r||r!==!1&&t&&"third"==t.isActive?(o=c.canThirdPlaySrces(e,a),o?b(e,o,t):i?c.setError(e,!1):x(e,t,!1,a,!0)):(o=c.canNativePlaySrces(e,a),o?t&&"third"==t.isActive&&c.setActive(e,"html5",t):i?(c.setError(e,!1),t&&"third"==t.isActive&&c.setActive(e,"html5",t)):x(e,t,!0,a,!0))},N=/^(?:embed|object|datalist)$/i,A=function(r,a){var i=t.data(r,"mediaelementBase")||t.data(r,"mediaelementBase",{}),o=c.srces(r),n=r.parentNode;clearTimeout(i.loadTimer),e.data(r,"mediaerror",!1),o.length&&n&&1==n.nodeType&&!N.test(n.nodeName||"")&&(a=a||t.data(r,"mediaelement"),c.sortMedia&&o.sort(c.sortMedia),x(r,a,m.preferFlash||u,o))};c.selectSource=A,e(d).on("ended",function(r){var a=t.data(r.target,"mediaelement");(!n||a&&"html5"!=a.isActive||e.prop(r.target,"loop"))&&setTimeout(function(){!e.prop(r.target,"paused")&&e.prop(r.target,"loop")&&e(r.target).prop("currentTime",0).play()},1)});var S=!1,P=function(){var r=function(){if(t.implement(this,"mediaelement")&&(A(this),o&&(!n||"ActiveXObject"in i))){var r,a,d=this,s=function(){var t=e.prop(d,"buffered");if(t){for(var r="",a=0,i=t.length;i>a;a++)r+=t.end(a);return r}},p=function(){var r=s();r!=a&&(a=r,t.info("needed to trigger progress manually"),e(d).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(a=s()),clearTimeout(r),r=setTimeout(p,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(a=!1),clearTimeout(r)}}),"ActiveXObject"in i&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){S=!0,n||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(r){var i;i=t.defineNodeNameProperty(r,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");A(this,e),!o||e&&"html5"!=e.isActive||!i.prop._supvalue||i.prop._supvalue.apply(this,arguments)}}}),g[r]=t.defineNodeNameProperty(r,"canPlayType",{prop:{value:function(t){var i="";return o&&g[r].prop._supvalue&&(i=g[r].prop._supvalue.call(this,t),"no"==i&&(i="")),!i&&a&&(t=e.trim((t||"").split(";")[0]),-1!=c.swfMimeTypes.indexOf(t)&&(i="maybe")),i}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,r=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(r.loadTimer),r.loadTimer=setTimeout(function(){A(e),e=null},9)}}),t.addReady(function(t,a){var i=e("video, audio",t).add(a.filter("video, audio")).each(r);!f.loaded&&e("track",i).length&&f(),i=null})}),o&&!S&&t.addReady(function(t,r){S||e("video, audio",t).add(r.filter("video, audio")).each(function(){return c.canNativePlaySrces(this)?void 0:(h(),S=!0,!1)})})};r&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),o?(t.isReady("mediaelement-core",!0),P(),t.ready("WINDOWLOAD mediaelement",h)):t.ready(s,P),t.ready("track",f)})}(Modernizr,webshims);