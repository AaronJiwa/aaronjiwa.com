var AboutObj = {
    text: '.about-text-left',
    cvImage: '.cv-image',
    cvText: '.cv-text',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
    distance: 400
};

defineProp( AboutObj, "beforeAnim", function(){

    $(this.text).offset({
        left:$(this.text).offset().left-this.distance
    });



});

defineProp( AboutObj, "makeAnim", function(){

        this.beforeAnim();

        this.timeLineMax.to(
            [$(this.text)],
            this.duration,
            {
                x:this.distance,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.cvImage)],
            this.duration/2,
            {
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.cvText)],
            this.duration/2,
            {
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );




    return this.timeLineMax;

});