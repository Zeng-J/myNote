2019/6/14 20:32:20 

## 1. Set

- `set`类似于数组，但是成员的值是唯一的，不能重复
- `set`内部中`NaN`是等于自身的（平时，`NaN` === `NaN` // false）

### Set实例的属性和方法

##### 1. 属性

- Set.prototype.constructor
	- 构造函数，默认就是Set函数
- Set.prototype.size
	- 成员总数

##### 2. 操作方法（用于操作数据）

1. add(value)
	- 添加某个值，返回Set结构本身
- delete(value)
	- 删除某值，返回布尔值，判断删除是否成功
- has(value)
	- 判断是否有某值
- clear()
	- 清除所有

代码

```

	let set = new Set()
	set.add(1).add(2)

```

`Array.from`方法可将`Set`结构转为数组

写一个数组去重方法

```

    function dedupe(arr) {
    	return Array.from(new Set(arr))
    }
    console.log(dedupe([1,2,3,3,4,1]))
	// [1, 2, 3, 4]

```

##### 3. 遍历操作

- `keys()`
- `values()`
- `entries()` 返回键值对的遍历器
- `forEach()`

Set结构没有键名，只有键值。因此，keys与values方法作用一致

代码

```

	let set = new Set(['red', 'green', 'blue']);

	for (let item of set.keys()) {
	  console.log(item);
	}
	// red green blue

```

```

	// 可用扩展运算符（...）将Set结构转换为数组
	let set = new Set(['red', 'green', 'blue']);
	let arr = [...set];

	// 去重数组方法
	let arr = [3, 5, 2, 2, 5, 5];
	let unique = [...new Set(arr)];	// [3,5,2]

	// 数组的map和filter方法也可以间接用于 Set。
	let set = new Set([1, 2, 3]);
	set = new Set([...set].map(x => x * 2));
	// 返回Set结构：{2, 4, 6}
	
	let set = new Set([1, 2, 3, 4, 5]);
	set = new Set([...set].filter(x => (x % 2) == 0));
	// 返回Set结构：{2, 4}

```

## 2. `WeakSet`

- 它与`Set`有两个区别
	- `WeakSet`成员只能是对象
	- `WeakSet`中的对象都是弱引用，即垃圾回收机制不考虑`WeakSet`对该对象的引用。


```

    const ws = new WeakSet()
    let a = [1,2]
    let b = {'name': 'zj'}
    ws.add(a).add(b)
    
    b = null // b不再引用{'name' : 'zj'}，垃圾回收机制会释放这块内存
    
    // 垃圾回收时间是不确定的，根据内存使用情况而定。为确保执行了垃圾回收机制，下面将延时5s，再来看下ws
    setTimeout(()=> {
        console.log('ws', ws) // ws只有a引用的成员
    }, 5000) 

```

## 3. `Map`