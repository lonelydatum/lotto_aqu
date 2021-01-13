(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .4, { x: -_commonJsCommonJs.size.w, ease: Power3.easeOut }, "+=.1");
	tl.to("#wrap1 .card", .6, { rotationY: -180, transformStyle: "preserve-3d", ease: Back.easeOut }, "+=3.1");
	tl.set(".front", { display: "none" });
	tl.from(".t2", .4, { x: -_commonJsCommonJs.size.w, ease: Power3.easeOut }, "+=.1");

	tl.add("endFlip", "+=3");
	tl.set(".endcard", { opacity: 1, display: "block" }, "endFlip");
	tl.to("#wrap1 .card", .6, { rotationY: -360, transformStyle: "preserve-3d", ease: Back.easeOut }, "endFlip");

	// tl.set(".csl_1", {opacity:1});	

	tl.from(".phone_end", .3, { opacity: 0, y: "-=200", ease: Power3.easeOut }, "+=.3");

	tl.add("csl_2", "+=.4");
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

	// tl.gotoAndPlay("endFlip")
}

start();

module.exports = {};

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power4.easeOut;

TweenLite.set(".cardWrapper", { perspective: 400 });
TweenLite.set(".back", { rotationY: 180 });
TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });
TweenLite.set(".flipper", { x: size.w / 2, y: size.h / 2 });

function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

exports.size = size;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
