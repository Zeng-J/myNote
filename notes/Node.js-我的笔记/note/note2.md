2019/3/26 19:59:10  
## 1. 服务端渲染

### 客户端渲染

1. 收到服务端响应的字符串（index.html）
2. 从上到下依次解析，在解析的过程中，如果发现ajax请求，则再次发起新的请求
3. 拿到ajax响应请求
4. 模板引擎渲染

### 服务端渲染

1. 客户端发送请求
2. 服务端读取文件（如index.html）
3. 模板引起渲染，在发送客户端之前，我在服务端就已经把index.html渲染处理了

### 服务端渲染和客户端渲染的区别

- 客户端渲染不利于 SEO 搜索引擎优化
- 服务端渲染时可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
- 真正的网站既不是纯异步也不是纯服务端渲染出来的，而是两者结合来做的
	- 例如京东的商品列表就采用的是服务端渲染，目的是为了 SEO 搜索引擎优化
	- 而它的商品评论列表为了用户体验，而且也不需要 SEO 优化，所以采用客户端渲染


### 静态资源

>  浏览器收到 HTML 响应内容之后，就要开始从上到下依次解析，当在解析的过程中，如果发现`link`、`script`、`img`、`iframe`、`video`、`audio`等带有`src`或者`href`（这个只有link）属性标签（具有外链的资源）的时候，浏览器会自动对这些资源发起新的请求

2019/3/27 14:57:36 

### 如何通过服务器让客户端重定向？
1. 状态码设置为 302 临时重定向
	- `res.statusCode`

2. 在响应头通过 Location 告诉客户端往哪儿重定向
	- `res.setHeader('Location', '/')` 


## 2. 模块系统

使用Node编写应用程序主要就是在使用：

1. EcmaScript语言
2. 核心模块
	- 文件操作的fs
	- http服务的http
	- url路径操作的模块
	- path路径处理模块
	- os操作系统信息
	- ......
3. 第三方模块
4. 自定义模块

### 2.1 什么是模块化

- 文件作用域
- 通信规则
	- 加载 require
	- 导出

### 2.2 CommonJS 模块规范

> 在Node中的JavaScript还有一个很重要的概念，模块系统。

- 模块作用域
- 使用`require`方法用来加载模块
- 使用`exports`接口对象用来导出模块中的成员

> ---

##### 加载 `require`

语法

```var 自定义变量名称 = require('模块')
```

两个作用

- 执行被加载模块中的代码
- 得到被加载模块中的 `exports` 导出接口对象

###### require 方法加载规则

1. 优先从缓存加载
2. 判断模块标识 
	- 核心模块
		+ 模块名
	- 第三方模块
		+ 模块名
	- 自定义模块
		+ 路径



> ---

##### 导出 `exports`

- Node中是模块作用域，默认文件中所有的成员只在当前文件模块有效
- 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到 `exports` 接口对象中

###### 导出多个成员（必须在对象中）

```

	exports.a = 123
	exports.b = 'hello'
	exports.c = function () {
		console.log('hello')
	}
	......

```

###### 导出单个成员（函数、字符串）

``` module.exports = 'hello' ```

也可以这样来导出多个成员

```

	module.exports = {
		add: function () {
			return 2
		},
		atr: 'hello'
	}

```

###### module.exports 和 exports 的区别

- 在Node中，每个模块内部都有一个自己的module对象
- 该module对象中，有一个属性为exports，也是一个对象，但为空对象

```

	//Node官方为了简化开发者的操作,每个模块默认有以下一句代码
	var exports = module.exports


	//每个模块代码最后默认执行这句,谁来require这个模块，就能得到 module.exports
	return module.exports

``` 

### 2.3 path路径操作模块

- path.basename
	- 获取一个路径的文件名（默认包含扩展名）
- path.dirname
	- 获取一个路径中的目录部分
- path.extname
	- 获取一个路径中的扩展名部分
- path.parse
	- 把一个路径转为对象
- path.join
	- 路径拼接
- path.isAbsolute
	- 判断一个路径是否为绝对路径


### 2.4 Node中的其他成员

在每个模块中，除了`require`、`exports`等模块相关API之外，还有两个特殊的成员

- `__dirname` **动态获取** 可以用来获取当前文件模块所属目录的绝对路径
- `__filename` **动态获取** 可以用来获取当前文件的绝对路径 








<br><br><br>

2019/3/28 12:28:40 

## 3. npm

> node package module

常用命令

- npm init
	- npm init -y 可以跳过向导，快速生成`package.json`
- npm install
	- 一次性把`dependencies`选项中的依赖全部安装
- npm install 包名
	- 简写 npm i 包名
	- 只下载，不记录在`denpendencies`
	- npm 5 以后的版本安装包不需要加 `--save` 参数，它也会自动保存依赖信息
- npm install --save 包名
	- 简写 npm i -S 包名
	- 下载并且保存依赖项
- npm uninstall 包名
	- 简写 npm un 包名
	- 只删除，如果有依赖项会依然保存
- npm uninstall --save 包名
	- 简写 npm un -S 包名
	- 删除的同时也会把依赖信息去除





<br><br><br>

## 4. package.json

> 包描述文件：每个项目都会有一个`package.json`文件（包描述文件，就像说明书一样）

这个文件可以通过`npm init`的方式自动初始化出来。（也可以自己创建）

文件中 `dependencies` 描述我们安装的依赖。如果我们删除了`node_module` 文件夹，命令行中输入`npm install`就会根据`dependencies`安装我们之前安装的包


### 4.1 package.json 和 package-lock.json的区别

> npm 5 以前是不会有 `package-lock.json`这个文件的。npm 5 以后才加入这个文件。

当你 `npm init`初始化，不会生成 `package-lock.json` 文件。

当你安装包的时候，npm都会生成或者更新 `package-lock.json` 文件

- `package-lock.json` 这个文件会保存 `node_modules` 中所有包的信息（版本、下载地址等)
	- 这样的话重新 `npm install` 的时候速度就可以提升
- `package-lock.json` 还可以锁定你的项目依赖包的版本
	- 例如项目依赖某个包，其版本为 `1.1.1`。如果你重新 `npm install` ，则 npm 会下载这个依赖包的最新版本，而不是你项目想要依赖的 `1.1.1`版本。所以 `package-lock.json`还有该作用，即锁定版本号，防止自动升级新版。  






<br><br><br>

## 5. 基础搭建http服务

```

	var http = require('http')
	
	var server = http.createServer()
	
	server.on('request',function(req,res){
	    res.setHeader('Content-Type','text/plain; charset=utf-8')
	    res.end('hello 世界')
	})
	
	server.listen(3000,function(){
	    console.log('Server is running...')
	})

```



## 6. Express

> 基于 Node.js 平台，快速、开放、极简的 Web 开发框架

### hello world

```

	var express = require('express')
	
	var app = express()

	app.get('/', function(req, res) {
	    // res.write('hello')
	    // res.write('world')
	    // res.end('!')
	    res.send('hello world')
	})
	
	app.listen(3000, function () {
	    console.log('Server running......')
	})

```

### 基本路由

###### get

```

	app.get('/', function(req, res) {
    	res.send('hello world')
	})

```

###### post

```

	app.post('/', function(req, res) {
   		res.send('hello world')
	})

```

### 静态服务

> 开发服务器中的某文件夹，客户端可直接访问该文件夹内的所有文件

```

	app.use('/public/', express.static('./public/'))

	app.use('/', express.static('./public/'))

	app.use(express.static('./public/'))

```

### 在 `Express` 中配置使用 `atr-template` 模板引擎

安装

- `npm install --save art-template`
- `npm install --save express-art-template`

配置

```
	
	// 'art'为文件后缀名，也可改为'html'
	app.engine('art', require('express-art-template'))

```

使用

```

	app.get('/', function (req, res) {
		//express 默认会去项目中的views目录中找index.art
		res.render('index.art', {
			// 要渲染的数据，如
			title:'首页'
		})
	})

	// 如果希望修改默认寻找的views文件夹，你可以如下
	app.set('views', 想更换目录路径)

```


### 在 `Express` 获取表单GET请求体数据

> Express内置了一个API，可以直接通过 `req.query`来获取数据




### 在 `Express` 获取表单POST请求体数据

> 在 `Express` 中没有内置获取表单POST请求体的API，这里我们需要使用一个第三方包： `body-parser`

安装

`npm install --save body-parser`

配置

```
	
	var express = require('express')

	var bodyParser = require('body-parser')

	var app = express()

	//只要加入这个配置，则在 res 请求对象上会多出来一个属性 body
	app.use(bodyParser.urlencoded({ extended: false }))

	app.use(bodyParser.json())

	
	
```



<br><br><br><br>

## 其他

### 修改完代码自动重启文件

> 我们可以使用一个第三方命令行工具 `nodemon` ，来帮我们解决频繁修改代码重启服务器问题

- 安装
	- `npm install nodemon --global`
- 使用
	- `nodemon 文件名`

只要是通过 `nodemon` 启动的服务，它会监视文件的变化。当文件发生变化的时候，自动帮你重启服务器。