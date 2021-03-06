function inheritObject(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function inheritPrototype(subclass, superClass) {
    var p = inheritObject(superClass.prototype);
    p.constructor = subclass;
    subclass.prototype = p;
}

function SuperClass(name) {
    this.name = name;
    this.books = ['html', 'css'];
}

SuperClass.prototype.getName = function() {
    console.log(this.name);
}

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

inheritPrototype(SubClass, SuperClass);

SubClass.prototype.getTime = function() {
    console.log(this.time);
}

console.log(SubClass.prototype);

var instance = new SubClass('web', 2020);

console.log(instance);