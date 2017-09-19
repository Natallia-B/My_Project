// Pattern 5
function Flower (name, price) {}
        this.prototype.name = 'unknown';
        this.prototype.price = 'unknown';
        this.prototype.getBunch = function (number){
            console.log("Bunch of " + number + " " + name + "s :: Price = " + parseInt(price) * number + " $");
        }

function inherit(C, P) {
        var F = function () {};
        F.prototype = P.prototype;
        C.prototype = new F();
}

function Rose() {}
        inherit(Rose, Flower);
    
    var r_rose = new Rose("red rose", "1,5");
    

    
 r_rose.getBunch(12);
