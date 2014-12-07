var PhoneObj = {
    phone: '.phone',
    phoneText: '.phone-text',
    phoneImage: '.phone-box__content',
    phoneTimeLineMax: new TimelineMax(),
    phoneTextTimeLineMax: new TimelineMax(),
    phoneImageTimeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 1,
    distance: 400
};

defineProp( PhoneObj, "beforeAnim", function(){

    $(this.phone).offset({
        left:$(this.phone).offset().left-this.distance
    });

    $(this.phoneText).offset({
        left:$(this.phoneText).offset().left+this.distance
    });

});

defineProp( PhoneObj, "phoneTextAnim", function(){


        this.phoneTextTimeLineMax.to(
            [$(this.phoneText)],
            this.duration,
            {
                x:-this.distance,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );



    return this.phoneTextTimeLineMax;

});

defineProp( PhoneObj, "phoneAnim", function(){



        this.phoneTimeLineMax.to(
            [$(this.phone)],
            this.duration,
            {
                x:this.distance,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );


        this.phoneTimeLineMax.to(
            [$(this.phoneImage)],
            this.duration,
            {
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

    return this.phoneTimeLineMax;

});

defineProp( PhoneObj, "phoneImageAnim", function(){



        this.phoneImageTimeLineMax.to(
            [$(this.phoneImage)],
            this.duration,
            {
                delay:1,
                ease:Strong.easeOut,
                autoAlpha:1
            }
        );

    return this.phoneImageTimeLineMax;

});