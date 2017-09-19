function Flower (name, price) {
        this.name = 'unknown';
        this.price = 'unknown';
        this.getBunch = function (number){
            console.log("Bunch of " + number + " " + this.name + "s :: Price = " + parseInt(this.price) * number + " $");
        }

    
    }
function Rose() {
        Flower.call(this);
    }
    var r_rose = new Rose();
    r_rose.name = "red rose";
    r_rose.price = "1,5";

    
 r_rose.getBunch(12);
