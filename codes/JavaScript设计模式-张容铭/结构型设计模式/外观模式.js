function getEvent(event) {
    // 标准浏览器返回event，IE下window.event
    return event || window.event;
}

// 获取元素
var getTarget = function(event) {
    var event = getEvent(event);
    // 标准浏览器下event.target，IE下event.srcElement
    return event.target || event.srcElement;
}

// 阻止默认行为
var preventDefault = function(event) {
    var event = getEvent(event);
    // 标准浏览器
    if (event.preventDefault) {
        event.preventDefault();
    // IE浏览器
    } else {
        event.returnValue = false;
    }

}