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
// 因该添加ctx.beginPath();重新开始一段新路径，绘画如第二张图
```

![1565319837727](E:\my resouce\前端\前端学习资料\前端笔记\notes\Html和Css-我的笔记\notes\canvas\images\cav2.png)

![1565319959522](E:\my resouce\前端\前端学习资料\前端笔记\notes\Html和Css-我的笔记\notes\canvas\images\cav3.png)