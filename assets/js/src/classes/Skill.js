var SkillsObj = {
    skillJava: '.skill-java',
    skillSdk: '.skill-sdk',
    barWidth: $('.bar__behind').outerWidth()/100,
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 0.5,
    distance: 400
};

defineProp( SkillsObj, "beforeAnim", function(){

    $(this.phone).offset({
        left:$(this.phone).offset().left-this.distance
    });



    $(this.phoneText).offset({
        left:$(this.phoneText).offset().left+this.distance
    });

});


defineProp( SkillsObj, "barAnim", function(){


        this.timeLineMax.to(
            [$(this.skillJava)],
            this.duration,
            {
                delay:0.5,
                right:this.barWidth*20,
                ease:Strong.easeOut
            }
        );

        this.timeLineMax.to(
            [$(this.skillSdk)],
            this.duration,
            {
                right:this.barWidth*30,
                ease:Strong.easeOut
            }
        );

    return this.timeLineMax;

});
