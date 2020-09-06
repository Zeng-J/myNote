var Car = function(params) {
    this.brand = params && params.brand;
    this.price = params && params.price;
}

Car.prototype = {
    getBrand: function() {
        return this.brand;
    },
    getPrice: function() {
        return this.price
    }
}

// 选配设备
var Equipment = function(list) {
    var equipmentMap = {
            lighting: '环境氛围照明系统',
            GPS: '实景穿越导航',
        },
        arr = [];

    for (let key of list) {
        if (equipmentMap[key]) {
            arr.push(equipmentMap[key]);
        }
    }
    this.equipment = arr;
}

// 汽车外观
var Appearance = function(color) {
    var that = this;
    (function(color, that) {
        switch(color) {
            case 'blue':
                that.color = '蓝色';
                that.colorDescription = '星野蓝色';
                break;
            case 'white':
                that.color = '白色';
                that.colorDescription = '次元白色';
                break;
            case 'red':
                that.color = '红色';
                that.colorDescription = '溶岩红色';
                break;
        }
    })(color, that)
}

Appearance.prototype.changeColor = function(color) {
    this.color = color;
}
Appearance.prototype.changeColorDecription = function(desc) {
    this.colorDescription = desc;
}

var CustomCar = function(basic={}, option={}) {
    var _car = new Car(basic);
    _car.color = new Appearance(option.color);
    _car.equipment = new Equipment(option.equipment);
    return _car;
}

var myCar = new CustomCar(
    {
        brand: 'Benz',
        price: 1000000,
    },
    {
        color: 'white',
        equipment: ['lighting']
    }
)

console.log(myCar);