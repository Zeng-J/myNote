2019/5/29 17:43:55 
## 1. vue中数据绑定了一个对象/数组，然后改变对象里的属性值，实现不了双向绑定

现需要将后端返回的数据（数组），给其中的每一个对象添加一个属性

```

	<template>
        <div v-for="(item,index) in list" :key="index">
          <a-checkbox :checked="item.key" @change="onChange(index)"> {{item.goodsName}}</a-checkbox></
        </div>
	</template>
	<script>
		data(){
			return {
				list: []	
			}
		},
		created(){
			this.getList()
		},
		method: {
		    onChange(i){
		      this.mylist[i].key = !this.mylist[i].key
		    },
			getList() {
				// 模拟后端数据
				res = [{id:'1',name:'1'}, {id:'1',name:'1'}]
				
		        
				// 现在给list赋予后端返回的数组，并且数组中每个对象添加一个属性key
		        this.list = res
				for (let i=0; i<this.list.length; i++) {
		        	this.list[i].key = true
		        }
			}
		}
	</script>

```


###### 以上为错误代码，添加的属性`key`不能与`checkbox`中的`checked`属性实现双向绑定

`checkbox`点击时，不能够以打勾/不打勾状态进行切换（即没有实现到双向绑定）



###### 这其实也是非常简单的问题，但就是没有很快地转变思路过来。也即正确做法：应该先将数据处理完毕，才最终进行数据绑定（`this.mylist = arr`）。

需要将getList函数里面的代码改为如下：

```

		getList() {
		    // 模拟后端数据
			res = [{id:'1',name:'1'}, {id:'1',name:'1'}]
	
	        const arr = res
	        for (let i=0; i<arr.length; i++) {
	        	arr[i].key = true
	        }
	        this.list = arr
		}

```

###### 如果实在需要对数据赋予初始对象/数组后，再去对绑定的数据（`this.list`）中属性进行操作的话，那么要用到$set()方法，来设置对象的属性

参考资料[https://blog.csdn.net/yibowanbo/article/details/80233051](https://blog.csdn.net/yibowanbo/article/details/80233051)

将getList函数里面的代码改为如下：

```

	getList() {
		// 模拟后端数据
		res = [{id:'1',name:'1'}, {id:'1',name:'1'}]
		
		// 现在给list赋予后端返回的数组，并且数组中每个对象添加一个属性key
        this.list = res
		for (let i=0; i<this.list.length; i++) {
        	this.$set(this.list[i], 'key', true)
        }
	}

```

<br/><br/><br/>

## 2. vue开发过程中，更改了路由配置后，在原来的标签页输入新的路由地址，不能够跳转至想要的页面

解决：

- 必须新开一个标签页
- 原因，可能是原来的标签页内存中存储的路由没有及时更新过来