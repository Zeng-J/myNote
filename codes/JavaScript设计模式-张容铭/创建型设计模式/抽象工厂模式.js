function VehicleFactory(subType, superType) {
    if (typeof VehicleFactory[superType] === 'function') {

        function F() {};

        F.prototype = new VehicleFactory[superType]();

        subType.prototype = new F();

        subType.prototype.constructor = subType;

    } else {
        throw new Error('未创建该抽象类');
    }
}

VehicleFactory.Car = function () {
    this.type = 'car';
}
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    // ...
}

VehicleFactory.Truck = function () {
    this.type = 'truck';
}
VehicleFactory.Truck.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    // ...
}

function Audi() {
    this.name = 'audi';
}
VehicleFactory(Audi, 'Car');
Audi.prototype.getPrice = function() {
    return 1000000;
}
var audi = new Audi();

audi.getPrice(); // 1000000