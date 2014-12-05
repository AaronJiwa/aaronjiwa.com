var MeObj = {
    title: '.layout__title--me',
    support: '.layout__title-support--me',
    extra: '.extra',
    header: '.site-header',
    arrow: '.down-arrow',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
    distance: 400
};

defineProp( MeObj, "beforeAnim", function(){

$(this.title).offset({top:$(this.title).offset().top-this.distance});

});

defineProp( MeObj, "makeAnim", function(){

        this.beforeAnim();


        this.timeLineMax.to(
            [$(this.title)],
            this.duration,
            {
                y:this.distance,
                ease:Bounce.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.support)],
            this.duration,
            {
                delay:this.delay,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.extra)  ],
            this.duration,
            {
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

        this.timeLineMax.to(
            [$(this.header)],
            this.duration*2,
            {
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );



    return this.timeLineMax;

});