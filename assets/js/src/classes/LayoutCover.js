var LayoutCoverObj = {
    parent: ".layout--cover",
    className:   ".layout__content--cover",
    animateDistance: $(document).height(),
    delay: 300,
    duration: 800
};

defineProp( LayoutCoverObj, "init", function(){

    $(this.className).height($(document).height());
    var headingHeight = ($(this.className).height()/2)-($(this.className+'>h1').height()/2);
    $(this.className+'>h1').css('padding-top',headingHeight);

    $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
    })
});

defineProp( LayoutCoverObj, "animateIn", function(){

    $(this.parent).transition({
        opacity:0,
        marginTop:-this.animateDistance+'px',
        delay:this.delay,
        duration:this.duration,
    },'linear',function() {

        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        })
    }
    );

});