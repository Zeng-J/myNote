// 虚拟父类
const News = function() {
    /* 
    * 虚拟类是定义而不实现的，在虚拟类的构造函数中定义两个特权变量
    * 是因为后面的所有继承子类都要声明这两个变量，
    *  为了简化子类我们也可以将这些共有的变量提前声明在父类中
    */

    // 子组件容器
    this.children = [];
    // 当前组件元素
    this.element = null;
}
News.prototype = {
    init: function() {
        throw new Error('请重写你的方法');
    },
    add: function() {
        throw new Error('请重写你的方法');
    },
    getElement: function() {
        throw new Error('请重写你的方法');
    },
}


function inheritPrototype(Sub, Super) {
    function F() {}
    F.prototype = Super.prototype;

    let f = new F();
    f.constructor = Sub;
    Sub.prototype = f;
}

// 容器类构造函数
const Container = function(id, parent) {
    News.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Container, News);
Container.prototype.init = function() {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
}
Container.prototype.add = function(child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Container.prototype.getElement = function() {
    return this.element;
}
Container.prototype.show = function() {
    this.parent.appendChild(this.element);
}

// 成员集合类
const Item = function(className) {
    News.call(this);
    this.className = className || '';
    this.init();
}
inheritPrototype(Item, News);
Item.prototype.init = function() {
    this.element = document.createElement('li');
    this.element.className = this.className;
}
Item.prototype.add = function(child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Item.prototype.getElement = function() {
    return this.element;
}

// 新闻组合类
const NewsGroup = function(className) {
    News.call(this);
    this.className = className || '';
    this.init();
}
inheritPrototype(NewsGroup, News);
NewsGroup.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.className = this.className;
}
NewsGroup.prototype.add = function(child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
NewsGroup.prototype.getElement = function() {
    return this.element;
}

/*
* 上述已经创建了新闻容器类
* 我们还需要更底层的新闻类，且这些类没有子成员。
*/
// 图片新闻类
const ImagesNews = function (url, href, className) {
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.className = className || '';
    this.init();
}
inheritPrototype(ImagesNews, News);
ImagesNews.prototype.init = function() {
    this.element = document.createElement('a');
    let img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news' + this.className;
    this.element.href = this.href;
}
ImagesNews.prototype.add = function() {}
ImagesNews.prototype.getElement = function() {
    return this.element;
}

// 图标新闻类
const IconNews = function(text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
}
inheritPrototype(IconNews, News)
IconNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon ' + this.type;
}
IconNews.prototype.add = function() {}
IconNews.prototype.getElement = function() {
    return this.element;
}

// 文本新闻类
const EasyNews = function(text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}
inheritPrototype(EasyNews, News)
EasyNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function() {}
EasyNews.prototype.getElement = function() {
    return this.element;
}

/*
* 开始创建新闻模块
*/
let new1 = new Container('news', document.body);
new1.add(
    new Item('normal').add(
        new IconNews('梅西不拿金球也伟大', '#', 'video')
    )
).add(
    new Item('normal').add(
        new IconNews('落后就要挨打', '#', 'live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImagesNews('img/1.jpg', '#', 'small')
        ).add(
           new EasyNews('力量型选手', '#') 
        ).add(
            new EasyNews('天方夜谭', '#')
        )
    )
).show();