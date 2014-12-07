var ContactObj = {
    title: '.layout__title--contact',
    support: '.contact__support',
    small: '.contact__small',
    timeLineMax: new TimelineMax(),
    delay: 0.5,
    duration: 2.5,
    distance: 400
};

defineProp( ContactObj, "beforeAnim", function(){

    $(this.text).offset({
        left:$(this.text).offset().left-this.distance
    });



});

defineProp( ContactObj, "makeAnim", function(){


        this.timeLineMax.from(
            [$(this.title),$(this.support),$(this.small)],
            this.duration,
            {
                delay:0.3,
                rotationY:90,
                ease:Strong.easeOut
            }
        );

        this.timeLineMax.to(
            [$(this.title)],
            this.duration,
            {

                rotationY:0,
                ease:Strong.easeOut
            }
        );





    return this.timeLineMax;

});