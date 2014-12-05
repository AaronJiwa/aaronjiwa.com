"use strict"
$(function() {
// shorthand for define prop, we usually have writable, enumerable and configurable as they are.
var defineProp = function( obj, key, value, writable, enumerable, configurable ) {
    writable = typeof writable !== 'undefined' ? writable : true;
    enumerable = typeof enumerable !== 'undefined' ? enumerable : true;
    configurable = typeof configurable !== 'undefined' ? configurable : true;

    var config = {
        value: value,
        writable: writable,
        enumerable: enumerable,
        configurable: configurable
    };

    Object.defineProperty( obj, key, config );
}

var win = $(window),
    nav = $('.site-header'),
pos = nav.offset().top,
sticky = function(){
  win.scrollTop() > pos ? nav.addClass('site-header--sticky')
  : nav.removeClass('site-header--sticky')
}
win.scroll(sticky);

$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top-70
    }, 1000);
    return false;
  }
}
});