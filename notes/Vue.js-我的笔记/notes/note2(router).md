2019/2/20 10:34:25 
##路由

```

	vue routerObj=new VueRouter({
	routes:[
		{path:'/',redirect:'/login'}
		{path:'/login',component:login}
	]
	})
```

```

	vue routerObj=new VueRouter({
	routes:[
		{path:'/',redirect:'/login'}
		{
			path:'/account',
			component:account
			children:[
				{path:'login',component:login},
				{path:'register',component:register}
			]
		}
	]
	})
```