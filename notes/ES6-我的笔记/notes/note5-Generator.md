2019/7/15 20:13:12 

## `Generator`函数的语法

### 1. 简介

***`Generator` 函数是`ES6`提供的一种异步编程解决方案。***

形式上， `Generator`函数是一个普通函数，但有两个特征

1. `function`关键字与函数名之间有一个星号
2. 函数体内部使用`yield`表达式，定义不同的内部状态（yield翻译为产出）



#### yield表达式

```javascript

	function* foo() {
		console.log("start");
		yield 1;
		console.log("continue");
		yield 2;
		return 3;
	}
	
	// 相当于返回一个指针给fun
	var fun = foo();

	/* 
	* 第一步 
	*/
	fun.next();
	// 调用next方法，指针停在下面的位置，并将yield后的结果返回
	// ---> yield 1;

	/*
	* 第二步	
	*/
	fun.next();
	// --> yield 2;

	/*
	* 第三步
	*/
	fun.next();
	// 直到return结束。没有return语句，则默认return undefinded

	/*
	* 第四步
	*/
	fun.next();
	// 之后都是undefinded

```

| step | description(指针停止位置) |              output              |
| :--: | :-----------------------: | :------------------------------: |
|  1   |       --> yield 1;        |  start {value: 1, done: false}   |
|  2   |       --> yield 2;        | continue {value: 2, done: false} |
|  3   |           结束            |      {value: 3, done: true}      |
|  4   |             -             |  {value: undefined, done: true}  |




#### 与`Iterator`接口的关系

```

	function* gen(){
	  	yield 1;
	  	yield 2; 
		yield 3
	}
	
	var g = gen();
	
	g[Symbol.iterator]() === g;  // true
	[...g];  // [1, 2, 3]

```



### 2. next方法的参数

```javascript

	function* foo(x) {
	  var y = 2 * (yield (x + 1));
	  var z = yield (y / 3);
	  return (x + y + z);
	}
	
	var a = foo(5);
	a.next() // Object{value:6, done:false}
	a.next() // Object{value:NaN, done:false}
	a.next() // Object{value:NaN, done:true}
	
	var b = foo(5);
	b.next() // { value:6, done:false }
	b.next(12) // { value:8, done:false } 
	b.next(13) // { value:42, done:true } 5+24+13

```

注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。



### 3. 应用

举例-解决异步请求

```javascript
function fun() {
    let gen = myGenerator();
    gen.next();

    function sendRequset(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 拿到响应的url，再次请求
                    gen.next(JSON.parse(xhr.responseText).personUrl);
                }
            }
        }
        xhr.send(null);
    }

    function* myGenerator() {
        let url = yield sendRequset("http://127.0.0.1:3000/comments");
        yield sendRequset(url);
    }
}
```







