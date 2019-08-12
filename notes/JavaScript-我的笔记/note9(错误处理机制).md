2019/7/22 21:07:54 

## 错误处理机制

### Error对象

`var err = new Error('出错了')`

- `Error`对象的实例属性
	- message
	- name(非标准属性)
	- stack(非标准属性)

### throw语句

`throw`语句的作用是中断程序执行，抛出一个意外或错误。


### try...catch结构

```

	try {
		throw new Error("出错了");
	} catch(e) {
		console.log(e.name + ": " + e.message);
		console.log(e.stack);
	}

```

### finally代码块

表示不管是否出现错误，都会运行该代码块语句

```

	function f() {
	  try {
	    console.log(0);
	    throw 'bug';
	  } catch(e) {
	    console.log(1);
	    return true; // 这句原本会延迟到finally代码块结束再执行
	    console.log(2); // 不会运行
	  } finally {
	    console.log(3);
	    return false; // 这句会覆盖掉前面那句return
	    console.log(4); // 不会运行
	  }
	
	  console.log(5); // 不会运行
	}
	
	var result = f();
	// 0
	// 1
	// 3
	
	result
	// false

```