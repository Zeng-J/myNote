2019/2/21 11:31:54 

## VUEX

- 什么是VUEX？
> Vuex是一个全局的共享数据存储区域，就相当于一个仓库。

> Vuex是为了保存组件之间共享数据而诞生的，如果组件之间有要共享的数据，可以直接挂载到vuex中，而不必通过父子组件之间传值了，如果组件的数据不需要共享，此时，这些不需要共享的私有数据，没有必要放到vuex中。

- 只有共享的数据，才有权利放到vuex中
- 组件内部私有的数据，只要放到组件的data中即可
- prop、data和vuex的区别？
	- prop存放从父组件传递过来的数据
	- data 存放私有数据
	- vuex存放共享数据


```

	var store=new Vuex.Store({
		state:{},
		mutation:{},
		getters:{}
	})

	const vm=new vue({
		el:'#app',
		data:{},
		store
	})
```