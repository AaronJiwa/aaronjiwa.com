var Me = Object.create(MeObj);
var meTimeline = Me.makeAnim();

var Phone = Object.create(PhoneObj);
Phone.beforeAnim();
var phoneTimeline = Phone.phoneAnim();
var phoneTextTimeline = Phone.phoneTextAnim();
//var phoneImageTimeline = Phone.phoneImageAnim();

var Skill = Object.create(SkillsObj);
var barTimeline = Skill.barAnim();

controller = new ScrollMagic();

// build scene
var sceneMe = new ScrollScene({triggerElement: ".layout--me"})
                .setTween(meTimeline)

var scenePhone = new ScrollScene({triggerElement: "#project-phone"})
                .setTween(phoneTimeline)

var sceneText = new ScrollScene({triggerElement: "#project-phone"})
                .setTween(phoneTextTimeline)



var sceneSkills = new ScrollScene({triggerElement: "#skills"})
                .setTween(barTimeline)

controller.addScene([
    sceneMe,
    scenePhone,
    sceneText,
    sceneSkills
]);

});
