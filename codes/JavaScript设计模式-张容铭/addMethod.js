Function.prototype.addMethod = function(name, fn) {
    this.prototype[name] = fn;
    return this;
}

var Methods = function(name) {
    this.name = name;
};


Methods.addMethod('getName', function() {
    return this.name;
})

var m = new Methods('zj');
console.log(m.getName);

var Others = function() {};
var o = new Others();
console.log(o.getName);

