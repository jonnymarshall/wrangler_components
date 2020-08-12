// PLUGINS //
// ----

/*The MIT License (MIT)

Copyright (c) 2015 Maximilian Heinz <info@maximilian-heinz.de> (https://twitter.com/_meandmax_)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(e,t){var n=z,i=n.classNameActiveSlide;e.forEach(function(e,t){e.classList.contains(i)&&e.classList.remove(i)}),e[t].classList.add(i)}function i(e){var t=z,n=t.infinite,i=e.slice(0,n),o=e.slice(e.length-n,e.length);return i.forEach(function(e){var t=e.cloneNode(!0);B.appendChild(t)}),o.reverse().forEach(function(e){var t=e.cloneNode(!0);B.insertBefore(t,B.firstChild)}),B.addEventListener(O.transitionEnd,y),f.call(B.children)}function o(t,n,i){(0,l["default"])(e,t+".lory."+n,i)}function a(e,t,n){var i=B&&B.style;i&&(i[O.transition+"TimingFunction"]=n,i[O.transition+"Duration"]=t+"ms",O.hasTranslate3d?i[O.transform]="translate3d("+e+"px, 0, 0)":i[O.transform]="translate("+e+"px, 0)")}function d(e,t){var i=z,r=i.slideSpeed,s=i.slidesToScroll,d=i.infinite,l=i.rewind,c=i.rewindSpeed,u=i.ease,v=i.classNameActiveSlide,m=r,p=t?P+1:P-1,h=Math.round(M-S);o("before","slide",{index:P,nextSlide:p}),"number"!=typeof e&&(e=t?P+s:P-s),e=Math.min(Math.max(e,0),_.length-1),d&&void 0===t&&(e+=d);var E=Math.min(Math.max(_[e].offsetLeft*-1,h*-1),0);l&&Math.abs(N.x)===h&&t&&(E=0,e=0,m=c),a(E,m,u),N.x=E,_[e].offsetLeft<=h&&(P=e),!d||e!==_.length-d&&0!==e||(t&&(P=d),t||(P=_.length-2*d),N.x=_[P].offsetLeft*-1,A=function(){a(_[P].offsetLeft*-1,0,void 0)}),v&&n(f.call(_),P),o("after","slide",{currentSlide:P})}function c(){o("before","init"),O=(0,s["default"])(),z=r({},u["default"],t);var a=z,d=a.classNameFrame,l=a.classNameSlideContainer,c=a.classNamePrevCtrl,m=a.classNameNextCtrl,p=a.enableMouseEvents,b=a.classNameActiveSlide;j=e.getElementsByClassName(d)[0],B=j.getElementsByClassName(l)[0],k=e.getElementsByClassName(c)[0],T=e.getElementsByClassName(m)[0],N={x:B.offsetLeft,y:B.offsetTop},_=z.infinite?i(f.call(B.children)):f.call(B.children),v(),b&&n(_,P),k&&T&&(k.addEventListener("click",h),T.addEventListener("click",E)),j.addEventListener("touchstart",x),p&&(j.addEventListener("mousedown",x),j.addEventListener("click",g)),z.window.addEventListener("resize",C),o("after","init")}function v(){var e=z,t=e.infinite,i=e.ease,o=e.rewindSpeed,r=e.rewindOnResize,s=e.classNameActiveSlide;M=B.getBoundingClientRect().width||B.offsetWidth,S=j.getBoundingClientRect().width||j.offsetWidth,S===M&&(M=_.reduce(function(e,t){return e+t.getBoundingClientRect().width||t.offsetWidth},0)),r?P=0:(i=null,o=0),t?(a(_[P+t].offsetLeft*-1,0,null),P+=t,N.x=_[P].offsetLeft*-1):(a(_[P].offsetLeft*-1,o,i),N.x=_[P].offsetLeft*-1),s&&n(f.call(_),P)}function m(e){d(e)}function p(){return P-z.infinite||0}function h(){d(!1,!1)}function E(){d(!1,!0)}function b(){o("before","destroy"),j.removeEventListener(O.transitionEnd,y),j.removeEventListener("touchstart",x),j.removeEventListener("touchmove",L),j.removeEventListener("touchend",w),j.removeEventListener("mousemove",L),j.removeEventListener("mousedown",x),j.removeEventListener("mouseup",w),j.removeEventListener("mouseleave",w),j.removeEventListener("click",g),z.window.removeEventListener("resize",C),k&&k.removeEventListener("click",h),T&&T.removeEventListener("click",E),z.infinite&&Array.apply(null,Array(z.infinite)).forEach(function(){B.removeChild(B.firstChild),B.removeChild(B.lastChild)}),o("after","destroy")}function y(){A&&(A(),A=void 0)}function x(e){var t=z,n=t.enableMouseEvents,i=e.touches?e.touches[0]:e;n&&(j.addEventListener("mousemove",L),j.addEventListener("mouseup",w),j.addEventListener("mouseleave",w)),j.addEventListener("touchmove",L),j.addEventListener("touchend",w);var r=i.pageX,a=i.pageY;D={x:r,y:a,time:Date.now()},F=void 0,R={},o("on","touchstart",{event:e})}function L(e){var t=e.touches?e.touches[0]:e,n=t.pageX,i=t.pageY;R={x:n-D.x,y:i-D.y},"undefined"==typeof F&&(F=!!(F||Math.abs(R.x)<Math.abs(R.y))),!F&&D&&(e.preventDefault(),a(N.x+R.x,0,null)),o("on","touchmove",{event:e})}function w(e){var t=D?Date.now()-D.time:void 0,n=Number(t)<300&&Math.abs(R.x)>25||Math.abs(R.x)>S/3,i=!P&&R.x>0||P===_.length-1&&R.x<0,r=R.x<0;F||(n&&!i?d(!1,r):a(N.x,z.snapBackSpeed)),D=void 0,j.removeEventListener("touchmove",L),j.removeEventListener("touchend",w),j.removeEventListener("mousemove",L),j.removeEventListener("mouseup",w),j.removeEventListener("mouseleave",w),o("on","touchend",{event:e})}function g(e){R.x&&e.preventDefault()}function C(e){v(),o("on","resize",{event:e})}var N=void 0,M=void 0,S=void 0,_=void 0,j=void 0,B=void 0,k=void 0,T=void 0,O=void 0,A=void 0,P=0,z={};"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var D=void 0,R=void 0,F=void 0;return c(),{setup:c,reset:v,slideTo:m,returnIndex:p,prev:h,next:E,destroy:b}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.lory=o;var a=n(2),s=i(a),d=n(3),l=i(d),c=n(5),u=i(c),f=Array.prototype.slice},function(e,t){(function(e){"use strict";function n(){var t=void 0,n=void 0,i=void 0,o=void 0;return function(){var r=document.createElement("_"),a=r.style,s=void 0;""===a[s="webkitTransition"]&&(i="webkitTransitionEnd",n=s),""===a[s="transition"]&&(i="transitionend",n=s),""===a[s="webkitTransform"]&&(t=s),""===a[s="msTransform"]&&(t=s),""===a[s="transform"]&&(t=s),document.body.insertBefore(r,null),a[t]="translate3d(0, 0, 0)",o=!!e.getComputedStyle(r).getPropertyValue(t),document.body.removeChild(r)}(),{transform:t,transition:n,transitionEnd:i,hasTranslate3d:o}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}).call(t,function(){return this}())},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){var i=new a["default"](t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(i)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(4),a=i(r)},function(e,t){(function(t){function n(){try{var e=new i("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var i=t.CustomEvent;e.exports=n()?i:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={slidesToScroll:1,slideSpeed:300,rewindSpeed:600,snapBackSpeed:200,ease:"ease",rewind:!1,infinite:!1,classNameFrame:"js_frame",classNameSlideContainer:"js_slides",classNamePrevCtrl:"js_prev",classNameNextCtrl:"js_next",classNameActiveSlide:"active",enableMouseEvents:!1,window:window,rewindOnResize:!0}}])});
//# sourceMappingURL=lory.min.js.map



/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});


/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});



/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(a,n,l,h){!function(){for(var o=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!n.requestAnimationFrame;++i)n.requestAnimationFrame=n[t[i]+"RequestAnimationFrame"],n.cancelAnimationFrame=n[t[i]+"CancelAnimationFrame"]||n[t[i]+"CancelRequestAnimationFrame"];n.requestAnimationFrame||(n.requestAnimationFrame=function(t){var i=(new Date).getTime(),e=Math.max(0,16-(i-o)),s=n.setTimeout(function(){t(i+e)},e);return o=i+e,s}),n.cancelAnimationFrame||(n.cancelAnimationFrame=function(t){clearTimeout(t)})}();var d=!1;try{var t=Object.defineProperty({},"passive",{get:function(){d=!0}});n.addEventListener("test",null,t)}catch(t){}function p(t,i){var e=this;"object"==typeof i&&(delete i.refresh,delete i.render,a.extend(this,i)),this.$element=a(t),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var s=(this.position+"").toLowerCase().match(/\S+/g)||[];if(s.length<1&&s.push("center"),1==s.length&&s.push(s[0]),"top"!=s[0]&&"bottom"!=s[0]&&"left"!=s[1]&&"right"!=s[1]||(s=[s[1],s[0]]),this.positionX!==h&&(s[0]=this.positionX.toLowerCase()),this.positionY!==h&&(s[1]=this.positionY.toLowerCase()),e.positionX=s[0],e.positionY=s[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&this.iosDisabled)return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/)&&this.androidDisabled)return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=a("<div />").prependTo(this.mirrorContainer);var o=this.$element.find(">.parallax-slider"),r=!1;0==o.length?this.$slider=a("<img />").prependTo(this.$mirror):(this.$slider=o.prependTo(this.$mirror),r=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){e.naturalHeight&&e.naturalWidth||(e.naturalHeight=this.naturalHeight||this.height||1,e.naturalWidth=this.naturalWidth||this.width||1),e.aspectRatio=e.naturalWidth/e.naturalHeight,p.isSetup||p.setup(),p.sliders.push(e),p.isFresh=!1,p.requestRender()}),r||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||0<o.length)&&this.$slider.trigger("load")}a.extend(p.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,iosDisabled:!0,androidFix:!0,androidDisabled:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=p.winHeight,e=p.docHeight,s=Math.min(this.boxOffsetTop,e-i),o=Math.max(this.boxOffsetTop+this.boxHeight-i,0),r=this.boxHeight+(s-o)*(1-this.speed)|0,h=(this.boxOffsetTop-s)*(1-this.speed)|0;r*this.aspectRatio>=this.boxWidth?(this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=h,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-r,"top"==this.positionY?this.offsetBaseTop=h:"bottom"==this.positionY?this.offsetBaseTop=h-t:isNaN(this.positionY)?this.offsetBaseTop=h-t/2|0:this.offsetBaseTop=h+Math.max(this.positionY,-t))},render:function(){var t=p.scrollTop,i=p.scrollLeft,e=this.overScrollFix?p.overScroll:0,s=t+p.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),a.extend(p,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){function t(){p.winHeight=o.height(),p.winWidth=o.width(),p.docHeight=s.height(),p.docWidth=s.width()}function i(){var t=o.scrollTop(),i=p.docHeight-p.winHeight,e=p.docWidth-p.winWidth;p.scrollTop=Math.max(0,Math.min(i,t)),p.scrollLeft=Math.max(0,Math.min(e,o.scrollLeft())),p.overScroll=Math.max(t-i,Math.min(t,0))}var e=this,s=a(l),o=a(n),r=this.scrollListener=function(){i(),p.requestRender()};o.on("resize.px.parallax load.px.parallax",function(){t(),e.refresh(),p.isFresh=!1,p.requestRender()}).on("scroll.px.parallax load.px.parallax",r),function(t,i,e){d?t.addEventListener(i,e,{passive:!0}):t.addEventListener(i,e)}(n,"touchmove",r),t(),i(),this.isReady=!0;var h=-1;!function t(){if(h==n.pageYOffset)return n.requestAnimationFrame(t),!1;h=n.pageYOffset,e.render(),n.requestAnimationFrame(t)}()}},configure:function(t){"object"==typeof t&&(delete t.refresh,delete t.render,a.extend(this.prototype,t))},refresh:function(){a.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),a.each(this.sliders,function(){this.render()})},requestRender:function(){this.render(),this.isBusy=!1},destroy:function(t){var i,e=a(t).data("px.parallax");for(e.$mirror.remove(),i=0;i<this.sliders.length;i+=1)this.sliders[i]==e&&this.sliders.splice(i,1);a(t).data("px.parallax",!1),0===this.sliders.length&&(a(n).off("scroll.px.parallax resize.px.parallax load.px.parallax"),function(t,i,e){t.removeEventListenr(i,e)}(n,"touchmove",this.scrollListener),this.isReady=!1,p.isSetup=!1)}});var i=a.fn.parallax;a.fn.parallax=function(e){return this.each(function(){var t=a(this),i="object"==typeof e&&e;this==n||this==l||t.is("body")?p.configure(i):t.data("px.parallax")?"object"==typeof e&&a.extend(t.data("px.parallax"),i):(i=a.extend({},t.data(),i),t.data("px.parallax",new p(this,i))),"string"==typeof e&&("destroy"==e?p.destroy(this):p[e]())})},a.fn.parallax.Constructor=p,a.fn.parallax.noConflict=function(){return a.fn.parallax=i,this},a(function(){a('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);



// FUNCTIONS //
// ----

// slider
window.loryHelpers = {
  navigationDots: function($sliderBox, sliderInstance, sliderSettings) {
    var dots = Array.prototype.slice.call(
      $sliderBox.querySelectorAll('.js_dc_slider_dot'),
      0
    );

    var attachNavEvents = function() {
      dots.forEach(function($dot, ind) {
        if (ind === 0) {
          $dot.classList.add('active');
        }
        $dot.addEventListener('click', function(evt) {
          sliderInstance.slideTo(ind);
        });
      });
    };

    var selectActiveDot = function(evt) {
      dots.forEach(function($dot, ind) {
        $dot.classList.remove('active');
      });

      var currentSlide = sliderSettings.infinite
        ? evt.detail.currentSlide - 1
        : evt.detail.currentSlide;
      dots[currentSlide].classList.add('active');
    };

    var resetToFirst = function() {
      dots.forEach(function($dot, ind) {
        ind === 0
          ? $dot.classList.add('active')
          : $dot.classList.remove('active');
      });
    };

    attachNavEvents();
    $sliderBox.addEventListener('after.lory.slide', selectActiveDot);
    $sliderBox.addEventListener('on.lory.resize', resetToFirst);
  },
  autoPlay: function($sliderBox) {
    // To decide
  },
  disableNavButtons: function($sliderBox, sliderInstance) {
    var $slides = Array.prototype.slice.call(
      $sliderBox.querySelectorAll('.js_dc_slide'),
      0
    );
    var $prevButton = $sliderBox.querySelector('.js_prev');
    var $nextButton = $sliderBox.querySelector('.js_next');
    var disabledClass = 'ctrl-disabled';

    var navButtonsBehave = function(evt) {
      var slideIndex = sliderInstance.returnIndex();
      if (slideIndex === 0) {
        $prevButton.classList.add(disabledClass);
        $nextButton.classList.remove(disabledClass);
      } else if (slideIndex === $slides.length - 1) {
        $prevButton.classList.remove(disabledClass);
        $nextButton.classList.add(disabledClass);
      } else {
        $prevButton.classList.remove(disabledClass);
        $nextButton.classList.remove(disabledClass);
      }
    };

    if (sliderInstance.returnIndex() === 0) {
      $prevButton.classList.add(disabledClass);
    }

    $sliderBox.addEventListener('after.lory.slide', navButtonsBehave);
    $sliderBox.addEventListener('on.lory.resize', navButtonsBehave);
  },
  initSliders: function($sliders) {
    var self = this;
    $sliders = Array.prototype.slice.call($sliders, 0);

    $sliders.forEach(function($slider, i) {
      var infinite = $slider.getAttribute('data-infinite') === 'true';
      var navDots = $slider.getAttribute('data-navigation') === 'true';
      var sliderSettings = {};
      if (infinite) {
        sliderSettings.infinite = 1;
      }

      var slider = lory($slider, sliderSettings);

      if (!infinite) {
        self.disableNavButtons($slider, slider);
      }

      if (navDots) {
        self.navigationDots($slider, slider, sliderSettings);
      }
    });
  }
};

loryHelpers.initSliders(document.querySelectorAll(".js_slider"));


jQuery(function() {

  // banner grid slider for mobile
  var $banner_grid_slider = jQuery('.o-dc-banner-grid-slider');


  var banner_grid_slider_settings = {
     slide: '.o-dc-banner-grid-item',
       dots: true,
       infinite: false,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: true,
       arrows: false,
       responsive: [{

           breakpoint: 1023,
           settings: "unslick"

         }]
       
  }

  // card 2 slider for mobile/tablet
  var $card2_slider = jQuery('.o-dc-card2-slider');

  var card2_slider_settings = {
     slide: '.o-dc-card2-slider-item',
       dots: true,
       infinite: false,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: true,
       arrows: false,
       responsive: [{

           breakpoint: 767,
           settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }

         },
         {

          breakpoint: 1023,
          settings: "unslick"

        }
         ]
       
  }

  // card 3 slider
  var $card3_slider = jQuery('.o-dc-card3-slider');


  var slideritems = jQuery('.o-dc-card3-slider-item').length;


  var mobslidesToShow = 2;
  var tabslidesToShow = 3;
  var deskslidesToShow = 4;
  var largedeskslidesToShow = 5;
  var xlargedeskslidesToShow = 6;

  var mobslidesToScroll = 2;
  var tabslidesToScroll = 3;
  var deskslidesToScroll = 4;


  if(slideritems == 1){
  	
  	mobslidesToShow = 1;
  	tabslidesToShow = 1;
  	deskslidesToShow = 1;
  	largedeskslidesToShow = 1;
  	xlargedeskslidesToShow = 1;

  	mobslidesToScroll = 1;
  	tabslidesToScroll = 1;
  	deskslidesToScroll = 1;

  }

  if(slideritems == 2){
  	
  	tabslidesToShow = 2;
  	deskslidesToShow = 2;
  	largedeskslidesToShow = 2;
  	xlargedeskslidesToShow = 2;

  	tabslidesToScroll = 2;
  	deskslidesToScroll = 2;

  }

  if(slideritems == 3){
  	
  	deskslidesToShow = 3;
  	largedeskslidesToShow = 3;
  	xlargedeskslidesToShow = 3;

  	deskslidesToScroll = 3;

  }

  if(slideritems == 4){
  	
  	largedeskslidesToShow = 4;
  	xlargedeskslidesToShow = 4;

  }


  if(slideritems == 5){
  	
  	xlargedeskslidesToShow = 5;

  }



  var card3_slider_settings = {
     slide: '.o-dc-card3-slider-item',
       dots: true,
       infinite: false,
       speed: 600,
       slidesToShow: mobslidesToShow,
       slidesToScroll: mobslidesToScroll,
       mobileFirst: true,
       arrows: false,
       responsive: [{

           breakpoint: 767,
           settings: {
              slidesToShow: tabslidesToShow,
              slidesToScroll: tabslidesToScroll
            }

         },
         {

          breakpoint: 1023,
           settings: {
              slidesToShow: deskslidesToShow,
              slidesToScroll: deskslidesToShow
            }

        },
         {

          breakpoint: 1119,
           settings: {
              slidesToShow: largedeskslidesToShow,
              dots: false,
              arrows: true,
              slidesToScroll: 1
            }

        },
         {

          breakpoint: 1439,
           settings: {
              slidesToShow: xlargedeskslidesToShow,
              dots: false,
              arrows: true,
              slidesToScroll: 1
            }

        }
      ]
       
  }


  // card 4 slider for mobile/tablet
  var $card4_slider = jQuery('.o-dc-card4-slider');

  var card4_slider_settings = {
     slide: '.o-dc-card4-slider-item',
       dots: true,
       infinite: false,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: true,
       arrows: false,
       responsive: [{

           breakpoint: 767,
           settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }

         },
         {

          breakpoint: 1023,
          settings: "unslick"

        }
         ]
       
  }


  // card image slider
  var $card1_slider = jQuery('.o-dc-card1-slider .amp-dc-image');

  var card1_slider_settings = {
       dots: true,
       infinite: false,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: true,
       arrows: false
       
  }	

  // new banner slider
  var $banner_slider = jQuery('.o-dc-slider');
  var $banner_slider_autoplay = ($banner_slider.attr("data-o-dc-autoplay") == 'true');


  var banner_slider_settings = {
  	   slide: '.o-dc-slider-item',
       dots: true,
       infinite: true,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: true,
       arrows: false,
       autoplay: $banner_slider_autoplay,
       responsive: [{

           breakpoint: 1023,
           settings: {
              arrows: true
            }

         }
       ]
  }

 // new banner slider - stack on mobile version
  var $banner_slider_stack_mobile = jQuery('.o-dc-slider-stack-on-mobile');
  var $banner_slider_stack_mobile_autoplay = ($banner_slider_stack_mobile.attr("data-o-dc-autoplay") == 'true');

  var banner_slider_stack_mobile_settings = {
  	   slide: '.o-dc-slider-item',
       dots: true,
       infinite: true,
       speed: 600,
       slidesToShow: 1,
       slidesToScroll: 1,
       mobileFirst: false,
       arrows: true,
       autoplay: $banner_slider_stack_mobile_autoplay,
       responsive: [{

           breakpoint: 768,
           settings: "unslick"

         }
       ]
  }

  // new banner slider
  if($banner_slider.length > 0){

  	 $banner_slider.slick(banner_slider_settings);
  }

  // new banner slider - stack on mobile version
  if($banner_slider_stack_mobile.length > 0){

  	 $banner_slider_stack_mobile.slick(banner_slider_stack_mobile_settings);
  }


  // equal heights on card
  jQuery('.o-dc-text-panel').matchHeight();


  // equal heights on collection title, in block
  jQuery('.o-dc-collection-item-title').matchHeight();


  // banner grid
  if(jQuery(window).width() < 1024 && !$banner_grid_slider.hasClass('slick-initialized')) {
    jQuery('.o-dc-banner-grid-slider .o-dc-banner-grid-item').unwrap();
   }


  if($banner_grid_slider.length > 0){

    $banner_grid_slider.each(function (idx, item) {


      jQuery(this).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          
        // equal heights on banner grid text panel
        jQuery('.o-dc-banner-grid-slider .o-dc-banner-grid-item .amp-dc-banner-info-wrap').matchHeight();

      });


        jQuery(this).slick(banner_grid_slider_settings);

        jQuery(this).on('destroy', function(event, slick, currentSlide, nextSlide){
            
          jQuery('.o-dc-banner-grid-slider .o-dc-banner-grid-item:even').each(function() {
              jQuery(this).next().addBack().wrapAll('<div class="cell large-6"></div>');
            });
   

        });

    });

  }

	// card1 slider
	if($card1_slider.length > 0){

		 $card1_slider.slick(card1_slider_settings);
	}


  // card2 slider
  if($card2_slider.length > 0){
  	 $card2_slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
  	     
  	   // equal heights on card
  	     jQuery('.o-dc-text-panel').matchHeight();

  	 });
	 $card2_slider.slick(card2_slider_settings);
  }

  // card3 slider
  if($card3_slider.length > 0){
  	 $card3_slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
  	     
  	   // equal heights on card
  	     jQuery('.o-dc-text-panel').matchHeight();

  	 });
  	 $card3_slider.slick(card3_slider_settings);
  }

  // card4 slider
  if($card4_slider.length > 0){
  	 $card4_slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
  	     
  	   // equal heights on card
  	     jQuery('.o-dc-text-panel').matchHeight();

  	 });
  	 $card4_slider.slick(card4_slider_settings);
  }

  	function fade_home_top() {
          window_scroll = $(this).scrollTop();
     		$(".o-dc-banner-cta-scroll").css({
  			  'opacity' : 1-(window_scroll/100)
      	});
  	}
  	$(window).scroll(function() { fade_home_top(); });

  	setInterval(function() {
		$('.o-dc-banner-cta-scroll').toggleClass('bounce');
	}, 2000);

	$('.js-scrollto').bind('click',function(event){
	  
		event.preventDefault();

		$('body, html').stop().animate({scrollTop:$(this).parent().next().offset().top-40}, 500);
		
	  						    	  			    
  });

});


//smart resize
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// smart resize usage:
jQuery(window).smartresize(function(){

	// banner grid slider for mobile
	var $banner_grid_slider = jQuery('.o-dc-banner-grid-slider');


	var banner_grid_slider_settings = {
	   slide: '.o-dc-banner-grid-item',
	     dots: true,
	     infinite: false,
	     speed: 600,
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     mobileFirst: true,
	     arrows: false,
	     responsive: [{

	         breakpoint: 1023,
	         settings: "unslick"

	       }]
	     
	}

	// card 2 slider for mobile/tablet
	var $card2_slider = jQuery('.o-dc-card2-slider');

	var card2_slider_settings = {
	   slide: '.o-dc-card2-slider-item',
	     dots: true,
	     infinite: false,
	     speed: 600,
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     mobileFirst: true,
	     arrows: false,
	     responsive: [{

	         breakpoint: 767,
	         settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }

	       },
	       {

	        breakpoint: 1023,
	        settings: "unslick"

	      }
	       ]
	     
	}

	// card 3 slider
	var $card3_slider = jQuery('.o-dc-card3-slider');


	var slideritems = jQuery('.o-dc-card3-slider-item').length;


	var mobslidesToShow = 2;
	var tabslidesToShow = 3;
	var deskslidesToShow = 4;
	var largedeskslidesToShow = 5;
	var xlargedeskslidesToShow = 6;

	var mobslidesToScroll = 2;
	var tabslidesToScroll = 3;
	var deskslidesToScroll = 4;


	if(slideritems == 1){
		
		mobslidesToShow = 1;
		tabslidesToShow = 1;
		deskslidesToShow = 1;
		largedeskslidesToShow = 1;
		xlargedeskslidesToShow = 1;

		mobslidesToScroll = 1;
		tabslidesToScroll = 1;
		deskslidesToScroll = 1;

	}

	if(slideritems == 2){
		
		tabslidesToShow = 2;
		deskslidesToShow = 2;
		largedeskslidesToShow = 2;
		xlargedeskslidesToShow = 2;

		tabslidesToScroll = 2;
		deskslidesToScroll = 2;

	}

	if(slideritems == 3){
		
		deskslidesToShow = 3;
		largedeskslidesToShow = 3;
		xlargedeskslidesToShow = 3;

		deskslidesToScroll = 3;

	}

	if(slideritems == 4){
		
		largedeskslidesToShow = 4;
		xlargedeskslidesToShow = 4;

	}


	if(slideritems == 5){
		
		xlargedeskslidesToShow = 5;

	}



	var card3_slider_settings = {
	   slide: '.o-dc-card3-slider-item',
	     dots: true,
	     infinite: false,
	     speed: 600,
	     slidesToShow: mobslidesToShow,
	     slidesToScroll: mobslidesToScroll,
	     mobileFirst: true,
	     arrows: false,
	     responsive: [{

	         breakpoint: 767,
	         settings: {
	            slidesToShow: tabslidesToShow,
	            slidesToScroll: tabslidesToScroll
	          }

	       },
	       {

	        breakpoint: 1023,
	         settings: {
	            slidesToShow: deskslidesToShow,
	            slidesToScroll: deskslidesToShow
	          }

	      },
	       {

	        breakpoint: 1119,
	         settings: {
	            slidesToShow: largedeskslidesToShow,
	            dots: false,
	            arrows: true,
	            slidesToScroll: 1
	          }

	      },
	       {

	        breakpoint: 1439,
	         settings: {
	            slidesToShow: xlargedeskslidesToShow,
	            dots: false,
	            arrows: true,
	            slidesToScroll: 1
	          }

	      }
	    ]
	     
	}


	// card 4 slider for mobile/tablet
	var $card4_slider = jQuery('.o-dc-card4-slider');

	var card4_slider_settings = {
	   slide: '.o-dc-card4-slider-item',
	     dots: true,
	     infinite: false,
	     speed: 600,
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     mobileFirst: true,
	     arrows: false,
	     responsive: [{

	         breakpoint: 767,
	         settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }

	       },
	       {

	        breakpoint: 1023,
	        settings: "unslick"

	      }
	       ]
	     
	}


	// card image slider
	var $card1_slider = jQuery('.o-dc-card1-slider .amp-dc-image');

	var card1_slider_settings = {
	     dots: true,
	     infinite: false,
	     speed: 600,
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     mobileFirst: true,
	     arrows: false
	     
	}	


	// new banner slider - stack on mobile version
	 var $banner_slider_stack_mobile = jQuery('.o-dc-slider-stack-on-mobile');
	 var $banner_slider_stack_mobile_autoplay = ($banner_slider_stack_mobile.attr("data-o-dc-autoplay") == 'true');

	 var banner_slider_stack_mobile_settings = {
	 	   slide: '.o-dc-slider-item',
	      dots: true,
	      infinite: true,
	      speed: 600,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      mobileFirst: false,
	      arrows: true,
	      autoplay: $banner_slider_stack_mobile_autoplay,
	      responsive: [{

	          breakpoint: 768,
	          settings: "unslick"

	        }
	      ]
	 }



  if(jQuery(window).width() < 1024 && !$banner_grid_slider.hasClass('slick-initialized')) {
   
    // banner grid
    jQuery('.o-dc-banner-grid-slider .o-dc-banner-grid-item').unwrap();

    $banner_grid_slider.slick(banner_grid_slider_settings);

   }


   if(jQuery(window).width() < 1024 && !$card2_slider.hasClass('slick-initialized')) {
    
     // card2 slider
     $card2_slider.slick(card2_slider_settings);

    }

    if(jQuery(window).width() < 1024 && !$card4_slider.hasClass('slick-initialized')) {
     
      // card4 slider
      $card4_slider.slick(card4_slider_settings);

     }

     if(jQuery(window).width() > 767 && !$banner_slider_stack_mobile.hasClass('slick-initialized')) {
      
       // new banner slider - stack on mobile version
       $banner_slider_stack_mobile.slick(banner_slider_stack_mobile_settings);

      }


});
