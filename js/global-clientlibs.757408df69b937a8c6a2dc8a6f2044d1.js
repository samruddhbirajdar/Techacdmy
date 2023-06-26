
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map


window.ATVI = window.ATVI || {};
ATVI.components = ATVI.components || {};

// atvi-utils

(function($, ATVI) {

    var utils = ATVI.utils = {};
	var cookieMap, queryMap, idCounter = 0;

    utils.renderTemplate = function(template, fieldData, prefix, suffix) {
        prefix = prefix || "{{";
        suffix = suffix || "}}";
        var ret = template;
        for(var field in fieldData) {
            ret = ret.replace(new RegExp(prefix + field + suffix, "g"), fieldData[field]);
        }
        return ret;
    };

	utils.getCookies = function(update) {
        if(!cookieMap || update) {
            cookieMap = {};
            var i, cookies = document.cookie.split(";");
            for (i = 0; i < cookies.length; i++) {
                var index = cookies[i].indexOf('=');
                var x = cookies[i].substr(0, index);
                var y = cookies[i].substr(index + 1);
                x = x.replace(/^\s+|\s+$/g, '');
                if(x) cookieMap[x] = unescape(y);
            }
        }
        return cookieMap;
    };

    utils.getCookie = function(c, update) {
		return this.getCookies(update)[c];
    };

	utils.setCookie = function(name, value, opts) {
        var value = escape(value);
        opts = opts || {};

        value += ";path=" + (opts.path || "/");

		if(opts.domain) value += ";domain=" + opts.domain;

        var t = typeof opts.maxAge;
        if(t == "number" || t == "string") value += ";max-age=" + opts.maxAge;

        var e = opts.expireDate;
        if(typeof e == "number") e = new Date((new Date()).getTime() + e * 1000);
        if(e) value += ';expires=' + e.toUTCString();

		if(opts.secure) value += ";secure";

        document.cookie = name + '=' + value;
        cookieMap = null;
    };

    utils.getQueryParameters = function(update) {
        if(!queryMap || update) {
            queryMap = {};
            var q = window.location.href;
            var ind = q.indexOf("?");
            q = (ind >= 0) ? q.substring(ind + 1) : "";
            ind = q.indexOf("#");
            if(ind >= 0) q = q.substring(0, ind);
            q = q.split("&");
            for(var i = 0; i < q.length; i++) {
                p = q[i].split("=");
                if(p[0]) queryMap[p[0]] = p[1] ? decodeURIComponent(p[1]) : p[1];
            }
        }
        return queryMap;
    };

    utils.getQueryParameter = function(p, update) {
        return this.getQueryParameters(update)[p];
    };

    utils.uniqueId = function($els) {
        $els = $($els);
        var prefix = "atvi-unique-" + (new Date().getTime()) + "-";
        $els.each(function() {
            if(this.id) return;
            var id;
            while(!id || $("#" + id).length) {
                id = prefix + (idCounter++);
            }
            this.id = id;
        });
        return $els;
    };

    utils.parseUrl = function(url) {
        if(!url) return;
        var ret = {originalUrl: url};
        var m = url.match(/^(([^\/:]+:)?\/\/)?(.*)$/);
        if(m[1]) ret.protocol = m[2] || window.location.protocol;
        else {
            ret.protocol = "http:";
            var domainNeeded = true;
        }
        url = m[3];
        if(!url) return;
        m = url.match(/^(([\w-]+(\.[\w-]+)*)(:0*([1-9][0-9]*))?)?(\/.*)?$/);
        ret.host = m[1];
        if(!ret.host && domainNeeded) return;
        ret.domain = m[2];
        ret.port = parseInt(m[5] || 0) || undefined;
        ret.usedPort = ret.port || ret.protocol == "http:" ? 80 : 443;
        url = m[6];
		var ind = url.indexOf("#");
        if(ind >= 0) {
            ret.hash = url.substring(ind);
            ret.hashValue = ret.hash(1);
            url = url.substring(0, ind);
        }
        ind = url.indexOf("?");
        if(ind >= 0) {
			ret.query = url.substring(ind);
            var p = ret.queryParameters = {};
            var params = ret.query.substring(1).split("&");
            for(var i = 0; i < params.length; i++) {
				var e = params[i].split("=");
                if(e[0]) {
                    var name = e.shift();
					params[name] = e.join("+"); 
                }
            }
            url = url.substring(0, ind);
        }
        return ret;
    };

    utils.localeRegex = /^\/(\w\w(\/\w\w)?)($|\/.*$)/;
    utils.locales = {
        en: "en_us",
        da: "da_dk",
        en_uk: "en_gb",
        mx: "es_mx",
        pt: "br_pt",
        jp: "ja_jp"
    };

    utils.parseLocalizedPath = function(path) {
        var m = path.match(utils.localeRegex);
        var n = m ? m[3] || "/" : path || "/";
        var lp = m ? m[1] : "";
        var loc = (lp || "en").replace(/(\w\w)\/(\w\w)/, "$2_$1");
        loc = utils.locales[loc] || loc;
        loc = loc.replace(/^(\w\w)$/, "$1_$1");
        if(lp) lp = "/" + lp;
        return {
            normalized: n,
            locPart: lp,
            locale: loc,
            region: loc.substring(3),
            language: loc.substring(0, 2)
        };
    };

    utils.base64Map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    utils.decodeBase64 = function(inp) {
        var map = utils.base64Map;
        var ret = "";
        var in1, in2, in3, in4, out1, out2, out3, i = 0;

        inp = inp.replace(/[^a-zA-Z0-9\+\/\=]/g, "");
        do {
            in1 = map.indexOf(inp.charAt(i++) || "=");
            in2 = map.indexOf(inp.charAt(i++) || "=");
            in3 = map.indexOf(inp.charAt(i++) || "=");
            in4 = map.indexOf(inp.charAt(i++) || "=");

            out1 = (in1 << 2) | (in2 >> 4);
            out2 = ((in2 & 15) << 4) | (in3 >> 2);
            out3 = ((in3 & 3) << 6) | in4;

            ret = ret + String.fromCharCode(out1);
            if (in3 != 64) ret = ret + String.fromCharCode(out2);
            if (in4 != 64) ret = ret + String.fromCharCode(out3);
        } while (i < inp.length);

        return ret;
    };

    utils.createRegistry = (function() {

        var register = function(r, $el, obj, cl) {
			var id;
            if(typeof $el == "string") id = $el;
            else {
                $el = resolve($el, cl);
                if(!$el.length) return null;
				id = $el[0].id;
            }
            var c = r.store[id];
            if(!c) {
                c = r.store[id] = obj || {};
            }
            return {
                $el: $el,
                context: c
            };
        };

        var get = function(r, $el, cl) {
            var id = typeof $el == "string" ? $el : resolve($el, cl)[0].id;
			return r.store[id];
        };

        var getAll = function(r) {
            var ret = [];
            for(var id in r.store) {
                if(r.store.hasOwnProperty(id)) ret.push({id: id, context: r.store[id]});
            }
            return ret;
        };

        var purge = function(r, $el, cl) {
            var id = typeof $el == "string" ? $el : resolve($el, cl)[0].id;
            var a = r.store[id];
            r.store[id] = null;
			delete r.store[id];
            return !!a;
        };

        var purgeAll = function(r) {
			for(var id in r.store) {
                if(r.store.hasOwnProperty(id)) {
                    r.store[id] = null;
                    delete r.store[id];
                }
            }
        };

        var resolve = function($el, cl) {
            if(cl && !$el.hasClass(cl)) {
                var c = $el.find("." + cl);
                if(c.length) $el = c.first();
                else {
					c = $el.parents("." + cl);
                    if(c.length) $el = c.first();
                }
            }
            return utils.uniqueId($el);
        };

        return function(reqClass) {
			var r = {
                store: {},
                register: function($el, obj) {
                    return register(r, $el, obj, reqClass);
                },
                get: function($el) {
					return get(r, $el, reqClass);
                },
                purge: function($el) {
					return purge(r, $el, reqClass);
                },
                getAll: function() {
                    return getAll(r);
                },
                purgeAll: function() {
					return purgeAll(r);
                }
    	    };
            return r;
        };

    })();

    utils.createReadyQueue = function(arr, alwaysAfter) {

		var ready = false;
        var queue = [];
        var onReady = function(callback) {
            if(ready) {
				if(alwaysAfter) setTimeout(callback, 0);
                else callback();
            }
            else queue.push(callback);
        };

        var events = arr.slice(0);
        
        var processQueue = function() {
            while(queue.length) queue.shift()();
        };
        
        var trigger = function(ev) {
            for(var i = 0; i < events.length; i++) {
                if(events[i] == ev) {
                    events.splice(i, 1);
                    break;
                }
            }
            if(!events.length) {
                ready = true;
                processQueue();
            }
        };

        var add = function(ev) {
			events.push(ev);
            ready = false;
        };

        return {
            on: onReady,
            trigger: trigger,
            add: add,
            get: function() { return events.slice(0); }
        };
    };

    utils.assignId = function(str, type) {
        var rando = Math.round(Math.random() * 1000000 + 1);
		if (str == "" || str == null) return "atvi-" + type + "-" + rando;
        else return str + '-' + rando;
    };

    utils.buildYoutubeEl = function(youtubeId) {
		var elId = utils.assignId('', 'video'),
            $wrapperEl = $('<div>', {'id': elId, 'class': 'atvi-video-component', 'data-youtube-id': youtubeId}),
            $inner = $('<div>', { 'class': 'player atvi-instrument atvi-instrument-video-player'}),
            $embedEl = $('<div>', {'id': elId + '-embed'}),
            $el = $wrapperEl.append($inner.append($embedEl)),
            configObj = { youtubeId: youtubeId, start: 0, customControls: false };

		window.ATVIVideoEls = window.ATVIVideoEls || [];

		window.ATVIVideoEls.push({
            $el: $el,
            config: configObj
        });

        function generatePlayer() {
            ATVI.components.video.generatePlayer($el, configObj);
            if (!$el.find('.' + $el.attr('id') + '-embed').children().length) {
                setTimeout(function() {
                    ATVI.components.video.purgeContext($el);
                    ATVI.components.video.generatePlayer($el, configObj);
                }, 500);
            }
        }

        ATVI.library.withDependency('atvi-video', function() {
            if (ATVI.components.video.YTApiReady) generatePlayer();
            else {
                document.addEventListener('youtubeApiReady', function() {
					generatePlayer();
                });
            }
        });

        return $el;
    };

    utils.purgeYoutubeEl = function($el){
        var i;
        ATVI.components.video.purgeContext($el);
        for (i = 0; i < window.ATVIVideoEls.length; i++) {
            if ($el.is(window.ATVIVideoEls[i].$el)) {
                window.ATVIVideoEls.splice(i, 1);
            }
        }
    };

    utils.scrollToTarget = function($el, duration, offsetTop) {

        var o = offsetTop || 0;
        var d = duration || 0;

		$('html, body').animate({
          scrollTop: $el.offset().top - o
        }, d, function () {
            // Callback after animation
            // Must change focus!
            var $target = $el;
            $target.focus();
            if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
            } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
        });

    };

    utils.isInViewport = function($el) {

        let selector = $el; 
        if(selector.length == 0) return false; 
        let elementTop = selector.offset().top;
        let elementBottom = elementTop + selector.outerHeight();
        
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        
        return elementBottom > viewportTop && elementTop < viewportBottom; //returns true or false

    };

    /*utils.interectObserver = function($el) {

    	let selector = $el[0] || $el; //if passing jquery selector or js node

		//intersection observer call back
    	const handleCallback = (entries) => {
            entries.forEach( (entry) => {
                //if target passes half way in viewport
                if (entry.intersectionRatio >= 0.5) {
                    const { target } = entry;
    
                    return true;
                }
            });
        }

        //create new intersection observer instance
		let observer = new IntersectionObserver(handleCallback, {threshold: 0.5});

        observer.observe(selector);
    }*/

    utils.addPrivacyLinks = function($container) {

		var ld = ATVI.localeDetector;

        if (ld.region && (ld.region == 'ca' || ld.region == 'co' || ld.region == 'va' || ld.region == 'ct')) {
            var anchor = $('<a/>', { 'href':'https://support.activision.com/privacyrequest?st=' + ld.region, 'text': 'Your Privacy Choices', 'target': '_blank' });
            var item = $('<li/>', { 'class':'privacy-check'});
            item.append(anchor);
            $container.append(item);
        }
        else {
			document.addEventListener('localeDetectionReady', function() {
                if (ld.region == 'ca' || ld.region == 'co' || ld.region == 'va' || ld.region == 'ct') {
                    var anchor = $('<a/>', { 'href':'https://support.activision.com/privacyrequest?st=' + ld.region, 'text': 'Your Privacy Choices', 'target': '_blank' });
                    var item = $('<li/>', { 'class':'privacy-check'});
                    item.append(anchor);
                    $container.append(item);
                }
            });
        }

        if(ld.region && ld.region == 'ca') {
			var anchor = $('<a/>', { 'href':'https://www.activision.com/legal/privacy-policy#toc10b', 'text': 'California Privacy Notice', 'target': '_blank' }),
            item = $('<li/>'); 
            item.append(anchor);
            $container.append(item);
        }
        else {
			document.addEventListener('localeDetectionReady', function() {
                if (ld.region == 'ca') {
					var anchor = $('<a/>', { 'href':'https://www.activision.com/legal/privacy-policy#toc10b', 'text': 'California Privacy Notice', 'target': '_blank' }),
                    item = $('<li/>'); 
                    item.append(anchor);
                    $container.append(item);
                }
            });
        }

    };

})(jQuery, ATVI);

window.ATVI = window.ATVI || {};
ATVI.components = ATVI.components || {};

var dataLayer = dataLayer || undefined, digitalData = digitalData || undefined;

ATVI.franchiseMap = {
	'vanguard': 'vgd',
	'blackopscoldwar': 'bocw',
	'modernwarfare': 'mw',
    'modernwarfare2': 'mw2',
	'warzone': 'wz',
    'warzone2': 'wz',
    'warzonemobile': 'wzm',
	'tonyhawkthegame': 'thps',
    'alcatraz': 'thps',
    'crash': 'crash',
    '/crash/quantum': 'crash 4',
	'crash4': 'crash 4',
    'lava': 'rumble',
	'crashontherun': 'crash on the run',
    'crashteamracing': 'crash team racing',
	'nsane-trilogy': 'nsane trilogy',
	'sekirothegame': 'sekiro',
    'spyrothedragon': 'spyro rt'
};


ATVI.dataLayerGameName = '';

(function($, ATVI) {
	var url = window.location.href,
        franchises = Object.keys(ATVI.franchiseMap), i;

    for (i = 0; i < franchises.length; i++) {
        if (url.indexOf(franchises[i]) > -1) {
			ATVI.dataLayerGameName = ATVI.franchiseMap[franchises[i]];
        }
    }
    // NOTE: Should we continue to default to cod or modify the code/site map to give better results?
    if (!ATVI.dataLayerGameName) ATVI.dataLayerGameName = 'cod';

    ATVI.definePageView = function() {
        if (!digitalData) return;
        var url = window.location.href;
        /*if (url.indexOf('activisionblizzard') > -1 && url.indexOf('activisionblizzardmedia') == -1 
        	|| url.indexOf('my.callofduty') > -1 
            || url.indexOf('stage.callofduty.com') > -1 
            || url.indexOf('blog.activision.com') > -1
            || url.indexOf('callofdutyendowment.org') > -1
            || url.indexOf('/atvi/callofduty/endowment') > -1) return;*/
        if(url.indexOf('/atvi/callofduty/endowment') > -1 || 
           url.indexOf('stage.callofduty.com') > -1 || 
           url.indexOf('my.callofduty.com') > -1 ) return;
        var d = digitalData.page, obj = {},
            siteSubsectionStr = d.pageInfo.siteSubsection;
		if (siteSubsectionStr == 'hub' && ATVI.dataLayerGameName.indexOf('crash') > -1) siteSubsectionStr = 'home';
        obj.event = 'pageView';
		obj.site = d.pageInfo.site;
        obj.siteSection = d.pageInfo.siteSection;
        obj.siteSubsection = siteSubsectionStr;
        obj.pageType = d.pageCategory.pageType;
        obj.pageName = d.pageInfo.pageName;
        obj.name = d.targetEntity.name;
        obj.description = d.targetEntity.description;
        obj.pageURL = d.targetEntity.pageURL;
        obj.country = d.pageInfo.country;
        obj.locale = d.targetEntity.locale;
        obj.language = d.pageInfo.language;
        obj.charSet = d.pageInfo.charSet;
        obj.skill = d.targetEntity.skill;
        obj.loggedIn = (ATVI.utils.getCookie("ACT_SSO_COOKIE")) ? true : false;
        dataLayer.push(obj);
    };

    ATVI.definePageView();

})(jQuery, ATVI);
// add callback methods for any components affected by cookie acceptance/denial changes
window.onload = () => {
    ATVI.cookiesAccepted = window.OptanonActiveGroups;
    document.addEventListener('OneTrustGroupsUpdated', function() {
        if (ATVI.components?.video) ATVI.components.video.handleOptanonChange();
		ATVI.cookiesAccepted = window.OptanonActiveGroups;
    });
};


// banner pop up
(function() { 

    var init = function() {

        var enableBanner = false; //Set to true if you need to enable the banner. Set to false to disable the banner
        var banner = $(".atvi-privacy-policy-module"); //set to banner that needs to be active
        var cookieName = "atvi-pp"; //name of cookie to check. Change name slightly each time a new update goes live

        if(typeof ATVI.utils.getCookie(cookieName) == "undefined" && enableBanner == true) {

            if(banner.length) {
                banner.addClass("show");

    			var btn = banner.find(".close-modal");
                btn.click(function(e){
                    banner.removeClass("show");
                    setCookie(cookieName);
                });
            }

        }

    };

    var setCookie = function(cName) {
		ATVI.utils.setCookie(cName, true, {expireDate: (3600 * 24 * 365)});
    };

    $(init);

})();



(function($, ATVI) {

    var lib = ATVI.library = {};

    var dependencies = {
        jScrollPane: "basic-ui"
    };

    var loaded = {};
    var onLoadHandlers = {};
    var loading = {};

    lib.registerLibrary = function(n) {
		loaded[n] = true;
		getOnLoadQueue(n).trigger("load");
        var q = loading[n] || [];
        while(q.length) {
			q.shift()();
        }
    };

    lib.loadDependencies = function() {
        for(var i = 0; i < arguments.length; i++) {
			lib.withDependency(arguments[i]);
        }
    };

    lib.withDependency = function(deps, callback) {
        var i, library, types = "";
        if($.isArray(deps)) {
			var evs = [];
            for(i = 0; i < deps.length; i++) {
                var dep = deps[i];
                var depName = typeof dep == "object" ? dep.name : dep;
				if(evs.indexOf(depName) >= 0) continue;
                var library = dependencies[depName] || depName;
                if(loaded[library]) continue;
                evs.push(dep);
            }
            if(!evs.length) {
				if(callback) callback();
                return;
            }
			var q = ATVI.utils.createReadyQueue(evs);
            if(callback) q.on(callback);
            for(i = 0; i < evs.length; i++) {
                var cb = (function(l) {
                    return function() {
                        q.trigger(l);
                    };
                })(evs[i]);
                lib.withDependency(evs[i], cb);
            }
			return;
        }

        if(typeof deps == "object") {
            var o = deps;
            depName = o.name;
            types = o.types;
        } else {
            depName = deps;
        }
		library = dependencies[depName] || depName;
        if(loaded[library]) {
			if(callback) callback();
            return;
        }

		var a = loading[library];
        if(!a) {
            var doLoad = true;
        	a = loading[library] = [];
        }
        if(callback) a.push(callback);
        if(doLoad) loadLibrary(library, types);
    };

    var loadLibrary = function(libName, types) {
		var urlBase = "/apps/atvi/global/components/content/" + libName;
        if(types != "css")
            $.ajax({
                dataType: "script",
                cache: true,
                url: urlBase + "/clientlibs.js" 
            });
        if(types != "js")
            $("<link>", {"type": "text/css", "rel": "stylesheet", "href": urlBase + "/clientlibs.css"})
                .appendTo($('head'));
    };

    var getOnLoadQueue = function(dep) {
		if(!onLoadHandlers[dep]) onLoadHandlers[dep] = ATVI.utils.createReadyQueue(["load"]);
		return onLoadHandlers[dep];
    };

    lib.onDependencyLoad = function(dep, handler) {
		getOnLoadQueue(dep).on(handler);
    };

})(jQuery, ATVI);

// browser
(function() {
    var b = ATVI.browser = {};
    b.hasPointerEvents = !!window.PointerEvent;
    b.hasTouchEvents = 'ontouchend' in document;
    b.isTouch = b.hasPointerEvents || b.hasTouchEvents;

    var ua = navigator.userAgent;
	b.isAndroid = !!ua.match(/Android/i);
    b.isAndroidMobile = b.isAndroid && !!ua.match(/Mobile/i);
    b.isAndroidTablet = b.isAndroid && !b.isAndroidMobile;
    b.isBlackberry = !!ua.match(/BlackBerry/i);
	b.isIPhone = !!ua.match(/iPhone/i);
    b.isIPad = !!ua.match(/iPad/i);
    b.isIPod = !!ua.match(/iPod/i);
    b.isIos = b.isIPhone || b.isIPad || b.isIPod;
	b.isOperaMini = !!ua.match(/Opera Mini/i);
	b.isIeMobile = !!ua.match(/IEMobile/i);

    b.isBot = !!ua.match(/googlebot|yahoo|msnbot|bingbot|slurp|teoma/i);

    b.isPhone = b.isAndroidMobile || b.isBlackberry || b.isIPhone || b.isIPod || b.isOperaMini || b.isIeMobile;
    b.isTablet = b.isAndroidTablet || b.isIPad;

})();


// analytics

ATVI.analytics = ATVI.analytics || {};
(function($, ATVI) {

	var ana = ATVI.analytics;

    ana.siteId = "cms-generic";
    ana.ns_site = "dev";
	ana.prefixesToStrip = [];
    ana.homePageFilename = "home";
    ana.inited = false;

    ana.init = function() {
        ana.$body = $("body");
        ana.setupPageLoad();
        var go = function() {
            ana.inited = true;
	        //ana.setupClickHandlers($("body"));
        };

        if(window.ssobar && ssobar.onReady) ssobar.onReady(go);
        else go();
    };

    ana.setupClickHandlers = function(root) {
        if(!ana.inited) return;
        /*
        root = $(root);
        this.setupTaggedElements(root);
        this.setupLinks(root);
        */
    };

    ana.stripPathPrefixes = function(path) {
        var ret = path;
        for(var i = 0; i < this.prefixesToStrip.length; i++) {
            ret = ret.replace(new RegExp("^" + this.prefixesToStrip[i] + "(/.*)?$"), "$1");
        }
        return ret;
    };

    ana.splitPath = function(path, includeFileExtension) {
        var ret = path.replace(/^\//, "").replace(/\/$/, "");
        if(!includeFileExtension) ret = ret.replace(/(.*)\.\w+$/, "$1");
        ret = ret.replace(/\./g, '_').replace(/\/+/g, '.');
        if(ret.length == 0) ret = this.homePageFilename;
        return ret.split('.');
    };

    ana.getSiteData = function() {
        var sitename = ana.siteId;
        var locPathname = ana.stripPathPrefixes(window.location.pathname);
        var parsed = ATVI.utils.parseLocalizedPath(locPathname);
        locPathname = ana.stripPathPrefixes(parsed.normalized);
        locPathname = ana.splitPath(locPathname);

        var hierarchy = [];
        var i = locPathname.length - 4;
        if(i < 0) i = 0;
        var top = sitename;
        for(; i < locPathname.length; i++) {
            top += "." + locPathname[i];
            hierarchy.push(top);
        }
        
        while(hierarchy.length < 4) {
            hierarchy.push(top);
        }

        return {
            csName: top,
            csSection: hierarchy[0],
            csSubSection: hierarchy[1],
            csCtitle: hierarchy[2],
            csCtype: hierarchy[0],
            csPathLocale: parsed.locale
        };
    };
    
    ana.setupPageLoad = function() {
        if (location.hostname.indexOf("activision") == -1  && location.hostname.indexOf("guitarhero") == -1) {
            var cookies = ATVI.utils.getCookies(true);
            var instr = {};
            if(cookies.ATVI_INSTRUMENT) {
                try {
                    instr = JSON.parse(cookies.ATVI_INSTRUMENT);
                } catch(e) {
                    instr = {};
                }
            }

            var siteData = this.getSiteData();
            
            var prevPage = instr.page;
            instr.page = siteData.csName;
            
            var pageData = {
                site: this.siteId,
                language: cookies.ACT_SSO_LOCALE || "en_US",
                "name": siteData.csName,
                previous_page: prevPage,
                c_type: siteData.csCtype,
                c_title: siteData.csCtitle,
                section: siteData.csSection,
                sub_section: siteData.csSubSection,
                path_locale: siteData.csPathLocale
            };
            
            var eventCookie = cookies.ACT_SSO_EVENT;
            if(eventCookie) {
                eventCookie = eventCookie.replace(/^\"(.*)\"$/, "$1");
                if(instr.event != eventCookie) {
                    instr.event = eventCookie;
                    eventCookie = eventCookie.split(":");
                    if(eventCookie[0])
                        pageData.sso_event = eventCookie[0];
                }
            }
    
            //ATVI.utils.setCookie("ATVI_INSTRUMENT", JSON.stringify(instr));
            //this.sendData(pageData);
        }
    };

    ana.setupTaggedElements = function(root) {
        /*
        var self = this;
		root.find(".atvi-instrument").click(function() {
            var classes = this.className.split(/\s+/);
            var className;

            for(i in classes) {
                if(classes[i].indexOf("atvi-instrument-") >= 0) {
                    className = classes[i];
                    className = className.substring("atvi-instrument-".length);
                    break;
                }
            }

            if(className) {

                var $this = $(this);
                var id = ana.findComponentId($this);
                var strippedId = id.replace(/^(.+)-analytics-suffix-.*$/, "$1");

                var data = {
                    action_type: className,
                    action_details: strippedId,
                    ns_type: "hidden"
                };

                var go = function() {
					ana.sendData(data);
                };

                if(ana.customData[className]) {
					if(!ana.customData[className]($this, data, go)) go();
                } else go();
            }
        });
        */
    };

    // add to this for component handling
    ana.customData = {}
	// e.g.
    ana.customData.wheretobuy = ana.customData.wheretobuy ||function($el, data) {};

    ana.setupLinks = function(root) {

        root.find("a").not(".atvi-instrument").not(".atvi-no-instrument").click(function() {
            
            var href = this.href;
            var $this = $(this);
            
            var data = {
                action_type: "atvi-anchor",
                href: href,
                ns_type: "hidden"
            };
            
            var detail = "";
            var id = ana.findComponentId($this);
            if(id) {
                var strippedId = id.replace(/^(.+)-analytics-suffix-.*$/, "$1");
                detail += strippedId + ": ";
            }
            var linkText = $this.text().substring(0, 30);
            if(linkText.length >= 30) linkText += "...";
            detail += linkText;
            data.action_details = detail;
            
            //ana.sendData(data);
            
        });
    };

    ana.findComponentId = function($el, selector) {
		var id = $el.attr("id");
        if(id && !$el.hasClass("ignore-id")) return id;
        var i, p = $el.parents(selector);
        for(i = 0; i < p.length; i++) {
            id = p[i].id;
			if(id && !p.eq(i).hasClass("ignore-id")) return id;
        }
		return "";
    };

    ana.sendEvent = function(actionType, actionDetails, params) {
        var data = {
            action_type: actionType,
            action_details: actionDetails,
            ns_type: "hidden"
        };
        params = params || {};
        for(var i in params) {
            if(!params.hasOwnProperty(i)) continue;
            data[i] = params[i];
        }
        //this.sendData(data);

        var ev = document.createEvent("CustomEvent");
        ev.initCustomEvent("atviInstrumentEvent", true, true, { type: actionType, details: actionDetails, data: data });
        document.body.dispatchEvent(ev);
    };

    ana.sendData = function (data) {
        /**
        var loc = 'http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/p?c1=2&c2=14880931';
        
        // common values
        data.visitorID = this.getVisitorId();
        data.anonVisitorID = this.getAnonVisitorId();
        data.ns__t = "" + new Date().getTime();
        data.ns_c = document.characterSet || document.defaultCharset || "";
        data.c8 = document.title;
        data.c7 = document.location.href || document.URL;
        data.c9 = document.referrer;
        
        if(ATVI.uxTest && ATVI.uxTest.campaigns) {
            var campaigns = ATVI.uxTest.campaigns;
            var campaignNames = [], campaignIds = [];
            var recipeNames = [], recipeIds = [];
            var offerNames = [], offerIds = [];
            var mboxNames = [];
            for(var i = 0; i < campaigns.length; i++) {
                campaignNames.push(campaigns[i].campaignName);
                campaignIds.push(campaigns[i].campaignId);
                recipeNames.push(campaigns[i].recipeName);
                recipeIds.push(campaigns[i].recipeId);
                offerNames.push(campaigns[i].offerName);
                offerIds.push(campaigns[i].offerId);
                mboxNames.push(campaigns[i].mboxName);
            }
            data.campaignName = campaignNames.join(",");
            data.campaignId = campaignIds.join(",");
            data.recipeName = recipeNames.join(",");
            data.recipeId = recipeIds.join(",");
            data.offerName = offerNames.join(",");
            data.offerId = offerIds.join(",");
            data.mboxName = mboxNames.join(",");
        }
        
        var cookies = ATVI.utils.getCookies(true);
        if(cookies.comScore) data.comScore = cookies.comScore; 
        
        data.ns_site = ATVI.pageEnv == "prod" ? (this.ns_site || "dev") : "dev";
        
        for(var i in data) {
            loc += "&" + i + "=" + encodeURIComponent(data[i]);
        }
        
        if (loc.length > 2048) {
            var s = loc.substr(0, 2040).lastIndexOf("&");
            loc = (loc.substring(0, s) + "&ns_cut=" + encodeURIComponent(loc.substring(s + 1))).substr(0, 2048);
        }

        if(!ana.$container) ana.$container = $('<div>').css({height: 0, width: 0, overflow: "hidden"}).appendTo(ana.$body);
        	$('<div>').css({height: 0, width: 0, overflow: "hidden"}).appendTo(ana.$container)
        	.append('<img src="' + loc + '" height="1" width="1" alt="*" />' );
        **/
    };

    ana.getVisitorId = function() {
        var c = ATVI.utils.getCookies(true);

        var s = c.ACT_SSO_COOKIE || c.s_ACT_SSO_COOKIE; 

        if(s) {
            var dec = ATVI.utils.decodeBase64(s);
            var index = dec.indexOf(":");
            if(index >= 0) dec = dec.substring(0, index);
            return dec;
        }

        return this.getAnonVisitorId();
    };

    ana.getAnonVisitorId = function() {

        var c = ATVI.utils.getCookies(true);
        if(c.ATVI_VISITOR_ID) return c.ATVI_VISITOR_ID;

        var date = new Date();
        var anonId = "anon-" + date.getTime() + "-" + Math.random();

        date.setTime(date.getTime() + 5 * 356 * 24 * 60 * 60000);
        ATVI.utils.setCookie("ATVI_VISITOR_ID", anonId, date);

        return anonId;
    };


    $(function() {
        ana.init();
    });

})(jQuery, ATVI);

var ATVI = ATVI || {};

(function($, ATVI) {

    let a = ATVI.tagging = {};

    let init = function() {

        if (!digitalData || !dataLayer) return;
        var d = digitalData.page;

        //////////////////////////////////////

        // CTA LINK ANALYTICS CLICK HANDLER

        //////////////////////////////////////

        /**
        	Give the class name .atvi-cta-item to any <a> or <button> element that will act as an interactable CTA link/button.
        	This class is automatically added to the ATVI CTA component's <a> and <button> tags
        **/

        let ctaItems = $(".atvi-cta-item:not(.atvi-exempt-analytics)"); 

        ctaItems.each(function() {

            let curHref = $(this).attr("href") || 'button'; 
            let fullHref = (curHref.startsWith("https:") || curHref == 'button') ? curHref : window.location.origin + curHref;
            let ctaName = $(this).attr("data-entext") || $(this).text().trim(); //text in cta
            let parentModule = ($(this).closest(".atvi-module-container[data-analytics-container]").length > 0) ? $(this).closest(".atvi-module-container[data-analytics-container]") : $(this).closest(".atvi-module-container[id]"); //get closest element that has data-analytics-container or .atvi-module-container element that has ID attribute
            let moduleName = parentModule.data("analytics-container") || parentModule.attr("id") || "atvi-module"; //if it cant find an .atvi-module-container element that has an ID or data-analytics, then by default use 'atvi-module' for name

            let aObj = {

                event: 'interaction', 
                action: moduleName + ":" + ctaName,
                category: 'interaction:' + d.pageInfo.pageName,
                label: fullHref

            };

            $(this).on("click", function() {

                dataLayer.push(aObj);

            });

        });

        ////////////////////////////////////

        // MODULE ANALYTICS SCROLL HANDLER

        ////////////////////////////////////

        //select all elements that have a data-analytics-container attribute
        let containers = document.querySelectorAll("*[data-analytics-container]");

        //if we find at least 1 element, create an observer for the elements
        if(containers.length > 0) createObserver(containers, handleCallback, {threshold: 0.5});

    };

    let createObserver = function(selectors, callback, options = {}) {

        //create new intersection observer instance
		let observer = new IntersectionObserver(callback, options);

        //for each selector, create an observer
        selectors.forEach( (selector) => {
        	observer.observe(selector);
        });
    };

    const handleCallback = (entries) => {
        entries.forEach( (entry) => {
        	//if target passes half way in viewport
    		if (entry.intersectionRatio >= 0.5) {
            	const { target } = entry;

        		//call updateScrollDataLayer method and pass the data-analytics-container value
    			updateScrollDataLayer($(target).data("analytics-container"));
			}
		});
	};

    let updateScrollDataLayer = function(module) {

    	//if dataDigital or dataLayer do not exist, then stop execution of rest of code
        var url = window.location.href;
        var d = digitalData.page, obj = {};

    	//create analytics object using predefined values
		obj.event = "scroll";
		obj.category = "scroll";
        obj.action = d.pageInfo.pageName;
        obj.label = module;

    	//append object to dataLayer
        dataLayer.push(obj);

    };


    $(init);


})(jQuery,ATVI);


// touch

ATVI.touch = {};
(function($, ATVI) {

    var touch = ATVI.touch;
	var touchDist = ATVI.browser.isPhone ? 35 : 60;

    touch.onSimpleHorizontal = function($el, opts) {

        var h = opts.hammer || Hammer($el[0], { swipe_velocity: opts.swipeVelocity || .2 });
        
        h.on("swipeleft swiperight dragleft dragright dragend dragstart", function(ev) {
			var t = ev.type, dx = Math.abs(ev.deltaX), dy = Math.abs(ev.deltaY) + .1, rat = dx / dy, dt = ev.deltaTime;

            if(t != "dragstart" && t != "dragend") {
                ev.preventDefault();
            }

            if(t == "dragleft" && opts.dragLeft) opts.dragLeft(ev);
            if(t == "dragright" && opts.dragRight) opts.dragRight(ev);
            if(t == "dragstart" && opts.dragStart) opts.dragStart(ev);
            if(t == "dragend" && opts.dragEnd) opts.dragEnd(ev);

            if((t == "dragleft" && dx > touchDist && rat > 2 && dt < 700) || t == "swipeleft") {
                if(opts.swipeLeft) opts.swipeLeft(ev);
                //ev.stopDetect();
            }
            if((t == "dragright" && dx > touchDist && rat > 2 && dt < 700) || t == "swiperight") {
                if(opts.swipeRight) opts.swipeRight(ev);
                //ev.stopDetect();
            }
        });

        return {
            hammerObj: h
        };
    };

})(jQuery, ATVI);


// country codes
ATVI.countryCodes = {};
(function() {

    ATVI.countryCodes = {
        "af"	: "Afghanistan",
        "al"	: "Albania",
        "dz"	: "Algeria",
        "as"	: "American Samoa",
        "ad"	: "Andorra",
        "ao"	: "Angola",
        "ag"	: "Antigua and Barbuda",
        "ar"	: "Argentina",
        "am"	: "Armenia",
        "aw"	: "Aruba",
        "au"	: "Australia",
        "at"	: "Austria",
        "az"	: "Azerbaijan",
        "bs"	: "Bahamas",
        "bh"	: "Bahrain",
        "bd"	: "Bangladesh",
        "bb"	: "Barbados",
        "by"	: "Belarus",
        "be"	: "Belgium",
        "be-fr" : "Belgium French",
        "bz"	: "Belize",
        "bj"	: "Benin",
        "bm"	: "Bermuda",
        "bt"	: "Bhutan",
        "bo"	: "Bolivia",
        "ba"	: "Bosnia and Herzegovina",
        "bw"	: "Botswana",
        "bv"	: "Bouvet Island",
        "br"	: "Brazil",
        "io"	: "British Indian Ocean Territory",
        "bn"	: "Brunei Daarussalam",
        "bg"	: "Bulgaria",
        "bf"	: "Burkina Faso",
        "bi"	: "Burundi",
        "kh"	: "Cambodia",
        "cm"	: "Cameroon",
        "ca"	: "Canada",
        "ca-fr"	: "Le Canada Français",
        "cv"	: "Cape Verde",
        "ky"	: "Cayman Islands",
        "cf"	: "Central AFrican Republic",
        "td"	: "Chad",
        "cl"	: "Chile",
        "cn"	: "繁體中文",
        "cn-s"	: "简体中文",
        "cx"	: "Christmas Island",
        "cc"	: "Cocos Islands",
        "co"	: "Colombia",
        "km"	: "Comoros",
        "cg"	: "Congo",
        "cd"	: "The Democratic Republic of Congo",
        "ck"	: "Cook Islands",
        "cr"	: "Costa Rica",
        "ci"	: "Côte d'Ivoire",
        "hr"	: "Croatia",
        "cu"	: "Cuba",
        "cy"	: "Cypress",
        "cz"	: "Czech Republic",
        "dk"	: "Danmark",
        "dj"	: "Djibouti",
        "dm"	: "Dominica",
        "do"	: "Dominican Republic",
        "ec"	: "Ecuador",
        "eg"	: "Egypt",
        "sv"	: "El Salvador",
        "gq"	: "Equatorial Guinea",
        "er"	: "Eritrea",
        "ee"	: "Estonia",
        "et"	: "Ethiopia",
        "fk"	: "Falkland Islands",
        "fo"	: "Faroe Islands",
        "fj"	: "Fiji",
        "fi"	: "Suomi",
        "fr"	: "France",
        "gf"	: "French Guiana",
        "pf"	: "French Polynesia",
        "tf"	: "French Southern Territories",
        "ga"	: "Gabon",
        "gm"	: "Gambia",
        "ge"	: "Georgia",
        "de"	: "Deutschland",
        "gh"	: "Ghana",
        "gi"	: "Gibraltar",
        "gr"	: "Greece",
        "gl"	: "Greenland",
        "gd"	: "Grenada",
        "gp"	: "Guadaloupe",
        "gu"	: "Guam",
        "gt"	: "Guatemala",
        "gn"	: "Guinea",
        "gw"	: "Guinea-Bissau",
        "gy"	: "Guyana",
        "ht"	: "Haiti",
        "hm"	: "Heard Island and Mcdonald Islands",
        "hn"	: "Honduras",
        "hk"	: "Hong Kong",
        "hk-s"	: "Hong Kong 简体中文",
        "hu"	: "Hungary",
        "is"	: "Iceland",
        "in"	: "India",
        "id"	: "Indonesia",
        "ir"	: "Iran",
        "iq"	: "Iraq",
        "ie"	: "Ireland",
        "il"	: "Israel",
        "it"	: "Italia",
        "jm"	: "Jamaica",
        "jp"	: "日本",
        "jo"	: "Jordan",
        "kz"	: "Kazakhstan",
        "ke"	: "Kenya",
        "ki"	: "Kiribati",
        "kp"	: "Korea 조선민주주의인민공화국",
        "kr"	: "대한민국",
        "xk"	: "Kosovo",
        "kw"	: "Kuwait",
        "kg"	: "Kyrgyzstan",
        "la"	: "Laos",
        "lv"	: "Latvia",
        "lb"	: "Lebanon",
        "ls"	: "Lesotho",
        "lr"	: "Liberia",
        "ly"	: "Libyan Arab Jamahiriya",
        "li"	: "Liechtenstein",
        "lt"	: "Lithuania",
        "lu"	: "Luxembourg",
        "lu-de"	: "Luxemburg",
        "lu-fr"	: "Luxembourg",
        "mo"	: "Macao",
        "mk"	: "Macedonia",
        "mg"	: "Madagascar",
        "mw"	: "Malawi",
        "my"	: "Malaysia",
        "mv"	: "Maldives",
        "ml"	: "Mali",
        "mt"	: "Malta",
        "mh"	: "Marshall Islands",
        "mq"	: "Martinique",
        "mu"	: "Mauritius",
        "yt"	: "Mayotte",
        "mx"	: "México",
        "fm"	: "Micronesia",
        "md"	: "Moldova",
        "mc"	: "Monaco",
        "mn"	: "Mongolia",
        "me"	: "Montenegro",
        "ms"	: "Montserrat",
        "ma"	: "Morocco",
        "mz"	: "Mozambique",
        "mm"	: "Myanmar",
        "na"	: "Namibia",
        "nr"	: "Nauru",
        "np"	: "Nepal",
        "nl"	: "Netherlands",
        "an"	: "Netherlands Antilles",
        "nc"	: "New Caledonia",
        "nz"	: "New Zealand",
        "ni"	: "Nicaragua",
        "ne"	: "Niger",
        "ng"	: "Nigeria",
        "nu"	: "Niue",
        "nf"	: "Norfolk Islands",
        "mp"	: "Northern Mariana Islands",
        "no"	: "Norge",
        "om"	: "Oman",
        "pk"	: "Pakistan",
        "pw"	: "Palau",
        "ps"	: "Palestinian Territory",
        "pa"	: "Panama",
        "pg"	: "Papua New Guinea",
        "py"	: "Paraguay",
        "pe"	: "Peru",
        "ph"	: "Philippines",
        "pn"	: "Pitcairn",
        "pl"	: "Polska",
        "pl-en"	: "Poland",
        "pt"	: "Portugal",
        "pr"	: "Puerto Rico",
        "qa"	: "Qatar",
        "re"	: "Réunion",
        "ro"	: "Romania",
        "ru"	: "Росси́я",
        "rw"	: "Rwanda",
        "sh"	: "Saint Helena",
        "kn"	: "Saint Kitts and Nevis",
        "lc"	: "Saint Lucia",
        "pm"	: "Saint Pierre and Miquelon",
        "vc"	: "Saint Vincent and the Grenadines",
        "ws"	: "Samoa",
        "sm"	: "San Marino",
        "st"	: "Sao Tome and Principe",
        "sa"	: "Saudi Arabia",
        "sn"	: "Senegal",
        "rs"	: "Serbia",
        "sc"	: "Seychelles",
        "sl"	: "Sierra Leone",
        "sg"	: "Singapore",
        "sk"	: "Slovakia",
        "si"	: "Slovenia",
        "sb"	: "Solomon Islands",
        "so"	: "Somalia",
        "za"	: "South Africa",
        "gs"	: "South Georgia and the South Sandwich Islands",
        "es"	: "España",
        "lk"	: "Sri Lanka",
        "sd"	: "Sudan",
        "sr"	: "Suriname",
        "sj"	: "Svalbard and Jan Mayen",
        "sz"	: "Swaziland",
        "se"	: "Sverige",
        "ch"	: "Switzerland",
        "ch-de"	: "Schweizerische Eidgenossenschaft",
        "ch-fr"	: "Confédération Suisse",
        "ch-it"	: "Confederazione Svizzera",
        "ch-ro"	: "Confederaziun Svizra",
        "sy"	: "Syrian Arab Republic",
        "tw"	: "Taiwan",
        "tj"	: "Tajikistan",
        "tz"	: "Tanzania",
        "th"	: "Thailand",
        "tl"	: "Timor-Leste",
        "tg"	: "Togo",
        "tk"	: "Tokelau",
        "to"	: "Tonga",
        "tt"	: "Trinidad and Tobago",
        "tn"	: "Tunisia",
        "tr"	: "Turkey",
        "tm"	: "Turkmenistan",
        "tc"	: "Turks and Caicos Islands",
        "tv"	: "Tuvalu",
        "ug"	: "Uganda",
        "ua"	: "Ukraine",
        "ua-ru"	: "Ukraine - Russian",
        "ae"	: "United Arab Emirates",
        "gb"	: "United Kingdom",
        "us"	: "United States",
        "um"	: "United States Minor Outlying Islands",
        "uy"	: "Uruguay",
        "uz"	: "Uzbekistan",
        "vu"	: "Vanuatu",
        "ve"	: "Venezuela",
        "vn"	: "Viet Nam",
        "vg"	: "British Virgin Islands",
        "vi"	: "U.S. Virgin Islands",
        "wf"	: "Wallis and Futuna",
        "eh"	: "Western Sahara",
        "ye"	: "Yemen",
        "zm"	: "Zambia",
        "zw"	: "Zimbabwe"
    };

})();
var ATVI = ATVI || {};

(function($, ATVI) {

    var ld = ATVI.localeDetector = {},
        headers = [{id: 'x-activision-countrycode', type: 'country'}, {id: 'X-Activision-Regioncode', type: 'region'}];

    ld.country;
    ld.region;

    ld.requestXCode = function() {
		var request = new XMLHttpRequest();
		request.open('GET', window.location.href);
        request.onreadystatechange = function() {
            if(this.readyState == this.HEADERS_RECEIVED) {
                var i;
                for (i = 0; i < headers.length; i++) {
					var d = request.getResponseHeader(headers[i].id) || "";
                    ld[headers[i].type] = d.toLowerCase();
                }
                ld.fireEvent();
            }
        };
        request.send();
    };

    ld.fireEvent = function() {
        var e = new CustomEvent('localeDetectionReady');
		document.dispatchEvent(e);
    };

    ld.getCountry = function(cb) {
		if (ld.country && cb) cb(ld.country);
        else {
            document.addEventListener('localeDetectionReady', function() {
                cb(ld.country);
            });
        }
    };

    ld.getRegion = function(cb) {
        if (ld.region && cb) cb(ld.region);
        else {
            document.addEventListener('localeDetectionReady', function() {
                cb(ld.region);
            });
        }
    };

    ld.requestXCode();

})(jQuery, ATVI);
ATVI.modal = {};

(function($, ATVI) {

	var m = ATVI.modal;

    var class_bodyOpenModal = 'modal-open',
        class_modalOpen = 'active';

    var init = function() {
		m.$modals = $('.atvi-modal');
        m.addHandlers();
    };

    m.addHandlers = function() {
        m.$modals.each(function() {
			var $thisModal = $(this),
                $closeButton = $thisModal.find('.button.close, .close-button'),
                $bg = $thisModal.find('.background-container'),
                $handles = $closeButton.add($bg);
            $handles.on('click', function(e) {
				e.preventDefault();
                m.closeModal($thisModal);
            });
        });
    };

    m.openModal = function($wrapper, ms) {
        var $b = $('body'),
            ms = (ms) ? ms : 300,
            $modals = (m.$modals.length) ? m.$modals : $('.atvi-modal');
        if ($b.hasClass(class_bodyOpenModal)) {
        	$b.removeClass(class_bodyOpenModal);
			$modals.removeClass(class_modalOpen);
            setTimeout(function() {
				$b.addClass(class_bodyOpenModal);
                $wrapper.addClass(class_modalOpen);
            }, ms);
        } else {
			$b.addClass(class_bodyOpenModal);
            $wrapper.addClass(class_modalOpen);
        }
    };

    m.closeModal = function($wrapper) {
		var $b = $('body'),
            $modals = (m.$modals.length) ? m.$modals : $('.atvi-modal');
        $b.removeClass(class_bodyOpenModal);
        $modals.removeClass(class_modalOpen);
    };

    $(init);

})(jQuery, ATVI);

(function($, ATVI) {
    var ld = ATVI.localeDetector,
        noShowArr = ['us', 'ca', 'mx'],
        targetSitesArr = ['www.activision.com', 'www.callofduty.com', 'www.tonyhawkthegame.com', 'www.crashbandicoot.com','www.sekirothegame.com','www.spyrothedragon.com'],
        devSitesArr = [...targetSitesArr.map(site => 'preview'+site.substring(3))],
        hostname = window.location.hostname;


    var init = function() {
        if (ld.country && noShowArr.indexOf(ld.country) == -1) showEulaBanner();
        else {
            document.addEventListener('localeDetectionReady', function() {
                if (noShowArr.indexOf(ld.country) == -1) showEulaBanner();
            });
        }
    };

    var showEulaBanner = function() {

        if (typeof ATVI.utils.getCookie('atvi-eula-update') == 'undefined') {
			var $el = $('.eula-banner-module');
            if ($el.length) {
                $el.addClass('show');
                $el.find('.close-modal').on('click', function() {
					$el.removeClass('show');
                    setCookie('atvi-eula-update');
                });
            }
        }
    };

    var setCookie = function(cookieName) {
		ATVI.utils.setCookie(cookieName, true, {expireDate: (3600 * 24 * 365)});
    };

    // only use on select sites
    if (targetSitesArr.indexOf(hostname) > -1 || devSitesArr.indexOf(hostname) > -1) {
    	$(init);
    }

})(jQuery, ATVI);
