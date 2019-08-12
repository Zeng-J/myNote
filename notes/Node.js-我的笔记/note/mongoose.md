2019/4/5 21:36:28

## MongoDB 数据库的基本概念

- 数据库
- 集合
- 文档

```

	{
		// qq数据库
		qq:{
			// users集合
			users:[
				// 文档
				{name:'李白',age:18},
				{name:'刘邦',age:45},
				{name:'杜甫',age:19},
				{name:'白居易',age:28},
			],
			// goods集合
			goods:[]
		},
		// taobao 数据库
		taobao:{}
	}

```
 
## 2. 起步

### 安装

`npm i mongoose`

### hello world

```

	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
	
	const Cat = mongoose.model('Cat', { name: String });
	
	const kitty = new Cat({ name: 'Zildjian' });
	kitty.save().then(() => console.log('meow'));

```

## 3. 指南

### 3.1 设计 Schema 发布 Model

```

	const mongoose = require('mongoose')

	var Schema = mongoose.Schema
	
	// 1. 连接数据库
	mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
	
	// 2. 设计集合结构（表结构）
	var userSchema = new Schema({
	    username:{
	        type:String,
	        required:true
	    },
	    password:{
	        type:String,
	        required:true
	    },
	    email:String
	})
	
	// 3. 将文档结构发布为模型,返回模型构造函数
	const User = mongoose.model('User', userSchema);
	
```

### 3.2 增加数据


```

	const amdin = new User({ username: 'james' , password: '174',email:'28956@qq.com' })
	
	amdin.save()
	 .then(() => console.log('保存成功'))
	 .catch(() => {console.log('保存失败')})

```

### 3.3 查询数据

```

	// ===============查询数据========================================
	// // ----------查询所有----------------
	// User.find()
	// .then((res) => console.log('查询成功',res))
	// .catch(() => {console.log('查询失败')})
	
	// // ----------条件查询----------------
	// User.find({username:'Zildjian'})
	// .then((res) => console.log('查询成功',res))
	// .catch(() => {console.log('查询失败')})
	
	// ----------条件查询单个----------------
	User.findOne({username:'Zildjian', password: '1456',})
	.then((res) => {
	    if (res) {
	        return console.log('查询成功',res)
	    }
	    console.log('查询失败')
	})
	.catch(() => {console.log('查询失败')})

```

### 3.4 删除数据

```

	//===============删除数据========================================
	User.remove({username:'james'})
	.then((res) => {console.log(res)})

```

根据条件删除一个

`User.findOndeAndRemove(conditions, [options], [callback])`

根据id删除一个

`User.findByIdAndRemove(id, [options], [callback])`


### 3.5 更新数据

```

	//===============更新数据========================================
	User.findByIdAndUpdate('5ca754931ee35a4ef4eeb037', {username:'ivring'})
	.then((res) => {
	    console.log('更新成功', res)
	})
	.catch(err => {
	    console.log('更新失败', err)
	})

```