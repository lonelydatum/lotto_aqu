const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power4.easeOut

TweenLite.set(".cardWrapper", {perspective:400});

TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
// TweenLite.set(".flipper", {x:size.w/2, y:size.h/2});
TweenLite.set([".cardWrapper", ".cardFace"], {width:size.w, height:size.h});
TweenLite.set(".card", {transformStyle:"preserve-3d", width:size.w, height:size.h});



const isLB = size.w===728 && size.h===90
const is320 = size.w===320 && size.h===50
const is300 = size.w===300 && size.h===50
const isLandscape = isLB || is320 || is300


let rotateXY = isLandscape ? {rotationX:"+=180"} : {rotationY:"+=180"}



TweenLite.set(".back", {...rotateXY});



function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

function start(id){


	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	

	tl.from(".t1", .4, {x:-size.w, ease:Power3.easeOut}, "+=.1");	
	
	tl.to('.card', .6, {...rotateXY} , "+=3.1");	

	
	
	tl.set(".front", {display:"none"})

	
	tl.from(".t2", .4, {x:-size.w, ease:Power3.easeOut}, "+=.1");	



	

	
	

	tl.add("endFlip", "+=3")
	tl.set(".endcard", {opacity:1, display:"block"}, "endFlip")
	

	tl.to(`#wrap1 .card`, .6, {...rotateXY}, "endFlip");	


	tl.from(".phone_end", .3, {opacity:0, y:`-=${size.h*.8}`, ease:Power3.easeOut}, "+=.3");	

	tl.add("csl_2", "+=.5");	
	tl.set(".csl_1", {opacity:0}, "csl_2");	
	tl.set(".csl_2", {opacity:1}, "csl_2");	

	tl.add("csl_3", "+=.4");	
	tl.set(".csl_2", {opacity:0}, "csl_3");	
	tl.set(".csl_3", {opacity:1}, "csl_3");	

	tl.from(".t3", .6, {opacity:0}, "+=.3");	


	
	


	tl.from(".cta", .6, {opacity:0}, "+=.3");	

	const tl_pulse = new TimelineMax({repeat:5, yoyo:true})
	tl_pulse.to(".cta", .2, {scale:.54, ease:Power1.easeOut});	
	tl.add(tl_pulse)
}




export {size, start}