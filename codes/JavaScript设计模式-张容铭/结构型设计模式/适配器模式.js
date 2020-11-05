// 定义A框架
var A = A || {};

A.g = function(id) {
    return document.getElementById(id);
}

A.on = function(id, type, fn) {
    var dom = typeof id === 'string' ? this.g(id) : id;

    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

// 想引入jQuery库去替换A框架（A框架在项目中使用很多，不能直接丢弃的情况）
A.g = function(id) {
    // 使用jQuery获取元素，返回第一个成员
    return $(id).get(0);
}
A.on = function(id, type, fn) {
    var dom = typeof id === 'string' ? $('#' + id) : $(id);
    dom.on(type, fn);
}

// ...参数适配、数据适配等