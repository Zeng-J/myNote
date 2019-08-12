#new vue
	new一个vue实例
	new Vue({
		el:'#app',
		data:{
			mobile:null,    
			'user-mobile':13430200127 // 包含有- 则引号''必须添加	
		},
		methods:{},
		watch:{},
		computed:{}

		beforecreate(){},
		created(){},
		beforemount(){},
		mounted(){},
		......
	)}
	tips:最基本的el和data是必要的，其他根据情况添加

#2019年1月19日
#路由
##前端路由和后端路由的区别
......
##在vue中使用vue-router
1.导入`vue-router`组件类库

2.使用`router-link`组件来导航

3.使用`router-view`组件来显示匹配到的组件

4.创建使用`Vue.extend`创建组件

5.创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则

6.创建 Vue 实例，得到 ViewModel

#项目下各个目录：
	build---构建脚本目录
	config---构建配置目录
	mock---模拟接口目录
	src---源码目录
		components---组件目录
		router---路由目录
		-App.vue---页面级Vue组件
		-main.js---页面入口JS文件	
	static---静态文件目录
	-index.html---入口页面
	-package.json---项目描述文件   (在json文件内不能写注释，否则报错)

#整个项目运作流程
<!--
myNote:

1.进入一个页面

2.从main.js入口，import所有必要的组件工具，再通过`Vue.use`引用

3.由router路由判断路径，如.../login；则引用对应的数据和组件

4.从components目录下拿取对应的组件

5.将组件渲染到App.vue的`router-view`所提前占用好的坑里面

6.
	
	顺序
	src/main.js
	src/router/vue/router/xx.js
	src/compontens/xx.vue
	src/App.vue
	src/views/xx.vue
	index.html
-->	

网上资料(https://www.cnblogs.com/xifengxiaoma/p/9493544.html)
VUE启动流程

1.package.json
>执行npm run dev的时候，会在当前目录中寻找package.json文件

2.webpack.dev.conf.js
>启动webpack-dev-server

3.config/*.js
>服务器环境的配置文件

4.config/index.js
>服务器host和post以及入口文件的相关配置，默认启动端口是8080

5.index.html
>主要是提供一个div给Vue挂载

6.main.js
>引入vue、App和router模块，创建了一个Vue对象，并把App.vue模板的内容挂载到index.html的id为app的div标签下，并绑定一个路由配置

7.App.vue
>这里有一个logo和一个待放置内容的`router-view`，`router-view`的内容将由router配置决定

8.router/index.js
>判断访问路径
	
#2019年1月20日
#watch
	<input type='text' v-model='name'>
	......
	watch:{
		name:function(newval,oldval){}
	}  
##watch监听路由
	watch:{
		'router.path':function(newVal,oldVal){}
	}

#computed
	//只要计算属性中，function内部所用到的任何data数据发生变化，就会重新计算这个计算属性的值
	//注意function一定要return
	computed:{
		'fullname':function(){
		return this.firstname+this.lastname
		}
	}

#npm和nrm的区别
nrm只是单纯地提供了几个常用的下载包的URL地址，并能够让我们在这几个地址之间，很方便的进行切换。但是，我们装包的时候，使用的装包工具都是npm。

#Webpack
##在网页中会引用很多静态资源
......
##网页中引入的静态资源多了以后有什么问题？
网页加载速度慢，因为我们要发起很多的二次请求；要处理错综复杂的依赖关系
##如何解决上述问题
1.合并、压缩、精灵图、图片的Base64编码

2.requireJS、webpack
##什么是webpack
webpack是前端的一个项目构建工具，它是基于Node.js开发出来的一个前端工具 

2019年2月15日

##npm run build的作用
我的理解：

在利用node.js开发环境下开发的项目，你执行npm run dev，就可以观看页面具体效果。

但是你不想基于node.js环境下，直接本地打开项目中的index.html，是会报错的，看不到页面。因此必须npm run build打包编译代码，最终产生dist文件夹，这时再本地打开dist文件夹下的index.html，即可看到UI页面