var Me = Object.create(MeObj);
var meTimeline = Me.makeAnim();

var Phone = Object.create(PhoneObj);
Phone.beforeAnim();
var phoneTimeline = Phone.phoneAnim();
var phoneTextTimeline = Phone.phoneTextAnim();

var About = Object.create(AboutObj);
var aboutTimeLine = About.makeAnim();

var Skill = Object.create(SkillsObj);
var barTimeline = Skill.barAnim();

controller = new ScrollMagic();

// build scene
var sceneMe = new ScrollScene({triggerElement: ".layout--me"})
                .setTween(meTimeline)

var sceneAbout = new ScrollScene({triggerElement: ".layout--about"})
                .setTween(aboutTimeLine)

var scenePhone = new ScrollScene({triggerElement: "#project-phone"})
                .setTween(phoneTimeline)

var sceneText = new ScrollScene({triggerElement: "#project-phone"})
                .setTween(phoneTextTimeline)



var sceneSkills = new ScrollScene({triggerElement: "#skills"})
                .setTween(barTimeline)

controller.addScene([
    sceneMe,
    sceneAbout,
    scenePhone,
    sceneText,
    sceneSkills
]);

});
