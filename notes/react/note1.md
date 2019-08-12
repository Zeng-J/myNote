# React

## 1. Diff算法（different）

tree diff新旧两颗DOM树，逐层对比的过程，就是Tree Diff

<br /><br />

## 2. JSX简介

下面的变量声明

`const element = <h1>Hello,world!</h1>`

这既不是字符串，也不是HTML。它被称为JSX(符合XML规范的JS语法)，是一个JavaScript的语法扩展。

### JSX特定属性

- 你可以通过使用引号，来将属性值指定为字符串字面量

	`const element = <div tabIndex="0"></div>;`

- 也可以使用大括号，来在属性值中插入一个JavaScript表达式：

	`const element = <img src={user.avatarUrl}></img>;`

- 对于同一属性不能同时使用这两种符号。

### JSX表示对象

```
	
	const element = (
		<h1 className="greeting">
			Hello, world!
		</h1>
	);

```

等价于下段代码

```

	const element = React.creatElement(
		'h1',
		{className: 'greeting'},
		'Hello world!'
	);

```

实际创建如下的对象

```

	// 注意：这是简化过的结构
	const element = {
		type: 'h1',
		props: {
			className: 'greeting',
			children: 'Hello, world!'
		}
	};

```

### JSX语法

- 在JSX中，如果要为元素添加`class`属性，那么必须写成`className`，因为`class`在ES6中是一个关键字。

<br /><br />

## 3. 元素渲染

<br /><br />

## 4. 组件&Props

```

	function Welcome(props) {
		return <h1>Hello, {props.name}</h1>;
	}

```

等价于下面的组件写法

```

	class Welcome extends React.Component {
		render() {
			return <h1>Hello, {this.props.name}</h1>;
		}
	}

```

### Props的只读性

纯函数——不更改入参

```

	// 纯函数
	function sum(a, b) {
		return a + b;
	}

	// 不是纯函数
	function withraw(account, amount) {
		account.total -= amount;
	}

```

<br /><br /><br />

## 5. State&生命周期

### 正确使用State

1. 不要直接修改State
2. ***State的更新可能是异步的***
3. State的更新会被合并 


### 数据是向下流动的



<br /><br />

## 6. 事件处理

<br /><br />

## 7. 有状态组件和无状态组件的对比

- 无状态组件
	- 使用function构造函数创建的组件，内部没有state私有数据，只有一个props来接受外界传递过来的数据
- 有状态组件
	- 使用class关键字创建的组件，内部除了有this.props这个只读属性之外，还有一个专门用于存放自己私有数据的this.state属性，这个state是可读可写的。
- 有无状态组件的本质区别
	- 有无state属性
	- 有无生命周期
	- 无状态组件运行速度会快一些


<br /><br />


## 8. React中绑定this并传参的三种方式

```

	class Foo extends React.Component{
		constructor(props) {
			super(props);
			
			// 方式2 bind不会修改原函数，但会返回修改后的函数
			this.show2 = this.show2.bind(this, "way2");
		}

		render() {
			return <div>
				// 方式1
				<button onClick={this.show1.bind(this, "way1")}>点我1</button>

				// 方式2 eg: 方式1和2其实是同一写法，只是写的位置不一样
				<button onClick={this.show2}>点我2</button>

				// 方式3 箭头函数
				<button onClick={() => this.show3("way3")}>点我3</button>
			</div>
		}

		show1(msg) { console.log(msg) }
		show2(msg) { console.log(msg) }
		show3 = (msg) => { console.log(msg) }
	}

```


<br /><br />

## 9. 额外知识

### class关键字

### 面向对象语言的三大特性

- 封装
- 继承
- 多态