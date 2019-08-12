2019/2/28 14:37:16

# 目录

- 历史简单了解
- let和const定义变量
- 解构赋值
 

## 1. 历史简单了解

- 2009年12月，ECMAScript5.0版正式发布（ES5）
- 2011年6月，ECMAScript5.1版发布（ES5）
- 2015年6月，ECMAScript6正式发布（ES2015）
- 2016年6月，小修改（ES2016）
- 2017年6月，发布ES2017
- ES6既是一个历史名词，也是一个泛指，含义是5.1版以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017

## 2. let和const定义变量

### 2.1 回顾

- var 只会提前声明
- function既声明又定义
- 全局作用域下，使用var和function声明的变量会给window增加属性。如var a=1; window.a为1

### 2.2 `let`

- 不会变量提升
- 不可以重复声明
- 不会给window增加属性

### 2.3 `const`

- 有let的特性
- const定义变量，一旦声明必须赋值
- const定义的是一个常量，不可以重新赋值

### 2.4 块级作用域

- 一个`{}`就是一个块级作用域
- ES5只有全局作用域和函数作用域。没有块级作用域
- 在块级作用域下let和const声明的变量是私有的

```

	{
		function get(){};
		var a=0;
		let b=0;
	}
	console.log(a);   //0
	console.log(b);   //报错，b is not defined

```

##### 2.4.1 具有大括号的形式

- 对象
	- 如果想表示一个对象，`{}`不可以放行首

```

	{ name: 'zj'}  // 报错

	var obj = { name: 'zj'}  // 要有个变量去接它

```


- if语句

```

	 if(0){
	  var a=1;
	  function get(){};
	 }
	1、if为false时，var和function都会提前声明，但function不会定义

```

- for循环

```

	var b = [];
	for (var i = 0; i < 10; i++) {
	  b[i] = function () {
	    console.log(i);
	  };
	}
	b[6](); // 10

	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 6
	// 每一一次循环，都是新的块级作用域

```


## 3. 解构赋值

### 3.1 数组解构赋值

```

	let arr=[1,2,3,4];
	let [a,b,c,d,e]=arr; // 相当于 let a=arr[0], b=arr[1], c=arr[2], d=arr[3], e=arr[4]
	console.log(a,b,c,d,e);  //1,2,3,4,undefined

```

```
	
	// 设置默认值
	let [a,b=2]=[1];
	let [c,d=3]=[2,5];
	console.log(a,b); //1 2
	console.log(c,d); //2 5 注意：d=3不会执行
	
	// 省略赋值
	let[,,m]=[1,2,3];  //m=3
	
	// 不定参数赋值
	let [x,y,...arr]=[1,2,3,4,5];     //x=1   y=2  arr=[3,4,5]

```

### 3.2 对象的解构赋值

```

	// 例1
	let {name：m,age:n}={name:"自己",age:12};
	console.log(m, n);  //自己  12

	// 例2
	let {name: name,age: age}={name:"自己",age:12};
	console.log(name, age);  //自己  12

	//如果变量名和属性名一样，可直接省略写法，即例2可简写为下面
	let {name,age}={name:"自己",age:12};
	console.log(name,age);  //自己  12

```

设置默认值

- 和数组差不多

```
	
	let {name, age=18} = {name: "zj"}
	console.log(name, age)  // zj 18

```

嵌套

```

	let {name,age,list:[a,b,c]}={name:"JJ",age=12,list:[1,2,3]};
	console.log(name,age,a,b,c);    //JJ 12 1 2 3

```

注意事项

```

	// 数组解构赋值
	// 先声明
	let a,b
	[a, b] = [1, 2]
	console.log(a, b) // 1, 2

	// 对象解构赋值
	let name,age
	{name, age} = {name: 'zj', age: 18}
	console.log(name, age) // 会报错，因为{}不能放在行首，只能以下来解决

	let name,age;
	({name, age} = {name: 'zj', age: 18})
	console.log(name, age) // zj 18

```

### 3.3 其他类型的解构赋值

- 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
- 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

```

	let [x,y]="123";
	console.log(x,y);   //1  2
	let [x,y]=1; //报错

```

```

	let {toString: s} = 123;
	s === Number.prototype.toString // true

```

### 3.4 函数参数的解构赋值

```

	function move({x = 0, y = 0} = {}) {
	  return [x, y];
	}
	
	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]     -->解释：发现实参为undefined，会执行 {x = 0, y = 0} = {}

```

```

	function move({x, y} = { x: 0, y: 0 }) {
	  return [x, y];
	}
	
	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, undefined]
	move({}); // [undefined, undefined]  -->解释：发现实参不是为undefined，没有会执行 {x, y} = { x: 0, y: 0 }；而执行{x, y} = {}
	move(); // [0, 0]

```