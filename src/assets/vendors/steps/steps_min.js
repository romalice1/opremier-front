(function(d){function e(a,c){this.config=d.extend({},p,c);this.element=a;this.steps=a.find(this.config.stepElement);this.config.showLegend||this.element.addClass("sf-hide-legend");this.btnFinishTmp=this.config.finishBtn;this.btnPrevTmp=this.config.prevBtn;this.btnNextTmp=this.config.nextBtn;"undefined"===typeof(document.body||document.documentElement).style.transition&&"fade"!=this.config.transition&&(this.config.duration=0);this.viewPort;this.navWrap;this.config.startStep>=this.steps.length&&(this.config.startStep=
this.steps.length-1);this.stepActive=this.config.startStep;this.labels=[];this.themes={none:"t0",sun:"t1",sea:"t2",sky:"t3",simple:"t4",circle:"t5"};this.init();a.trigger("sf-loaded");return this}var p={duration:1E3,transition:"slide",linkNav:!0,showNav:!0,showNavNumbers:!0,showButtons:!0,showLegend:!0,nextBtn:d('<a class="next-btn sf-right sf-btn" href="#">NEXT</a>'),prevBtn:d('<a class="prev-btn sf-left sf-btn" href="#">PREV</a>'),finishBtn:d('<input class="finish-btn sf-right sf-btn" type="submit" value="FINISH"/>'),
onNext:function(a,c){},onPrev:function(a,c){},onFinish:function(a,c){},onSlideChanged:function(a,c){},startStep:0,rtl:!1,height:"first",theme:"sea",markPrevSteps:!1,stepElement:"fieldset",stepNameElement:"legend",disableEnter:!1,smallMobileNav:!0,debug:!1,spinner:'<div class="spinner"><div class="ball-1"></div><div class="ball-2"></div><div class="ball-3"></div></div>'};e.prototype.init=function(){var a=this;a.element.append(d("<div>").addClass("sf-viewport"));a.viewPort=d(".sf-viewport",a.element);
a.element.wrap(d("<div>",{"class":"sf-wizard clearfix"+(a.config.rtl?" sf-rtl":""),id:a.element.attr("id")+"-box"}));a.wizard=a.element.parent();a.wizard.addClass("sf-"+a.themes[a.config.theme]+" sf-"+a.config.transition+" sf-s-"+a.config.startStep);/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?a.wizard.addClass("sf-mob"):a.wizard.addClass("sf-nomob");a.config.showNavNumbers||a.wizard.addClass("sf-nonumbers");d(a.viewPort).append(d("<div>",{"class":"sf-fieldwrap clearfix",
id:a.element.attr("id")+"-field"}));a.fieldWrap=d(".sf-fieldwrap",a.element);a.fieldWrap.css({transition:"transform "+a.config.duration+"ms"});var c=d("<div>",{"class":"sf-controls clearfix"});"bottom"==a.config.showNav?c.insertBefore(d(".sf-viewport",a.wizard)):a.element.append(c);a.controls=d(".sf-controls",a.element);"circle"==a.config.theme&&a.viewPort.wrap(d("<div>",{"class":"sf-viewport-out"}));a.config.showButtons||a.controls.addClass("sf-hide-buttons");d(a.config.stepNameElement,a.element).addClass("sf-step-name");
a.touch={start:0,movex:0,move:0,index:0,longTouch:void 0,offset:0,navWidth:0,diff:0};!1!==a.config.showNav&&(a.initNav(),"bottom"==a.config.showNav||"top"==a.config.showNav||1==a.config.showNav)&&(a.initTouchNav(),setTimeout(function(){d(".sf-nav").css({clear:"both"})},3E3));a.steps.each(function(c){a.wrapStep(this,c)});a.initBtnFinish(a.config.startStep);a.initBtnNext(a.config.startStep);a.initBtnPrev(a.config.startStep);a.checkBtns();a.setProportion();d(window).resize(function(){a.careNav(a.stepActive,
a.stepActive);a.setProportion()});a.addBtnsClick();c="";"string"===typeof a.config.disableEnter&&(c=a.config.disableEnter.split(",").map(function(a){return":not("+a.trim()+")"}).join(""));a.element.on("keydown",":input:not(textarea)"+c,function(c){13==(c.keyCode||c.which)&&(c.preventDefault(),!1===a.config.disableEnter&&a.next())})};e.prototype.initTouchNav=function(){var a=this;d(".sf-nav",a.wizard).on("touchstart",function(c){a.touch=a.touch;a.touch.longTouch=!1;d(".sf-nav",a.navWrap).css({transition:"none"});
a.touch.start=c.originalEvent.touches[0].pageX});d(".sf-nav",a.wizard).on("touchmove",function(c){a.touch=a.touch;a.touch.movex=c.originalEvent.touches[0].pageX;a.touch.move=a.touch.start-a.touch.movex;a.touch.diff=parseInt(a.touch.offset,10)-a.touch.move;0<a.touch.diff&&(a.touch.diff=0);a.touch.diff<-a.touch.navWidth&&(a.touch.diff=-a.touch.navWidth);prop="translateX("+a.touch.diff+"px)";d(".sf-nav",a.navWrap).css({"-webkit-transform":prop,"-moz-transform":prop,"-ms-transform":prop,"-o-transform":prop,
transform:prop})});d(".sf-nav",a.wizard).on("touchend",function(c){a.touch.offset=a.touch.diff;d(".sf-nav",a.navWrap).css({transition:"all "+a.config.duration+"ms"})})};e.prototype.step=function(a){return d(".sf-step",this.wizard).filter(function(){return d(this).data("step")==a})};e.prototype.navStep=function(a){return d(".sf-nav-step",this.wizard).filter(function(){return d(this).data("step")==a})};e.prototype.wrapStep=function(a,c){d(a).addClass("sf-step-el");var f=d("<div>",{"class":"sf-step"}).data("step",
c);c==this.config.startStep&&f.addClass("sf-step-front");d(a).wrap(f).parent().appendTo(this.fieldWrap)};e.prototype.hideStep=function(a,c,d){if(a==this.stepActive)return!1;"next"==a&&this.step(this.stepActive+1).length&&(a=this.stepActive+1);"prev"==a&&this.step(this.stepActive-1).length&&(a=this.stepActive-1);!1===c?this.step(a).removeClass("sf-step-disabled sf-step-hidden"):this.step(a).addClass("sf-step-disabled sf-step-hidden");this.stepNavAnimate(a,c,d);this.checkBtns()};e.prototype.stepNavAnimate=
function(a,c,d){var b=this,g=b.navStep(a);!1===c?(g.css("display","none"),g.removeClass("sf-nav-step-disabled sf-nav-step-hidden"),"circle"==b.config.theme&&g.css("display",""),g.fadeIn(500),"undefined"!==typeof d&&!0!==d||b.reindexNavNum()):(g.addClass("sf-nav-step-hidden"),"circle"==b.config.theme&&g.addClass("sf-nav-step-disabled sf-nav-step-hidden").css("display",""),g.fadeOut(500,function(){g.addClass("sf-nav-step-disabled");"undefined"!==typeof d&&!0!==d||b.reindexNavNum()}));b.careNav(b.stepActive,
b.stepActive)};e.prototype.reindexNavNum=function(){d(".sf-nav-step",this.wizard).not(".sf-nav-step-hidden").each(function(a){d(this).find(".sf-nav-number-inner").text(a+1);9<a+1&&d(this).addClass("sf-li-numbers-two")})};e.prototype.addStep=function(a,c,f){var b=this;a=parseInt(a);var g=b.config.stepElement.match(/(^\.)?(.+)/),e;"undefined"!==typeof g[1]&&(e=d("<div>",{"class":g[1]}));"undefined"===typeof g[1]&&(e=d("<"+g[2]+">"));e.html(c);d(".sf-step",b.wizard).each(function(){var b=d(this).data("step");
b>=a&&d(this).data("step",++b)});d(".sf-nav-step",b.wizard).each(function(){var c=d(this).data("step");c>=a&&(d(this).data("step",++c),b.stepActive+1!=c&&d(this).removeClass("sf-active"))});a<=b.stepActive&&b.stepActive++;b.config.startStep=b.stepActive;b.wrapStep(e,a);b.wrapNavItem(b.step(a),a);b.stepNavAnimate(a,!1,f);b.addNavClick();b.checkBtns();b.setProportion()};e.prototype.removeStep=function(a,c){var f=this,b=f.step(a),g=f.navStep(a);if(f.stepActive==a)return f.log("You can't remove active step"),
!1;b.remove();f.stepNavAnimate(a,!0,c);setTimeout(function(){g.remove()},500);d(".sf-step",f.wizard).each(function(){var b=d(this).data("step");b>=a&&d(this).data("step",--b)});d(".sf-nav-step",f.wizard).each(function(){var b=d(this).data("step");b>=a&&(d(this).data("step",--b),f.stepActive!=b&&d(this).removeClass("sf-active"))});f.stepActive>a&&(f.stepActive--,f.navStep(f.stepActive).addClass("sf-active"));f.config.startStep=f.stepActive;f.checkBtns();f.setProportion()};e.prototype.checkBtns=function(){!1!==
this.checkNext()?this.btnNext.fadeIn(100):this.btnNext.fadeOut(0);!1!==this.checkPrev()?this.btnPrev.fadeIn(100):this.btnPrev.fadeOut(100);!1===this.checkNext()?this.btnFinish.fadeIn(100):this.btnFinish.fadeOut(0);this.btnNext.hasClass("sf-btn-disabled")?this.addClickNext(!1):this.addClickNext();this.btnPrev.hasClass("sf-btn-disabled")?this.addClickPrev(!1):this.addClickPrev();this.btnFinish.hasClass("sf-btn-disabled")?this.addClickFinish(!1):this.addClickFinish()};e.prototype.checkNext=function(){var a=
this,c=99;d(".sf-step",a.wizard).each(function(){var f=d(this);a.stepActive<f.data("step")&&!f.hasClass("sf-step-disabled")&&f.data("step")<c&&(c=f.data("step"))});return 99>c?c:!1};e.prototype.checkPrev=function(){var a=this;if(1>a.stepActive)return!1;var c=0;d(".sf-step",a.wizard).each(function(){var f=d(this);a.stepActive>f.data("step")&&!f.hasClass("sf-step-disabled")&&f.data("step")>c&&(c=f.data("step"))});return 0<=c?c:!1};e.prototype.touchFix=function(a){var c=d(a).next();d(a).remove();setTimeout(function(){c.before(a)},
1)};e.prototype.addBtnsClick=function(){this.addClickNext();this.addClickPrev();this.addClickFinish()};e.prototype.addClickNext=function(a){var c=this;c.touchFix(c);d(c.wizard).off("click",".next-btn");d(c.wizard).on("click",".next-btn",function(d,b){"undefined"!==typeof a&&!0!==a||c.goTo("next",b);d.preventDefault()})};e.prototype.addClickPrev=function(a){var c=this;d(c.wizard).off("click",".prev-btn");d(c.wizard).on("click",".prev-btn",function(d,b){"undefined"!==typeof a&&!0!==a||c.goTo("prev",
b);d.preventDefault()})};e.prototype.addClickFinish=function(a){var c=this;d(c.wizard).off("click",".finish-btn");d(c.wizard).on("click",".finish-btn",function(d,b){"undefined"!==typeof a&&!0!==a||c.finish(b);d.preventDefault()})};e.prototype.addSpinner=function(a,c){!1===c?("next"==a&&this.nextLabel(this.labels.next),"prev"==a&&this.prevLabel(this.labels.prev),"finish"==a&&this.finishLabel(this.labels.finish),isNaN(a)||this.navLabel(a,this.labels[a])):("next"==a&&(this.labels.next=this.nextLabel(),
this.nextLabel(this.config.spinner)),"prev"==a&&(this.labels.prev=this.prevLabel(),this.prevLabel(this.config.spinner)),"finish"==a&&(this.labels.finish=this.finishLabel(),this.finishLabel(this.config.spinner)),isNaN(a)||(this.labels[a]=this.navLabel(a),this.navLabel(a,this.config.spinner)))};e.prototype.isAnimating=function(){return this.wizard.hasClass("sf-animating")?!0:!1};e.prototype.addAnimating=function(){this.wizard.addClass("sf-animating")};e.prototype.removeAnimating=function(){this.wizard.removeClass("sf-animating")};
e.prototype.stopTransitionEffect=function(){this.element.find(".sf-fieldwrap").removeAttr("style");this.element.find(".sf-fieldwrap").attr("style","")};e.prototype.startTransitionEffect=function(a){var c=this;setTimeout(function(){c.element.find(".sf-fieldwrap").css({transition:"transform "+c.config.duration+"ms"});a&&c.removeAnimating()},150)};e.prototype.markStep=function(a,c){0==c?this.navStep(a).removeClass("sf-nav-mark-step"):this.navStep(a).addClass("sf-nav-mark-step")};e.prototype.disableStep=
function(a,c){"next"==a&&this.step(this.stepActive+1).length&&(a=this.stepActive+1);"prev"==a&&this.step(this.stepActive-1).length&&(a=this.stepActive-1);!1===c?(this.step(a).removeClass("sf-step-disabled"),this.navStep(a).removeClass("sf-nav-step-disabled")):(this.step(a).addClass("sf-step-disabled"),this.navStep(a).addClass("sf-nav-step-disabled"));this.checkBtns()};e.prototype.activeStep=function(a,c){!1===c?this.navStep(a).addClass("sf-nav-unlink").removeClass("sf-nav-link"):this.navStep(a).addClass("sf-nav-link").removeClass("sf-nav-unlink");
this.addNavClick()};e.prototype.activeNext=function(a,c){0==a?(this.btnNext.addClass("sf-btn-disabled"),0==c&&this.activeFinish(!1)):(this.btnNext.removeClass("sf-btn-disabled"),"undefined"!==typeof c&&1!=c||this.activeFinish());this.checkBtns()};e.prototype.activePrev=function(a){0==a?this.btnPrev.addClass("sf-btn-disabled"):this.btnPrev.removeClass("sf-btn-disabled");this.checkBtns()};e.prototype.activeFinish=function(a){0==a?this.btnFinish.addClass("sf-btn-disabled"):this.btnFinish.removeClass("sf-btn-disabled");
this.checkBtns()};e.prototype.navLabel=function(a,c){if("undefined"===typeof c)return this.navStep(a).find(".sf-nav-subtext").html();this.navStep(a).find(".sf-nav-subtext").html(c);this.setNavWidth()};e.prototype.navNumber=function(a,c){this.navStep(a).find(".sf-nav-number-inner").html(c)};e.prototype.nextLabel=function(a){if("undefined"===typeof a)return this.btnNext.html();this.btnNext.html(a)};e.prototype.prevLabel=function(a){if("undefined"===typeof a)return this.btnPrev.html();this.btnPrev.html(a)};
e.prototype.finishLabel=function(a){if("undefined"===typeof a)return this.btnFinish.is(":input")?this.btnFinish.val():this.btnFinish.html();this.btnFinish.is(":input")?this.btnFinish.val(a):this.btnFinish.html(a)};e.prototype.getActualStep=function(){return this.stepActive};e.prototype.initNav=function(){var a=this,c=d("<div>").addClass("sf-nav-wrap clearfix");a.config.smallMobileNav&&c.addClass("sf-nav-smmob");var f=d("<ul>").addClass("sf-nav clearfix");c.append(f);"bottom"==a.config.showNav?this.element.after(c):
this.element.before(c);this.navWrap=d(".sf-nav-wrap",a.wizard);this.steps.each(function(b){a.wrapNavItem(this,b)});this.addNavClick();this.careNav(this.stepActive,this.stepActive)};e.prototype.addNavClick=function(){var a=this;d(".sf-nav-step",a.wizard).off("click");d(".sf-nav-step.sf-nav-link",a.wizard).on("click",a.wizard,function(c){a.goTo(d(this).data("step"));c.preventDefault()})};e.prototype.wrapNavItem=function(a,c){var f=d("<li>",{"class":"sf-nav-step",data:{step:c}});this.config.markPrevSteps&&
c<this.config.startStep&&f.addClass("sf-nav-mark-step");this.config.showNavNumbers?(f.addClass("sf-li-number"),8<c&&f.addClass("sf-li-numbers-two")):f.addClass("sf-li-nonumber");d("<span>").addClass("sf-nav-subtext").html(d(a).find(this.config.stepNameElement).first().html()).appendTo(f);var b=d("<div>").addClass("sf-nav-number").appendTo(f);d("<span>").addClass("sf-nav-number-inner").html(c+1).appendTo(b);d("<div>").appendTo(f);c==this.config.startStep&&f.addClass("sf-active");1==this.config.linkNav?
f.addClass("sf-nav-link"):"prev"==this.config.linkNav&&this.stepActive>=c?f.addClass("sf-nav-link"):f.addClass("sf-nav-unlink");b=d(".sf-nav-wrap",this.wizard);"left"==this.config.showNav&&(b.addClass("sf-nav-left"),this.element.addClass("sf-nav-on-left"));"right"==this.config.showNav&&(b.addClass("sf-nav-right"),this.element.addClass("sf-nav-on-right"));if("top"==this.config.showNav||!0===this.config.showNav)b.addClass("sf-nav-top"),this.element.addClass("sf-nav-on-top");"bottom"==this.config.showNav&&
(b.addClass("sf-nav-bottom"),this.element.addClass("sf-nav-on-bottom"));this.element.addClass("sf-content");this.navStep(c+1).length?(this.navStep(c+1).before(f),this.setNavWidth()):this.wizard.find(".sf-nav").append(f)};e.prototype.setProportion=function(a){"undefined"!==typeof a&&0!=a||this.stopTransitionEffect();this.stepWidth=this.viewPort.width();var c=0,f=0;"auto"==this.config.height&&"3d-cube"!=this.config.transition&&this.steps.length&&(this.step(this.stepActive).height("auto"),a=this.step(this.stepActive).outerHeight(),
this.viewPort.height(a),c=a);"first"==this.config.height&&this.steps.length&&(this.step(0).height("auto"),c=this.step(0).height(),this.viewPort.height(this.step(0).outerHeight()));!isNaN(parseInt(this.config.height))&&this.steps.length&&(c=this.config.height,this.viewPort.height(c),this.step(0).height(c),a=this.step(0).outerHeight(!0),c=2*c-a);if("tallest"==this.config.height||"auto"==this.config.height&&"3d-cube"==this.config.transition&&this.steps.length)d(".sf-step",this.wizard).each(function(a){d(this).css({height:"auto",
display:"block"});d(this).height()>c&&(c=d(this).height(),f=d(this));d(this).css("display","")}),this.viewPort.height(f.outerHeight());a=" translateZ( "+this.stepWidth/2+"px )";d("#sf-"+this.element.attr("id")+"-styles").remove();var b="#"+this.element.attr("id")+" .sf-fieldwrap ";"3d-cube"==this.config.transition?d("<style type='text/css' id='sf-"+this.element.attr("id")+"-styles'>"+b+" {transform: rotateY( 0deg ) translateZ( -"+this.stepWidth/2+"px );}"+b+" .sf-step.sf-step-front{transform: rotateY( 0deg )"+
a+"}"+b+" .sf-step.sf-step-right{transform: rotateY( 90deg )"+a+"}"+b+" .sf-step.sf-step-left{transform: rotateY( -90deg )"+a+"}</style>").appendTo("head"):"slide"==this.config.transition&&d("<style type='text/css' id='sf-"+this.element.attr("id")+"-styles'>"+b+" {}"+b+" .sf-step.sf-step-front{}"+b+" .sf-step.sf-step-right{transform: translateX("+this.stepWidth+"px)}"+b+" .sf-step.sf-step-left{transform: translateX(-"+this.stepWidth+"px)}</style>").appendTo("head");c&&d(".sf-step",this.wizard).each(function(a){d(this).height(c)});
this.startTransitionEffect()};e.prototype.goTo=function(a,c,f){var b=this;if(isNaN(a))if("next"==a){if(b.stepActive==d(".sf-step").length-1){if("undefined"!==typeof f&&f)return this.finish(c);this.log("last step - add parameter if you want finish");return!1}a=b.checkNext()}else if("prev"==a){if(1>b.stepActive)return this.log("first step - there is no more prev step"),!1;a=b.checkPrev()}else return!1;if(a>=d(".sf-step",b.wizard).length||!1===a||b.step(a).is(".sf-step-disabled")||this.isAnimating()||
this.stepActive==a)return!1;var g=this.stepActive;if(g>a)for(var e=g;e>a;e--)f=b.step(e),f.hasClass("sf-step-disabled")||!1===b.config.onPrev(e,c)&&(a=e);if(g<a)for(e=g;e<a;e++)f=b.step(e),f.hasClass("sf-step-disabled")||!1===b.config.onNext(e,c)&&(a=e);if(g==a)return!1;this.addAnimating();0!=b.config.linkNav&&b.activeStep(a);"summary"==b.step(a).find(b.config.stepElement).attr("data-sf-step")&&b.summaryStep(a);f=jQuery.Event("sf-step-before");b.element.trigger(f,[g,a,c]);if(f.isDefaultPrevented())return b.removeAnimating(),
!1;b.wizard.removeClass("sf-s-"+g).addClass("sf-s-trans-"+a);b.config.markPrevSteps&&d(".sf-nav-step",b.navWrap).each(function(b){d(this).removeClass("sf-nav-mark-step");b<a&&d(this).addClass("sf-nav-mark-step")});this.careNav(a,g);b.element.find(".sf-step").removeClass("sf-step-front sf-step-right sf-step-left");b.step(g).addClass("sf-step-front");stepShift="";g<a?b.config.rtl?b.step(a).addClass("sf-step-left"):(stepShift="-",b.step(a).addClass("sf-step-right")):b.config.rtl?(stepShift="-",b.step(a).addClass("sf-step-right")):
b.step(a).addClass("sf-step-left");"3d-cube"==b.config.transition?!1!==b.isSupportTransition()?(d("#sf-"+b.element.attr("id")+"-trans-styles").remove(),f="#"+b.element.attr("id")+" .sf-fieldwrap",d("<style type='text/css' id='sf-"+b.element.attr("id")+"-trans-styles'>@keyframes cube-"+b.element.attr("id")+" {33% {transform: translateZ(-"+(b.stepWidth-b.stepWidth/4)+"px)}66% {transform: translateZ(-"+(b.stepWidth-b.stepWidth/4)+"px) rotateY("+stepShift+"90deg)}100% {transform: translateZ(-"+b.stepWidth/
2+"px) rotateY("+stepShift+"90deg)}}"+f+".sf-trans-cube-process {animation-name: cube-"+b.element.attr("id")+";animation-duration: "+this.config.duration+"ms;}</style>").appendTo("head"),d(".sf-fieldwrap",this.wizard).addClass("sf-trans-cube-process"),setTimeout(function(){d(".sf-fieldwrap",this.wizard).removeClass("sf-trans-cube-process");b.afterTransition(b.stepActive,a,c)},this.config.duration)):b.afterTransition(a,a,c):"fade"==b.config.transition?(b.step(b.stepActive).fadeOut(b.config.duration/
2),setTimeout(function(){b.step(a).fadeIn(b.config.duration/2)},b.config.duration/2),setTimeout(function(){b.afterTransition(a,a,c)},b.config.duration)):"slide"==b.config.transition?!1!==b.isSupportTransition()?(d("#sf-"+b.element.attr("id")+"-trans-styles").remove(),f="#"+b.element.attr("id")+" .sf-fieldwrap",d("<style type='text/css' id='sf-"+b.element.attr("id")+"-trans-styles'>@keyframes slide-"+b.element.attr("id")+" {100% {transform: translateX("+stepShift+b.stepWidth+"px)}}"+f+".sf-trans-slide-process {animation-name: slide-"+
b.element.attr("id")+";animation-duration: "+this.config.duration+"ms;}</style>").appendTo("head"),d(".sf-fieldwrap",this.wizard).addClass("sf-trans-slide-process"),setTimeout(function(){d(".sf-fieldwrap",this.wizard).removeClass("sf-trans-slide-process");b.afterTransition(b.stepActive,a,c)},this.config.duration)):b.afterTransition(a,a,c):"none"==b.config.transition&&b.afterTransition(a,a,c);b.stepActive=a;d(".sf-nav-step",b.wizard).removeClass("sf-active");b.navStep(a).addClass("sf-active");"auto"==
b.config.height&&b.steps.length&&"3d-cube"!=b.config.transition&&(f=b.step(b.stepActive),f.height("auto"),g=f.height(),e=b.step(b.stepActive).outerHeight(!0),b.viewPort.height(e),f.height(g));b.checkBtns();return!0};e.prototype.isSupportTransition=function(){return"undefined"===typeof(document.body||document.documentElement).style.transition?!1:!0};e.prototype.afterTransition=function(a,c,d){this.stopTransitionEffect();this.wizard.removeClass("sf-s-trans-"+a).addClass("sf-s-"+a);this.element.find(".sf-step").removeClass("sf-step-front sf-step-right sf-step-left");
this.step(a).addClass("sf-step-front");this.startTransitionEffect(!0);this.config.onSlideChanged(a,d);this.element.trigger("sf-step-after",[this.stepActive,d])};e.prototype.summaryStep=function(a){for(var c=this.step(a).html(),c=c.replace(/({{)([^}]+)(}})/g,'<span data-sf-input="$2"></span>'),f=/<span data-sf-input="([^"|]+)\|?([^"]+)?"/g,b;null!==(b=f.exec(c));){b.index===f.lastIndex&&f.lastIndex++;var e=d('[name="'+b[1]+'"]',this.wizard),l=[];e.is("select")&&(e=e.find("option"));if(1<e.length){var h=
!1;e.each(function(){var a=d(this);if(a.is(":checkbox")||a.is(":radio")||a.is("option")){if(a.is(":checked")){var b=d(this).data("sf-text");"undefined"!==typeof b&&!1!==b?l.push(b):l.push(a.val());h=!0}}else l.push(a.val())});e=l.join(", ");h||(e="undefined"===typeof b[2]?"---":b[2])}else if(e.is(":checkbox")||e.is(":radio"))if(e.is(":checked"))var m=e.attr("data-sf-text"),e="undefined"!==typeof m&&!1!==m?m:e.val();else e="undefined"===typeof b[2]?"---":b[2];else e=""==e.val()&&"undefined"!==typeof b[2]?
b[2]:e.val();b=b[0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");c=c.replace(new RegExp("("+b+">)(.*?)(</span>)","g"),"$1"+e+"$3")}this.step(a).html(c)};e.prototype.careNav=function(a,c){if(!1!==this.config.showNav){var e=this.navWrap.width(),b=[],g=a,l=c;if(!0===this.config.showNav||"top"==this.config.showNav||"bottom"==this.config.showNav){var h=0,m=0;d(".sf-nav-step",this.navWrap).not(".sf-nav-step-hidden").each(function(e){b[e]={};b[e].width=d(this).outerWidth(!0);b[e].index=d(this).data("step");
b[e].index==a&&(g=e);b[e].index==c&&(l=e);m+=b[e].width;e<g&&(h+=b[e].width)});0<=l-g&&(h-=0<g?b[g-1].width:0);this.touch.navWidth=!1;if(m>e){var k=this.touch.navWidth=m-e,e=0<g?b[g-1].index:0,n=0;0>=l-g&&(e=g<b.length-1?b[g+1].index:b.length-1,n=-80);h+n>k&&(h=k,n=0);var p=this.navStep(e);d(".sf-nav",this.navWrap).css({transition:"all "+this.config.duration+"ms"});var q=this.config.rtl?"":"-",k=0;p.length?(k=q+(h+n),0>h+n&&(k=0),e="translateX("+k+"px)"):0>e?e="translateX(0px)":(k=q+h,e="translateX("+
k+"px)");this.touch.offset=k;d(".sf-nav",this.navWrap).css({"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,"-o-transform":e,transform:e})}}else this.setNavWidth()}};e.prototype.setNavWidth=function(){var a=this,c=0;if("left"==a.config.showNav||"right"==a.config.showNav){d(".sf-nav-step",a.navWrap).each(function(b){a.navWrap.css("width","9999px");b=d(this).attr("style");var e=d(this).css({"float":"left",display:"block",width:"auto","white-space":"nowrap"}).outerWidth(!0);a.navWrap.css("width",
"");d(this).removeAttr("style").attr("style",b);c<e&&(c=e)});var c=c+2,e=a.element.closest(".sf-wizard").width()-c;e--;a.element.css({width:e+"px","float":""});a.navWrap.hasClass("sf-nav-left")&&a.element.css({"margin-left":"auto","float":"left"});a.navWrap.css("width",c+"px")}};e.prototype.refresh=function(){this.careNav(this.stepActive,this.stepActive);this.setProportion(!0)};e.prototype.initBtnNext=function(){this.btnNext=this.btnNextTmp.clone(!0).addClass("sf-btn-next");this.btnNext.appendTo(d(this.controls))};
e.prototype.initBtnPrev=function(){this.btnPrev=this.btnPrevTmp.clone(!0).addClass("sf-btn-prev");this.btnPrev.appendTo(d(this.controls))};e.prototype.initBtnFinish=function(){this.btnFinish=this.btnFinishTmp.clone(!0).addClass("sf-btn-finish");this.btnFinish.appendTo(d(this.controls))};e.prototype.next=function(a,c){return this.goTo("next",c,a)};e.prototype.prev=function(a){return this.goTo("prev",a)};e.prototype.finish=function(a){var c=!0;!1===this.config.onFinish(this.stepActive,a)&&(c=!1,this.log("Stopped by onFinish"));
var d=jQuery.Event("sf-finish");this.element.trigger(d,[this.stepActive,a]);d.isDefaultPrevented()&&(c=!1,this.log("Stopped by event sf-finish"));c&&this.element.submit();return c};e.prototype.log=function(a){!0===this.config.debug&&console.log(a)};d.fn.stepFormWizard=function(a){var c=this.data("step-form-wizard");c||(c=new e(this.first(),a),this.data("step-form-wizard",c));return c}})(jQuery);