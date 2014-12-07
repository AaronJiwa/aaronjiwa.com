var AboutObj = {
    text: '.about-text-left',
    cvImage: '.cv-image',
    cvText: '.cv-text',
    aboutMe: '.about-me-heading',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
    distance: 400
};

defineProp( AboutObj, "beforeAnim", function(){

    $(this.text).offset({
        left:$(this.text).offset().left-this.distance
    });
    $(this.aboutMe).offset({
        left:$(this.aboutMe).offset().left-this.distance
    });



});

defineProp( AboutObj, "makeAnim", function(){

        this.beforeAnim();


        this.timeLineMax.to(
            [$(this.aboutMe),$(this.text)],
            this.duration,
            {
                x:this.distance,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.cvImage)],
            this.duration,
            {
                rotationY:360,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );


        this.timeLineMax.to(
            [$(this.cvText)],
            this.duration/2,
            {

                ease:Power2.easeInOut,
                autoAlpha:1
            }
        );



    return this.timeLineMax;

});