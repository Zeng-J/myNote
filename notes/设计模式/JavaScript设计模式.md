# JavaScript设计模式

> 2020-08-01

## 1、什么是模式

模式是一种可复用的解决方案，可用于解决软件设计中遇到的常见问题。

设计模式的三大好处

- 模式是已经验证的解决方案
- 模式很容易被复用
- 模式富有表达力

> 没有交互和明确规则的解决方案就不是模式





## 2、设计模式类别

1. 创建型设计模式

Constructor(构造器)、Factory(工厂)、Abstract(抽象)、Prototype(原型)、Singleton(单例)、Builder(生成器)

2. 结构型设计模式

Decorator(装饰者)、Facade(外观)、Flyweight(亨元)、Adapter(适配器)、Proxy(代理)

3. 行为设计模式

Iterator(迭代器)、Mediator(中介者)、Observer(观察者)、Visitor(访问者)





## 3、JavaScript设计模式介绍

### 3.1  Constructor（构造器）模式

```javascript
// 带原型的构造器
function Car(name, price) {
    this.name = name;
    this.price = price;
}
Car.prototype.toString = function() {
    return `${this.name}价格为${this.price}元`;
}
var car1 = new Car('奔驰', 1000000);
var car2 = new Car('路虎', 1500000);

console.log(car1.toString === car2.toString); //true 共享同一个方法，节省内存
```





### 3.2  Module（模块）模式

在JavaScript中，有几种用于实现模块的方法，包括：

- 对象字面量表示法
- Module模式
- AMD模式
- CommonJS模块
- ECMAScript Harmony模块

#### 3.2.1 对象字面量

```javascript
var myModule = {
    data: {
        name: 'zj',
        age: 18,
    },
    setData(obj={}) {
        let data = JSON.parse(JSON.stringify(this.data));
        Object.assign(data, obj);
        this.data = data;
    },
    getData() {
        return this.data;
    }
}

myModule.setData({ age: 19 });

console.log(myModule.getData()); // { name: 'zj', age: 19 }
```

#### 3.2.2  Module模式

Module模式最初被定义为一种在传统软件工程为类提供私有和公有封装的方法。目的：**函数名与在页面上其他脚本定义的函数冲突的可能性降低**。

Module模式使用**闭包**封装“私有”状态和组织。它提供了一种包装混合公有/私有方法和变量的方式，防止其泄露至全局作用域，并与其他开发人员的接口发生冲突。通过该模式，只需返回一个公有API，而其他的一切则都维持在私有闭包里。

这为我们提供了一个屏蔽处理底层事件逻辑的整洁解决方案，同时只暴露一个接口供应用程序的其他部分使用。**该模式除了返回一个对象而不是一个函数之外，非常类似于一个立即调用的函数表达式（IIFE）。**

应该指出的是，**在JavaScript中没有真正意义上的“私有”**，因为不像有些传统语言，JavaScript没有访问修饰符。从技术上来说，我们不能称变量为公有或是私有，因此我们需要使用函数作用域来模拟这个概念。

```javascript

// Module模式
var basketModule = (function() {
    // 购物车（私有属性）
    var basket = [];
  
  	// ---私有方法---
  	function calculateTotal(count) {
      var total = 0;
      while(count--) {
        total += basket[count].price;
      }
      return total;
    }

    // 返回一个暴露的公有对象
    return {
      	// -----公有属性-----
      	name: 'basket',
      
      	// -----公有方法-----
        // 添加商品到购物车
        addItem(value) {
            basket.push(value);
        },

        // 返回购物车里的商品数
        getItemCount() {
            return basket.length;
        },

        // 获取购物车里所有商品总价
        getTotal() {
            var itemCount = this.getItemCount();
						return calculateTotal(itemCount);
        }
    }
})()

basketModule.addItem({
    name: '烤鸡腿',
    price: 5,
});
basketModule.addItem({
    name: '铁板鱿鱼',
    price: 10,
});
console.log(`商品共${basketModule.getItemCount()}件`); // 商品共2件
console.log(`应付${basketModule.getTotal()}元`); // 应付15元
```

引入混入-可以将参数传递给模块的匿名函数中

```javascript
var basketModule = (function(wallet) {
    // 购物车
    var basket = [];

    // 返回一个暴露的公有对象
    return {
        // 判断自己的钱包够不够钱付款
        canPaying() {
            return wallet >= this.getTotal();
        },

        // 添加商品到购物车
      	...
    }
})(10)

basketModule.addItem({
    name: '烤鸡腿',
    price: 5,
});
basketModule.addItem({
    name: '铁板鱿鱼',
    price: 10,
});
  
console.log(`应付${basketModule.getTotal()}元`); // 应付15元
console.log(basketModule.canPaying() ? '足够付款' : '不够钱付款'); // 不够钱付款
```

> Module模式的缺点：由于我们访问公有和私有成员的方式不同，当我们想改变可见性时，实际上我们必须要修改每一个曾经使用过该成员的地方。





### 3.3 Revealing Module（揭示模块）模式

