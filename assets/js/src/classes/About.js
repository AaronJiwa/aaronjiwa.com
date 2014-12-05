var AboutObj = {
    box: '.me-box',
    extra: '.extra',
    header: '.site-header',
    arrow: '.down-arrow',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
    distance: 400
};

defineProp( AboutObj, "beforeAnim", function(){

    $(this.box).offset({
        left:$(this.box).offset().left-this.distance
    });

});

defineProp( AboutObj, "makeAnim", function(){

        this.beforeAnim();

        this.timeLineMax.to(
            [$(this.box)],
            this.duration,
            {
                x:this.distance,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );



    return this.timeLineMax;

});