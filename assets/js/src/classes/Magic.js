var MagicObj = {
    className:   ".layout__content",
    word: $("path#word"),
    dot: $("path#dot"),
    tween: new TimelineMax()
};

defineProp( MagicObj, "pathPrepare", function($el){
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);

});

defineProp( MagicObj, "setUpTween", function(){
    this.tween = new TimelineMax()
    .add(TweenMax.to(this.word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
    .add(TweenMax.to(this.dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
    .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);         // change color during the whole thing

});

defineProp( MagicObj, "init", function(){
    this.pathPrepare(this.word);
    this.pathPrepare(this.dot);
    this.setUpTween();

    $('.layout--text').css('background-color','blue');

});