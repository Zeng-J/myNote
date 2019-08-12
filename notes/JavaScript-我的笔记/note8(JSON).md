2019/3/18 19:38:57 

## 类的操作

```

	//封装为标签添加class的函数
	function addClass(obj,cn){
		if(!hasClass(obj,cn)){
			obj.className += ""+cn;
		}
	}

	function hasClass(obj,cn){
		// var reg = /\bcn\b/;
		var reg = new RegExp("\\b"+cn+"\\b");
		return reg.test(obj.className);
	}

	function removeClass(obj,cn){
		var reg = new RegExp("\\b"+cn+"\\b");
		obj.className=obj.className.replace(reg,"");	
	}

```

## JSON

> JS中的对象只有JS自己认识，其他的语言都不认识

- JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
- JSON全写
	- JavaScript Object Notation
- JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号

### JSON分类

1. 对象{}
2. 数组[]

### JSON中允许的值

1. 字符串
2. 数值
3. 布尔值
4. null
5. 对象
6. 数组


### JSON字符串转换为JS中的对象

- 在JS中，为我们提供了一个工具类，就叫JSON
	- JSON-->JS对象
		- JSON.parse()
	- JS对象-->JSON
		-  JSON.stringify()

```

	var obj = '{"name":"zj","age":18,"gender":"男"}';


```

IE7及以下的浏览器不能识别JSON

### eval()
- 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
- 如果使用eval()执行的字符串中含有{}，它会将{}当成是代码块
	- 如果不希望将其当成代码块解析，则需要在字符串前后各加一个（）

- 实际开发中尽量不要使用eval()，因为其执行性能差，并且有安全隐患

```

	var str1 = "console.log('456')";
	eval(str1);   //输出456

	var str2 = '{"name":"zj","age":18}';
	var res = eval("("+str2+")");
	console.log(res); //输出对象{"name":"zj","age":18}
```

> 如果需要兼容IE7及以下的浏览器实现JSON操作，则可以通过引入一个外部的js文件来处理

##至此，学完JS所有课程，为自己鼓个掌，啪啪啪！！！记得常回来复习哦。