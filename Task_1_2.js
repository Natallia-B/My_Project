function Flower (name, price) {
        this.name = 'unknown';
        this.price = 'unknown';
        // this.number = 'unknown'
        this.getBunch = function (number){
            console.log("Bunch of " + number + " " + name + "s :: Price = " + parseInt(price) * number + " $");
        }

    
    }
function Rose(name, price) {
        Flower.apply(this, arguments);
    }
    Rose.prototype = new Flower();
    var r_rose = new Rose("red rose", "1,5");
    // r_rose.name = "red rose";
    // r_rose.price = "1,5";

    
 r_rose.getBunch(12);
