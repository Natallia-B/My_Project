// Pattern 5
function Flower (name, price) {}
Flower.prototype.name = 'unknown';
Flower.prototype.price = 'unknown';
Flower.prototype.getBunch = function (number){
    console.log("Bunch of " + number + " " + this.name + "s :: Price = " + this.price * number + " $");
        }

var inherit = (function () {
    var F = function () {};
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
} }());

function Rose() {}
inherit(Rose, Flower);

    
var r_rose = new Rose();
r_rose.name = "red rose";
r_rose.price = 2;


r_rose.getBunch(6);
 
