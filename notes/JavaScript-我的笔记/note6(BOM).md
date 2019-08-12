2019/3/15 19:58:37 
## BOM

> 浏览器对象模型

- BOM可以使我们通过JS来操作浏览器
- BOM对象
	- Window
		- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
	- Navigator（航海家）
		- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
	- Location
		- 代表当前浏览器的地址信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
	- History
		- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
	- Screen
		- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

> 这些BOM对象在浏览器中都是作为window对象的属性保存的。可以通过window对象来使用，也可以直接使用

```

	console.log(navigator);
	console.log(window.navigator); //这两行代码等价
```

