2019年1月17日
## Node.js介绍
### 为什么要学习Node.js

- 企业需求
- 了解整个网站的构建


### Web后台服务器使用的技术有

- Java
- PHP
- Python
- Ruby
- .Net   c#
- .....
- Node.js


### Node.js是什么

- Node.js不是一门语言
- Node.js不是库、不是框架
- Node.js是一个javaScript运行时环境
- 简单点来将就是Node.js可以解析和执行JavaScript代码
	- 以前只有浏览器可以解析执行JavaScript代码
	- 也就是说现在的JavaScript可以完全脱离浏览器来运行，一切都归功于——Node.js

###### 浏览器的JavaScript

- EcmaScript
	- 基本语法、变量、方法、数据类型、内置对象、Function、Object、Array....
- BOM
- DOM

###### Node.js中的javaScript

- EcmaScript(没有BOM、DOM)
- 在Node中为JavaScript提供了一些服务器级别的API
	- 文件操作的能力
	- http服务的能力
	- 。。。


###### Node.js的特性

- event-driven 事件驱动
- non-blocking I/O model 非阻塞I/O模型
- lightweight and efficient 轻量和高效


### Node.js能做什么

- Web服务器后台
- 命令行工具
	- npm(基于node开发)
	- git(基于c语言开发)
	- hexo(基于node开发)
	- .....

### 预备知识

- HTML、CSS、js、命令行操作、具备服务器开发经验更佳


### 一些资源

- 《深入浅出Node.js》
- 《Node.js权威指南》
- Node.js入门(https://www.nodebeginner.org/index-zh-cn.html)
- ......


### 学到啥？

- B/S编程模型
	- Browser-Server
- 模块化编程
	- RequireJS
	- SeaJS
- Node常用API
- 异步编程
- Express开发框架
- EcmaScript 6
- ......



2019年1月18日
## 起步

- 安装Node环境
	- 对于已经安装的，重新安装就会升级

### Hello World

- 调取cmd命令

```

	//进入某个文件夹
	cd xxx

	// 返回上一个文件夹
	cd ..

	//清屏
	cls

	//按方向键键的上箭头，调取历史命令代码

	//执行某个文件
	node xxx.js

	//快捷键Tab
	输入node——再输入文件名（不输入完整）——按Tab，可以快速定位该文件 

	//还有很多
	
```


### Node中的JavaScript

**核心模块**

- fs文件操作
- http服务构建
- os操作系统信息（opreate system）
- path路径操作
- ......


**用户自定义模块**

**第三方模块**
	

### IP地址和端口号的概念

- ip地址
	- 用来定位计算机
	- 命令行输入ipconfig查看本机ip地址
- 端口号
	- 用来定位具体的应用程序
	- 一切需要联网通信的软件都会占用一个端口号
- 端口号的范围从0-65536之间
- 在计算机中有一些默认端口，最好不要去使用
	- 例如Http服务的 80

### 额外知识-代码风格

- 有很多代码规范的插件
	- JavaScript Standard Style
	- Airbnb JavaScript Style

- 当你采用无分号的代码风格的时候，只要注意以下情况就不会(语法解析错误)报错
	- 当第一行代码是以 ( 或者 { 或者 ` 开头的时候，在其前面加一个分号 ;

```

	functon say () {
		console.log('hello')	
	}
	
	say()
		
	(function (){
		console.log('nihao')
	})()
	
	//上述代码会报错，下面则不会

	functon say () {
		console.log('hello')	
	}
	
	say()
		
	;(function (){
		console.log('nihao')
	})()

```