var Me = Object.create(MeObj);
var meTimeline = Me.makeAnim();

var About = Object.create(AboutObj);
var aboutTimeline = About.makeAnim();


controller = new ScrollMagic();

// build scene
var sceneMe = new ScrollScene({triggerElement: ".layout--me"})
                .setTween(meTimeline)


var sceneAbout = new ScrollScene({triggerElement: ".layout--about"})
                .setTween(aboutTimeline)



controller.addScene([
    sceneMe,
    sceneAbout
]);

});
