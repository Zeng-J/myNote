## 画布canvas

### 1. 实例



```javascript
// 获取节点
var myCanvas = document.getElementById("myCanvas");

// 获取上下文
var ctx = myCanvas.getContext("2d");

// 1. 矩形 fillRect(x, y, width, height)
ctx.fillStyle = "#FFCCCC";
ctx.fillRect(50, 50, 150, 150);

// 2. 路径、填充、描边
// 路径
ctx.rect();
// 填充
ctx.fillStyle = "#FF6666";
ctx.fill();
// 描边
ctx.strokeStyle = "#0099CC";
ctx.lineWidth = 5;
ctx.stroke();
```

![1565318041231](E:\my resouce\前端\前端学习资料\前端笔记\notes\Html和Css-我的笔记\notes\canvas\images\cav1.png)

```javascript
// 画路径
// 路径一
ctx.strokeStyle = "red";
ctx.moveTo(5, 5);
ctx.lineTo(50, 50);
ctx.lineWidth = 10;
ctx.stroke();

// 矩形二
// ctx.beginPath();
ctx.rect(80, 10, 50, 50);
ctx.strokeStyle = "green";
ctx.stroke();

// 可看见第一张图，路径一也为绿色，即路径被stroke了两次，最后一次颜色覆盖了上一次。
// 应该添加ctx.beginPath();重新开始一段新路径，绘画如第二张图
```

![1565319837727](E:\my resouce\前端\前端学习资料\前端笔记\notes\Html和Css-我的笔记\notes\canvas\images\cav2.png)

![1565319959522](E:\my resouce\前端\前端学习资料\前端笔记\notes\Html和Css-我的笔记\notes\canvas\images\cav3.png)



```
// 圆形 arc(x, y, r, start, stop)
ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.lineWidth = 2;
ctx2.arc(60, 250, 50, 0, 2 * Math.PI);
ctx2.stroke();

// 文本
ctx2.font = "20px 微软雅黑";
ctx2.fillStyle = "#CCCCFF";
ctx2.fillText("hello world", 10, 350);

ctx2.font = "25px 微软雅黑";
ctx2.lineWidth = 1;
ctx2.strokeStyle = "blue";
ctx2.strokeText("你好", 130, 350);

// 渐变 createLinearGradient(x, y, x1, y1) createRadialGradient(x, y, x1, y1)
var grd = ctx2.createLinearGradient(300, 300, 400, 400);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx2.beginPath();
ctx2.fillStyle = grd;
ctx2.rect(300, 300, 100, 100);
ctx2.fill();
```



### 2. 多边形

```javascript
// 封装函数
function drawShape(n, radius) {
    // 半径
    var r = radius || 100;

    // 保存绘画环境
    ctx3.save();

    ctx3.beginPath();
    ctx3.moveTo(0, -r);
    for (let i = 1; i <n; i++) {
        // 旋转画布(注意：以设置的中心点旋转; 默认中心为画布中心)
        ctx3.rotate(2 * Math.PI /n);
        // 旋转的是坐标
        ctx3.lineTo(0, -r);
    }
    ctx3.closePath();
    ctx3.stroke();

    // 还原绘画环境
    ctx3.restore();
}
drawShape(10);
drawShape(4, 150);
```

![cav4](E:\my resouce\前端\前端学习资料\myNote\myNote\notes\Html和Css-我的笔记\notes\canvas\images\cav4.png)



### 3. 动画

```javascript
var myCanvas4 = document.getElementById("myCanvas4");

var ctx4 = myCanvas4.getContext("2d");

ctx4.lineWidth = 8;
ctx4.moveTo(5, 150);
var x = 5;

// --------setInterval--------------
var timer = setInterval(function fun() {
    if (x <= 350) {
        x += 5;
        ctx4.lineTo(x, 150)
        ctx4.stroke();
    } else {
        clearInterval(timer);
    }
}, 1000/50)

// --------setTimeout--------------
var timer = setTimeout(function fun() {
    if (x <= 350) {
        x += 5;
        ctx4.lineTo(x, 150);
        ctx4.stroke();
        timer = setTimeout(fun, 1000/50);
    } else {
        clearTimeout(timer);
    }
}, 1000/50)

// --------requestAnimationFrame--------------
var timer = requestAnimationFrame(function fun() {
    if (x <= 350) {
        x += 3;
        ctx4.lineTo(x, 150)
        ctx4.stroke();
        timer = requestAnimationFrame(fun);
    } else {
        cancelAnimationFrame(timer);
    }
})
```

![cav5](E:\my resouce\前端\前端学习资料\myNote\myNote\notes\Html和Css-我的笔记\notes\canvas\images\cav5.gif)

