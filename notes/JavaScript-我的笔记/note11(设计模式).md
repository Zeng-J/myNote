## Constructor（构造器）模式

```javascript
function Car(name, year) {
    this.name = name;
    this.year = year;
}

Car.prototype.toString = function() {
    console.log("品牌："+this.name+" 年份："+this.year);
}

let baoma = new Car("宝马", "2020");
baoma.toString();

let benchi = new Car("奔驰", "2021");
benchi.toString();
```

`toString`这样的函数是为每个使用Car构造器创建的新对象共享使用的，因此要放在原型中。在原型中添加方法或属性的好处是，所有同一构造器创建的实例都可以共享使用该方法，而不需要在每个实例中重复创建该方法，以节省内存开销。



## Module（模块）模式

在`JavaScript`中，有几种用于实现模块的方法，包括：

- 对象字面量表示法
- `Module`模式
- `AMD`模块
- `CommonJS`模块
- `ECMAScript Harmony` 模块

### 1. 对象字面量

```javascript
let myModule = {
    myProperty: "myModule",
    myConfig: {
        age: 18,
        money: "9999k",
    },
    myMethod: function() {
        console.log(`message: age-${this.age} money-${this.money}`);
    }
}
```



### 2. Module（模块）模式

Module模式使用**闭包**封装“私有”状态和组织。它提供了一种包装混合公有/私有方法和变量的方式，防止其泄露至全局作用域，并与别的开发人员的接口发生冲突。

该模式除了返回一个对象而不是一个函数之外，非常类似于一个立即调用的函数表达式。

```javascript
let myModule = (function() {
    // 私有变量
    let counter = 0;
    // 私有方法
    function doSomethingPrivate() {
        console.log("已重置");
    }

    return {
        publicName: "myModule", // 公有变量
        
        // 公有方法
        addCounter: function() {
            return ++counter;
        },
        addCounterWithValue: function(val) {
            counter += val;
            return counter;
        },
        resetCounter: function() {
            counter = 0;
            doSomethingPrivate();
            return counter;
        }
    }
})();

console.log(myModule.addCounter()); // 1
console.log(myModule.addCounterWithValue(5)); // 6
console.log(myModule.resetCounter()); // 0
```



## Revealing Module（揭示模块）模式

```javascript
let myRevealingModule = function() {
    let privateName = "zj",
        publicDesc = "It is myRevealingModule";

    function privateFunction() {
        console.log("Name:" + privateName);
    }
    function publicSetName(str) {
        privateName = str;
    }
    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        getName: publicGetName,
        desc: publicDesc,
    };
}();

console.log(myRevealingModule.desc);
myRevealingModule.getName();
```



## Singleton（单例）模式

单例模式之所以这么叫，是因为它限制一个类只能有一个实例化对象。

```javascript
let myModule = (function() {
    let instance;
    function Singleton(config={}) {
        this.name = config.name || "";
        this.age = config.age || 18;
    }

    return {
        getInstance: function(config) {
            if (!instance) {
                instance = new Singleton(config);
            }
            return instance;
        }
    }
})();

let module1 = myModule.getInstance({ name: "zj" });
```

