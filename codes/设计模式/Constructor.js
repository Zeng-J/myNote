// 带原型的构造器
function Car(name, price) {
    this.name = name;
    this.price = price;
}
Car.prototype.toString = function() {
    return `${this.name}价格为${this.price}元`;
}
var car1 = new Car('奔驰', 1000000);
var car2 = new Car('路虎', 1500000);

console.log(car1.toString());
console.log(car2.toString());
console.log(car1.toString === car2.toString); // 共享同一个方法，节省内存