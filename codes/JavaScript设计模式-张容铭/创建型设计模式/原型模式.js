// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
}
LoopImages.prototype = {
    createImage: function() {},
    // 切换图片
    changeImage: function() {
        console.log('LoopImages');
    }
}

// 上下滑动切换类
var SlideLoopImages = function(imgArr, container) {
    // 构造函数继承
    LoopImages.call(this, imgArr, container);
}
SlideLoopImages.prototype = new LoopImages();
// 重写继承的切换图片方法
SlideLoopImages.prototype.changeImage = function() {
    console.log('SlideLoopImages');
}

// 渐变切换类
var FadeLoopImages = function(imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    // 切换箭头私有变量
    this.arrow = arrow;
}
FadeLoopImages.prototype = new LoopImages();
// 重写继承的切换图片方法
FadeLoopImages.prototype.changeImage = function() {
    console.log('FadeLoopImages');
}

var slideImg = new SlideLoopImages(['1.png', '2.png'], 'box');
console.log(slideImg);
/*
{
    container: "box",
    imagesArray: ["1.png", "2.png"],
    __proto__: {
        changeImage: function() { console.log('FadeLoopImages') },
        container: undefined,
        imagesArray: undefined,
        __proto__: {
            changeImage: function() { console.log('LoopImages') },
            createImage: function() {},
            __proto__: Object
        }
    }
}
*/