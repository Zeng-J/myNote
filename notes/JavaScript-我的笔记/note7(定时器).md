2019/3/17 13:24:36
 
## 定时器

### setInterval()
- 可以将一个函数，每隔一段时间执行一此次
- 它会返回一个值
	- Number类型的值
	- 这个数字用来作为定时器的唯一标识

```

	var num=0;
	setInterval(function(){
		num++;
	},1000);

```

### clearInterval()

```

	var num=0;
	var timer=setInterval(function(){
		num++;
	},1000);
	
	if(num == 11){
		clearInterval(timer);	
	}

```

###setTimeout()

###clearTimeout()

