var LayoutCoverObj = {
    parent: ".layout--cover",
    className:   ".layout__content--cover",
    animateDistance: $(document).height(),
    delay: 1000,
    duration: 800
};

defineProp( LayoutCoverObj, "init", function(){

    $(this.className).height($(document).height());
    var headingHeight = ($(this.className).height()/2)-($(this.className+'>.loading>svg').height()/2);
    $(this.className+'>.loading>svg').css('padding-top',headingHeight);

    $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
    })
});

defineProp( LayoutCoverObj, "animateSlideUp", function(){
    $(this.parent).transition({
        marginTop:-this.animateDistance+'px',
        delay:this.delay+800,
        duration:this.duration,
    },
    'linear',
    function() {
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        })
    }
    );
});

defineProp( LayoutCoverObj, "animateIn", function(){

    $(this.className).transition({
        scale:0,
        delay:this.delay,
        duration:this.duration,
    },
    'linear',
    this.animateSlideUp()
    );

});