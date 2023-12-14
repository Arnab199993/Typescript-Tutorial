"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class = /** @class */ (function () {
    function Class(names) {
        this.name = "Arnab Dutta";
        console.log("Constructr Called");
        console.log(names);
    }
    Class.prototype.getName = function () {
        console.log(this.name);
    };
    return Class;
}());
var a1 = new Class("My name");
a1.getName();
