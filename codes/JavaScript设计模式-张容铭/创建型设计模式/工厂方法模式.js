function Factory(type, content) {
    if (this instanceof Factory) {
        return new this[type](content);
    } else {
        return new Factory(type, content);
    }
}
Factory.prototype = {
    Benz: function(content) {
        // ...
    },
    BMW: function(content) {
        // ...
    }
    // ...
}
var a = Factory('Benz', '。。。');