const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power4.easeOut

TweenLite.set(".cardWrapper", {perspective:400});
TweenLite.set(".back", {rotationY:180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
TweenLite.set(".flipper", {x:size.w/2, y:size.h/2});

function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);


export {size}