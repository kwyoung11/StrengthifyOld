webshims.register("track",function(e,t,a,r){"use strict";var i=t.mediaelement;(new Date).getTime();var n=e.fn.addBack?"addBack":"andSelf",s={subtitles:1,captions:1,descriptions:1},c=e("<track />"),o=Modernizr.ES5&&Modernizr.objectAccessor,d=function(e){var a={};return e.addEventListener=function(e,r){a[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]=r},e.removeEventListener=function(e,r){a[e]&&a[e]!=r&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]&&delete a[e]},e},u={getCueById:function(e){for(var t=null,a=0,r=this.length;r>a;a++)if(this[a].id===e){t=this[a];break}return t}},l={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var a=this.cues[this.cues.length-1];a&&a.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=i.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var a=this.cues||[],r=0,i=a.length;if(e.track!=this)return t.error("cue not part of track"),void 0;for(;i>r;r++)if(a[r]===e){a.splice(r,1),e.track=null;break}return e.track?(t.error("cue not part of track"),void 0):void 0},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],f={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),k=function(a,r){var i,n,s=[],c=[],o=[];if(a||(a=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),r||(a.blockTrackListUpdate=!0,r=e.prop(this,"textTracks"),a.blockTrackListUpdate=!1),clearTimeout(a.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");o.push(t),-1==r.indexOf(t)&&c.push(t)}),a.scriptedTextTracks)for(i=0,n=a.scriptedTextTracks.length;n>i;i++)o.push(a.scriptedTextTracks[i]),-1==r.indexOf(a.scriptedTextTracks[i])&&c.push(a.scriptedTextTracks[i]);for(i=0,n=r.length;n>i;i++)-1==o.indexOf(r[i])&&s.push(r[i]);if(s.length||c.length){for(r.splice(0),i=0,n=o.length;n>i;i++)r.push(o[i]);for(i=0,n=s.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"removetrack",track:s[i]}));for(i=0,n=c.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"addtrack",track:c[i]}));(a.scriptedTextTracks||s.length)&&e(this).triggerHandler("updatetrackdisplay")}},v=function(a,r){r||(r=t.data(a,"trackData")),r&&!r.isTriggering&&(r.isTriggering=!0,setTimeout(function(){(r.track||{}).readyState?e(a).closest("audio, video").triggerHandler("updatetrackdisplay"):e(a).triggerHandler("checktrackmode"),r.isTriggering=!1},1))},g=e("<div />")[0];a.TextTrackCue=function(e,a,r){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=a,this.text=r,this.id="",this.pauseOnExit=!1,d(this)},a.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",a="",n=r.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,r;if(t!=this.text)for(t=this.text,a=i.parseCueTextToHTML(t),g.innerHTML=a,e=0,r=g.childNodes.length;r>e;e++)n.appendChild(g.childNodes[e].cloneNode(!0));return n.cloneNode(!0)}),e?e.apply(this,arguments):n.cloneNode(!0)},track:null,id:""},i.createCueList=function(){return e.extend([],u)},i.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,a=/\<\s*\//,r=function(e,t,r,i){var n;return a.test(i)?n="</"+e+">":(r.splice(0,1),n="<"+e+" "+t+'="'+r.join(" ").replace(/\"/g,"&#34;")+'">'),n},i=function(e){var a=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return a[0]&&(a[0]=a[0].toLowerCase(),t.test(a[0])?"c"==a[0]?e=r("span","class",a,e):"v"==a[0]&&(e=r("q","title",a,e)):e=""),e};return function(t){return t.replace(e,i)}}(),i.loadTextTrack=function(a,r,n,c){var o="play playing timeupdate updatetrackdisplay",d=n.track,u=function(){var n,s,c=e.prop(r,"src");if("disabled"!=d.mode&&c&&e.attr(r,"src")&&(e(a).unbind(o,u),e(r).unbind("checktrackmode",u),!d.readyState)){n=function(){d.readyState=3,d.cues=null,d.activeCues=d.shimActiveCues=d._shimActiveCues=null,e(r).triggerHandler("error")},d.readyState=1;try{d.cues=i.createCueList(),d.activeCues=d.shimActiveCues=d._shimActiveCues=i.createCueList(),s=e.ajax({dataType:"text",url:c,success:function(c){"text/vtt"!=s.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),i.parseCaptions(c,d,function(t){t&&"length"in t?(d.readyState=2,e(r).triggerHandler("load"),e(a).triggerHandler("updatetrackdisplay")):n()})},error:n})}catch(l){n(),t.warn(l)}}};d.readyState=0,d.shimActiveCues=null,d._shimActiveCues=null,d.activeCues=null,d.cues=null,e(a).unbind(o,u),e(r).unbind("checktrackmode",u),e(a).on(o,u),e(r).on("checktrackmode",u),c&&(d.mode=s[d.kind]?"showing":"hidden",u())},i.createTextTrack=function(a,r){var s,c;return r.nodeName&&(c=t.data(r,"trackData"),c&&(v(r,c),s=c.track)),s||(s=d(t.objectCreate(p)),o||h.forEach(function(t){var a=e.prop(r,t);a&&(s[f[t]||t]=a)}),r.nodeName?(o&&h.forEach(function(a){t.defineProperty(s,f[a]||a,{get:function(){return e.prop(r,a)}})}),c=t.data(r,"trackData",{track:s}),i.loadTextTrack(a,r,c,e.prop(r,"default")&&e(r).siblings("track[default]")[n]()[0]==r)):(o&&h.forEach(function(e){t.defineProperty(s,f[e]||e,{value:r[e],writeable:!1})}),s.cues=i.createCueList(),s.activeCues=s._shimActiveCues=s.shimActiveCues=i.createCueList(),s.mode="hidden",s.readyState=2)),s},i.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,a=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,r=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,i=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(n){var s,c,o,d,u,l,p,h,f,m;if(h=a.exec(n))return null;if(h=r.exec(n))return null;if(h=i.exec(n))return null;for(s=n.split(/\n/g);!s[0].replace(/\s+/gi,"").length&&s.length>0;)s.shift();for(s[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=String(s.shift().replace(/\s*/gi,""))),l=0;l<s.length;l++){var k=s[l];(f=e.exec(k))&&(u=f.slice(1),c=parseInt(60*60*(u[0]||0),10)+parseInt(60*(u[1]||0),10)+parseInt(u[2]||0,10)+parseFloat("0."+(u[3]||0)),o=parseInt(60*60*(u[4]||0),10)+parseInt(60*(u[5]||0),10)+parseInt(u[6]||0,10)+parseFloat("0."+(u[7]||0))),s=s.slice(0,l).concat(s.slice(l+1));break}return c||o?(d=s.join("\n"),m=new TextTrackCue(c,o,d),p&&(m.id=p),m):(t.warn("couldn't extract time information: "+[c,o,s.join("\n"),p].join(" ; ")),null)}}(),i.parseCaptions=function(e,a,r){i.createCueList();var n,s,c,o,d;e?(c=/^WEBVTT(\s*FILE)?/gi,s=function(u,l){for(;l>u;u++){if(n=e[u],c.test(n))d=!0;else if(n.replace(/\s*/gi,"").length){if(!d){t.error("please use WebVTT format. This is the standard"),r(null);break}n=i.parseCaptionChunk(n,u),n&&a.addCue(n)}if(o<(new Date).getTime()-30){u++,setTimeout(function(){o=(new Date).getTime(),s(u,l)},90);break}}u>=l&&(d||t.error("please use WebVTT format. This is the standard"),r(a.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){o=(new Date).getTime(),e=e.split(/\n\n+/g),s(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},i.createTrackList=function(e,a){return a=a||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),a.textTracks||(a.textTracks=[],t.defineProperties(a.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),d(a.textTracks)),a.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var a=t.data(this,"trackData");this.setAttribute("data-kind",e),a&&(a.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(a,r){var i=f[r]||r;t.onNodeNamesPropertyModify("track",r,function(){var a=t.data(this,"trackData"),n=this;a&&("kind"==r&&v(this,a),o||(a.track[i]=e.prop(this,r)),clearTimeout(a.changedTrackPropTimer),a.changedTrackPropTimer=setTimeout(function(){e(n).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(a){if(a){var r,n=t.data(this,"trackData");n&&(r=e(this).closest("video, audio"),r[0]&&i.loadTextTrack(r,this,n))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return i.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),r=i.createTrackList(e,a);return a.blockTrackListUpdate||k.call(e,a,r),r},writeable:!1},addTextTrack:{value:function(e,a,r){var n=i.createTextTrack(this,{kind:c.prop("kind",e||"").prop("kind"),label:a||"",srclang:r||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(n),k.call(this),n}}},"prop"),e(r).on("emptied ended updatetracklist",function(a){if(e(a.target).is("audio, video")){var r=t.data(a.target,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){k.call(a.target,r)},0))}});var T=function(e,t){return t.readyState||e.readyState},y=function(e){e.originalEvent&&e.stopImmediatePropagation()},C=function(){if(t.implement(this,"track")){var a,r,i=e.prop(this,"track"),n=this.track;n&&(a=e.prop(this,"kind"),r=T(this,n),(n.mode||r)&&(i.mode=l[n.mode]||n.mode),"descriptions"!=a&&(n.mode="string"==typeof n.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:a}))),e(this).on("load error",y)}};t.addReady(function(a,r){var i=r.filter("video, audio, track").closest("audio, video");e("video, audio",a).add(i).each(function(){k.call(this)}).each(function(){if(Modernizr.track){var a=e.prop(this,"textTracks"),r=this.textTracks;a.length!=r.length&&t.error("textTracks couldn't be copied"),e("track",this).each(C)}}),i.each(function(){var e=this,a=t.data(e,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){k.call(e,a)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")}),function(e){if(Modernizr.track&&Modernizr.texttrackapi&&document.addEventListener){var t=webshims.cfg.track,a=function(t){e(t.target).filter("track").each(i)},r=webshims.bugs.track,i=function(){return r||!t.override&&3==e.prop(this,"readyState")?(t.override=!0,webshims.reTest("track"),document.removeEventListener("error",a,!0),this&&e.nodeName(this,"track")?webshims.error("track support was overwritten. Please check your vtt including your vtt mime-type"):webshims.info("track support was overwritten. due to bad browser support"),!1):void 0},n=function(){document.addEventListener("error",a,!0),r?i():e("track").each(i)};t.override||n()}}(webshims.$),webshims.register("track-ui",function(e,t){"use strict";function a(e,t){var a=!0,r=0,i=e.length;if(i!=t.length)a=!1;else for(;i>r;r++)if(e[r]!=t[r]){a=!1;break}return a}var r=t.cfg.track,i={subtitles:1,captions:1,descriptions:1},n=t.mediaelement,s=function(){return!r.override&&Modernizr.track},c={update:function(r,i){r.activeCues.length?a(r.displayedActiveCues,r.activeCues)||(r.displayedActiveCues=r.activeCues,r.trackDisplay||(r.trackDisplay=e('<div class="cue-display"><span class="description-cues" aria-live="assertive" /></div>').insertAfter(i),this.addEvents(r,i),t.docObserve()),r.hasDirtyTrackDisplay&&i.triggerHandler("forceupdatetrackdisplay"),this.showCues(r)):this.hide(r)},showCues:function(t){var a=e('<span class="cue-wrapper" />');e.each(t.displayedActiveCues,function(r,i){var n=i.id?'id="cue-id-'+i.id+'"':"",s=e('<span class="cue-line"><span '+n+' class="cue" /></span>').find("span").html(i.getCueAsHTML()).end();"descriptions"==i.track.kind?setTimeout(function(){e("span.description-cues",t.trackDisplay).html(s)},0):a.prepend(s)}),e("span.cue-wrapper",t.trackDisplay).remove(),t.trackDisplay.append(a)},addEvents:function(e,t){if(r.positionDisplay){var a,i=function(a){if(e.displayedActiveCues.length||a===!0){e.trackDisplay.css({display:"none"});var r=t.getShadowElement();r.offsetParent();var i=r.innerHeight(),n=r.innerWidth(),s=r.position();e.trackDisplay.css({left:s.left,width:n,height:i-45,top:s.top,display:"block"}),e.trackDisplay.css("fontSize",Math.max(Math.round(i/30),7)),e.hasDirtyTrackDisplay=!1}else e.hasDirtyTrackDisplay=!0},n=function(){clearTimeout(a),a=setTimeout(i,0)},s=function(){i(!0)};t.on("playerdimensionchange mediaelementapichange updatetrackdisplay updatemediaelementdimensions swfstageresize",n),t.on("forceupdatetrackdisplay",s).onWSOff("updateshadowdom",n),s()}},hide:function(t){t.trackDisplay&&t.displayedActiveCues.length&&(t.displayedActiveCues=[],e("span.cue-wrapper",t.trackDisplay).remove(),e("span.description-cues",t.trackDisplay).empty())}};if(n.trackDisplay=c,!n.createCueList){var o={getCueById:function(e){for(var t=null,a=0,r=this.length;r>a;a++)if(this[a].id===e){t=this[a];break}return t}};n.createCueList=function(){return e.extend([],o)}}n.getActiveCue=function(t,a,s,c){t._lastFoundCue||(t._lastFoundCue={index:0,time:0}),!Modernizr.track||r.override||t._shimActiveCues||(t._shimActiveCues=n.createCueList());for(var o,d,u=0;u<t.shimActiveCues.length;u++)d=t.shimActiveCues[u],d.startTime>s||d.endTime<s?(t.shimActiveCues.splice(u,1),u--,d.pauseOnExit&&e(a).pause(),e(t).triggerHandler("cuechange"),e(d).triggerHandler("exit")):"showing"==t.mode&&i[t.kind]&&-1==e.inArray(d,c.activeCues)&&c.activeCues.push(d);for(o=t.cues.length,u=t._lastFoundCue.time<s?t._lastFoundCue.index:0;o>u&&(d=t.cues[u],d.startTime<=s&&d.endTime>=s&&-1==e.inArray(d,t.shimActiveCues)&&(t.shimActiveCues.push(d),"showing"==t.mode&&i[t.kind]&&c.activeCues.push(d),e(t).triggerHandler("cuechange"),e(d).triggerHandler("enter"),t._lastFoundCue.time=s,t._lastFoundCue.index=u),!(d.startTime>s));u++);},s()&&function(){var a,r=function(t){setTimeout(function(){a=!0,e(t).triggerHandler("updatetrackdisplay"),a=!1},9)},i=function(i,n,c){var o,d="_sup"+c,u={prop:{}};u.prop[c]=function(){return!a&&s()&&r(e(this).closest("audio, video")),o.prop[d].apply(this,arguments)},o=t.defineNodeNameProperty(i,n,u)};i("track","track","get"),["audio","video"].forEach(function(e){i(e,"textTracks","get"),i("nodeName","addTextTrack","value")})}(),t.addReady(function(a,r){e("video, audio",a).add(r.filter("video, audio")).filter(function(){return t.implement(this,"trackui")}).each(function(){var a,r,i,o=e(this),d=function(){var e,i;if(r&&a||(r=o.prop("textTracks"),a=t.data(o[0],"mediaelementBase")||t.data(o[0],"mediaelementBase",{}),a.displayedActiveCues||(a.displayedActiveCues=[])),r&&(i=o.prop("currentTime"),i||0===i)){a.activeCues=[];for(var s=0,d=r.length;d>s;s++)e=r[s],"disabled"!=e.mode&&e.cues&&e.cues.length&&n.getActiveCue(e,o,i,a);c.update(a,o)}},u=function(e){clearTimeout(i),e&&"timeupdate"==e.type?(d(),setTimeout(u,90)):i=setTimeout(d,9)},l=function(){o.off(".trackview").on("play.trackview timeupdate.trackview updatetrackdisplay.trackview",u)};o.on("remove",function(e){!e.originalEvent&&a&&a.trackDisplay&&setTimeout(function(){a.trackDisplay.remove()},4)}),s()?o.on("mediaelementapichange trackapichange",function(){!s()||o.is(".nonnative-api-active")?l():(r=o.prop("textTracks"),a=t.data(o[0],"mediaelementBase")||t.data(o[0],"mediaelementBase",{}),e.each(r,function(e,t){t._shimActiveCues&&delete t._shimActiveCues}),c.hide(a),o.unbind(".trackview"))}):l()})})});