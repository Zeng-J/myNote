/*
*
*  例子1
*
*/
// 原代码
var dom1 = document.getElementById('dom1');
dom1.onmouseover = function () {
    this.style.color = 'red';
    this.style.background = '#ddd';
}
dom1.onmouseout = function () {
    this.style.color = '#333';
    this.style.background = '#f5f5f5';
}

var dom2 = document.getElementById('dom2');
dom2.onmouseover = function () {
    this.getElementsByClassName('strong')[0].style.color = 'red';
    this.getElementsByClassName('strong')[0].style.background = '#ddd';
}
dom2.onmouseout = function () {
    this.getElementsByClassName('strong')[0].style.color = '#333';
    this.getElementsByClassName('strong')[0].style.background = '#f5f5f5';
}

// -----桥接模式
// 提取共同点
function changeColor(dom, color, bg) {
    dom.style.color = color;
    dom.style.background = bg;
}

var dom1 = document.getElementById('dom1');
dom1.onmouseover = function () {
    changeColor(this, 'red', '#ddd');
}
dom1.onmouseout = function () {
    changeColor(this, '#333', '#f5f5f5');
}

var dom2 = document.getElementById('dom2');
dom2.onmouseover = function () {
    changeColor(this.getElementsByClassName('strong')[0], 'red', '#ddd');
}
dom2.onmouseout = function () {
    changeColor(this.getElementsByClassName('strong')[0], '#333', '#f5f5f5');
}



/*
*
*  例子2
*
*/
// 运动单元
function Speed(x, y) {
    this.x = x;
    this.y = y;
}
Speed.prototype.fun = function () {
    console.log('动起来');
}

// 变形单元
function Shape(sp) {
    this.shape = sp;
}
Shape.prototype.change = function () {
    console.log('改变形状');
}

// 说话单元
function Speak(wd) {
    this.word = wd;
}
Speak.prototype.say = function () {
    console.log('说话');
}

// 创建球类
function Ball(x, y, sp) {
    this.speed = new Speed(x, y);
    this.shape = new Shape(sp);
}
Ball.prototype.init = function() {
    this.speed.run();
    this.shape.change();
}

// 创建人物类
function People(x, y, wd) {
    this.speed = new Speed(x, y);
    this.speak = new Speak(wd);
}
People.prototype.init = function() {
    this.speed.run();
    this.speak.say();
}
