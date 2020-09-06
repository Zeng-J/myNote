var Benz = function() {
    this.brand = 'Benz';
}
Benz.prototype.getBrand = function() {}

var BMW = function() {
    this.brand = 'BMW';
}
Benz.prototype.getBrand = function() {}

var createCar = function(type) {
    switch(type) {
        case 'Benz':
            return new Benz();
        case 'BMW':
            return new BMW();
    }
}


// ---也可以抽取相同点----------------
var createCar = function(brand) {
    var o = new Object();

    o.brand = brand;
    o.getBrand = function() {};

    if (brand === 'Benz') {

    } else if (brand === 'BMW') {

    }

    return o;
}