(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)("D_BC");

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power4.easeOut;

TweenLite.set(".cardWrapper", { perspective: 400 });

TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });
// TweenLite.set(".flipper", {x:size.w/2, y:size.h/2});
TweenLite.set([".cardWrapper", ".cardFace"], { width: size.w, height: size.h });
TweenLite.set(".card", { transformStyle: "preserve-3d", width: size.w, height: size.h });

var isLB = size.w === 728 && size.h === 90;
var is320 = size.w === 320 && size.h === 50;
var is300 = size.w === 300 && size.h === 50;
var isLandscape = isLB || is320 || is300;
var isMobile = is320 || is300;

var read_t1 = isMobile ? 2.3 : 3.1;
var read_t2 = isMobile ? 2.8 : 3;

var rotateXY = isLandscape ? { rotationX: "+=180" } : { rotationY: "+=180" };

TweenLite.set(".back", _extends({}, rotateXY));

function bgExitHandler(e) {
	Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

function start(id) {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .4, { x: -size.w, ease: Power3.easeOut }, "+=.1");

	tl.to('.card', .6, _extends({}, rotateXY), "+=" + read_t1);

	tl.set(".front", { display: "none" });

	tl.from(".t2", .4, { x: -size.w, ease: Power3.easeOut }, "+=.1");

	tl.add("endFlip", "+=" + read_t2);
	tl.set(".endcard", { opacity: 1, display: "block" }, "endFlip");

	tl.to("#wrap1 .card", .6, _extends({}, rotateXY), "endFlip");

	tl.from(".phone_end", .3, { opacity: 0, y: "-=" + size.h * .8, ease: Power3.easeOut }, "+=.3");

	tl.add("csl_2", "+=.5");
	tl.set(".csl_1", { opacity: 0 }, "csl_2");
	tl.set(".csl_2", { opacity: 1 }, "csl_2");

	tl.add("csl_3", "+=.4");
	tl.set(".csl_2", { opacity: 0 }, "csl_3");
	tl.set(".csl_3", { opacity: 1 }, "csl_3");

	tl.from(".t3", .6, { opacity: 0 }, "+=.3");

	tl.from(".cta", .6, { opacity: 0 }, "+=.3");

	var tl_pulse = new TimelineMax({ repeat: 5, yoyo: true });
	tl_pulse.to(".cta", .2, { scale: .54, ease: Power1.easeOut });
	tl.add(tl_pulse);
}

exports.size = size;
exports.start = start;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
