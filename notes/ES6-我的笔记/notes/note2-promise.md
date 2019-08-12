2019/2/28 19:05:28 

# 目录

- promise


## 1. promise

- promise简单地说就是一个容器，保存着某个未来才会结束的事情的结果。有了promise对象，就可以将异步操作以同步操作的流程表达出来，避免层层嵌套的回调函数。 
- promise()的参数是一个函数，这个函数里有两个参数，也是函数，为resolve、reject

成功就执行resolve，失败就执行reject

```

	let pro1=new Promise((resolve,reject) =>{
		if（/* 异步操作成功 */）{
			resolve("success");
	 	} else {
			reject("error");
		}
	})

```

- Promise的本质是干什么？就是单纯的为了解决回调地狱的问题，并不能为帮我们减少代码
- Promise是一个构造函数
- Promise表示一个异步操作
- Promise中有.then()方法
- new一个Promise时，会立即调用我们为Promise构造函数传递的那个function，执行这个function中的异步操作代码


基础模板

```

	// 定义一个函数
	function get(){
		var pro=new Promise(function(){});
		return pro;
	}

	// 使用
	var p=get();
	p.then(
		// success
		function(){}, 
		// failure,这个参数，即第二个参数是可选的
		function(){}
	)
```

promise一旦创建，会立即执行且不能停止

```

    // promise创建后就会立即执行
    let promise = new Promise(function (resolve, reject) {
        console.log('Promise');
        resolve();
    });
    promise.then(function () {
        console.log('resolved.');
    });
    console.log('Hi!'); // 输出顺序 Promise Hi! resolved. 

```



实例

```

	//定义函数
	function get(url, params) {
      return new Promise((resolve, reject) => {
	      axios.get(url, {
	          params: params
	        })
	        .then(res => {
	          resolve(res.data);
	        })
	        .catch(err => {
	          reject(err.data);
	        });
    	});
	}


	//使用函数
    get("/user",1)
    .then(data => {
    	this.username=data.name; 
    })
    .catch(err => {
      	console.log(err);
    })

```

### 1.1 Promise.prototype.then()

then方法有两个参数，一个为resolved的回调函数,一个为rejected的回调函数（一般不常用）

### 1.2 Promise.prototype.catch()

```
	
	p.then((val) => console.log('fulfilled:', val))
	  .catch((err) => console.log('rejected', err));
	
	// 等同于
	p.then((val) => console.log('fulfilled:', val))
	  .then(null, (err) => console.log("rejected:", err));

```

### 1.3 Promise.prototype.finally()

```

    // 4. finally必会执行 finally方法的回调函数不接受任何参数
    const promise = new Promise(function (resolve, reject) {
        resolve('ok')
    });
    promise
    .then(res => {
        console.log(res)
    })
    .finally(() => {
        console.log('finally')
    })
	// 输出 ok finally

```

### 1.4 Promise.prototype.all()

将多个Promise实例，包装成一个新的Promise实例

```

	// 全为fulfilled
	const p1 = new Promise((resolve, reject) => {
	  resolve('hello');
	})
	
	const p2 = new Promise((resolve, reject) => {
	  resolve('ni hao');
	})
	
	Promise.all([p1, p2])
	.then(result => console.log(result)) // 输出 ["hello", "ni hao"]
	.catch(e => console.log(e));


	// 有一个为rejected
	const p1 = new Promise((resolve, reject) => {
	  resolve('hello');
	})
	
	const p2 = new Promise((resolve, reject) => {
	  throw new Error('报错了');
	})
	
	Promise.all([p1, p2])
	.then(result => console.log(result))
	.catch(e => console.log(e)); // Error: 报错了

```

### 1.5 Promise.prototype.race()

和Promise.all方法一样，将多个Promise实例，包装成一个新的Promise实例

任意一个Promise实例先改变状态，则执行回调