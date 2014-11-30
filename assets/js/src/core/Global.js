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

