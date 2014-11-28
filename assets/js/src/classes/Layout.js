var LayoutObj = {
    className:   ".layout__content"
};

defineProp( LayoutObj, "checkAndAppend", function(text){

    var h1 = $(this.className+'>.layout__title').text();

    if (h1 == "Hello world" ) {
        $(this.className).append(text);
    }

});