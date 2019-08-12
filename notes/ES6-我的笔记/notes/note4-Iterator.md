2019/7/15 20:13:08 

## Iterator

`Iterator`接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即`for...of`循环。 当使用`for... of`循环遍历某种数据结构时，该循环会自动去寻找`Iterator`接口。


### 1. 原生具备`Iterator`接口的数据结构如下：

- Array
- Map
- Set
- String
- TypedArray
- 函数的`arguments`对象
- `NodeList`对象

### 2. `for...of`循环

##### 与其他遍历语法的比较

以数组为例，最原始的遍历写法就是`for`循环

```

	for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}

```

上面写法比较麻烦，因此数组提供内置的`forEach`方法

```

	let arr = ['a', 'b', 'c'];
	arr.forEach((i) => console.log(i));  // a b c

```

***但是使用`forEach`不能中途跳出循环***， 因此`break`命令或`return`命令都不能奏效。
