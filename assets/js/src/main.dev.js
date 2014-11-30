var controller = new ScrollMagic();

var LayoutCover = Object.create(LayoutCoverObj);
LayoutCover.init();
LayoutCover.animateIn();

var LayoutMe = Object.create(LayoutMeObj);
LayoutMe.init();
LayoutMe.animateInScale();

var Magic = Object.create(MagicObj);
Magic.init();

var scene = new ScrollScene({
    triggerElement: "#trigger1",
    duration: 200,
    tweenChanges: true
    })
    .setTween(Magic.tween)
    .addTo(controller);
});