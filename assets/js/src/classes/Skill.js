var SkillsObj = {
    bar: '.bar__front',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
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
            [$(this.bar)],
            this.duration,
            {
                right:0,
                ease:Strong.easeOut
            }
        );

    return this.timeLineMax;

});
