var LayoutMeObj = {
    parent: ".layout--me",
    className:   ".layout__content--me",
    animateDistance: 100,
    delay: 2000,
    duration: 800
};

defineProp( LayoutMeObj, "init", function(){

    $(this.className).height($(document).height());

});

defineProp( LayoutMeObj, "animateHeading", function(){


    $(this.className+'>h1').transition({
        scale:1,
        opacity:1,
        delay:this.delay,
        duration:this.duration
    },
    'linear'
    );

});

defineProp( LayoutMeObj, "animateInScale", function(){


    var headingHeight = ($(this.parent).height()/2)-($(this.className+'>h1').height()/2);
    $(this.className+'>h1').css('padding-top',headingHeight);
    $(this.className+'>h1').css('scale','2');
    $(this.className+'>h1').css('opacity',0);

    $(this.parent).transition({
        scale:1,
        delay:this.delay,
        duration:this.duration
    },
    'linear',
    this.animateHeading()
    );

});