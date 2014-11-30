var LayoutMeObj = {
    parent: "layout--me",
    className:   ".layout__content--me",
    animateDistance: 100,
    delay: 300,
    duration: 800
};

defineProp( LayoutMeObj, "init", function(){

    $(this.className).height($(document).height());

});

defineProp( LayoutMeObj, "animateInLeft", function(){

    var position = $(this.className).offset().left;

    $(this.className).css('opacity', '0');

    $(this.className).offset({
        left: position-this.animateDistance
    })

    $(this.className).transition({
        opacity:1,
        x:this.animateDistance+'px',
        delay:this.delay,
        duration:this.duration
    });

});