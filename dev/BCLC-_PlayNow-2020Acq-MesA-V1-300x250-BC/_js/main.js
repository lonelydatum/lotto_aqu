import {size} from '../../_common/js/common.js'




function start(){
	

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	tl.from(".t1", .4, {x:-size.w, ease:Power3.easeOut}, "+=.1");	
	tl.to(`#wrap1 .card`, .6, {rotationY:-180,  transformStyle:"preserve-3d", ease:Back.easeOut}, "+=3.1");	
	tl.set(".front", {display:"none"})
	tl.from(".t2", .4, {x:-size.w, ease:Power3.easeOut}, "+=.1");	

	tl.add("endFlip", "+=3")
	tl.set(".endcard", {opacity:1, display:"block"}, "endFlip")
	tl.to(`#wrap1 .card`, .6, {rotationY:-360,  transformStyle:"preserve-3d", ease:Back.easeOut}, "endFlip");	


	// tl.set(".csl_1", {opacity:1});	

	tl.from(".phone_end", .3, {opacity:0, y:"-=200", ease:Power3.easeOut}, "+=.3");	

	tl.add("csl_2", "+=.4");	
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

	// tl.gotoAndPlay("endFlip")


}

start()


module.exports = {};
