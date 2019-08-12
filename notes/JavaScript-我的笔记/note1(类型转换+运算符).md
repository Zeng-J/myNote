2019/2/18 11:01:49
## JavaScript

- ECMAScript
- DOM
- BOM


## JS的特点

- 解释型语言
- 类似于C和Java的语法结构
- 动态语言
- 基于原型的面向对象
> 不理解特点，往后学习

## 输出语句

- alert（）
- document.write（）
- console.log（）


输入语句，如prompt()

## 引入js代码

- 可以将js代码编写到标签的onclick属性中

`<button onclick="alert('你点我了')">点我</button> `

- 可以将js代码写在超链接的href属性中

`<a href="javascript:alert('你按我了')">快按我</a>`

- 可以将js代码编写到sript标签中

- 可以将js代码编写到外部js文件中
	- 优点：可在不同页面同时引用

## 基本语法

### 注释

- 多行注释  `/*   */`
- 单行注释  `//`

### 规则

- JS中严格区分大小写
- JS中每一条语句以分号；结尾
> 开发中分号必须写。不写分号，浏览器会自动添加，但会消耗资源

- JS中会忽略多个空格和空行

## 字面量

- 都是一些不可改变的值。如1、2、50

## 变量

- 可保存字面量
- 使用变量
	- 声明变量（使用var关键字,var a）
	- 变量赋值（a=2）



## 标识符

- 在JS中我们可以自主命名的
- 例如，变量名、函数名、属性名
- 规则
	1. 可含有字母、数字、_、$
	2. 不能以数字开头
	3. 不能使ES中的关键字或保留字
	4. 一般采用驼峰命名法（非强制要求，但一般这么写）
		- 首字母小写，每个单词的开头字母大写，其余小写。如：hellOWorld
- js底层保存标识符时实际上是采用的Unicode编码
	- 所有的utf-8中含有的内容都可以作为标识符（中文字可行），如var 变量=52
	

	
## 数据类型

> 指的是***字面量***的类型


### 六种类型

- String 字符串
- Number 数值
- Boolean 布尔值
- Null 空值
- Undefined 未定义
- Object 对象
	
> 前五种属于基本数据类型，Object属于引用数据类型


### 使用一个运算符typeof来检查一个变量的类型

- 语法： typeof 变量
- 如，console.log(typeof a)

### String字符串

- 使用单引号或双引号，如 var str='hello';
- 单双混用，如 var str="我说：'今天下雨！'"
- 使用转义符，如 var str="我说：/"今天天晴！/""

- 注意区别
	- 这是输出字面量 字符串str  `alert("str")`
	- 这是输出变量str  `alert(str)`  



### Number数值

- 包括整数和浮点数（小数）
- js中可以表示的数字最大值
	- Number.MAX_VALUE
	- 超过最大值，会返回Infinity（正无穷,-Infinity为负无穷）
- js大于0的最小值
	- Number.MIN_VALUE
- NaN是一个特殊数字
	- 表示Not A  Number
	- 使用typeof检查NaN和Infinity都是Number


### Boolean布尔值

- 只有两个
- true
	- 表示真
- false
	- 表示假

### Null控制

- 只有一个，就是null
- 专门表示一个空对象
- 注意：使用type检查，返回为object

### Undefined未定义

- 只有一个，就是undefined
- 使用typeof检查，返回为undefined

```

	var a;
	console.log(a);//返回为undefined
	console.log(b);//报错

```

## 强制类型转换

### 转换为String
- 方式一   toString()方法
	- 不会影响原变量，它会返回结果
	- 注意：null和undefined没有toString()方法
	
```

	var a=123;

	b=a.toString();

	console.log(typeof a);//number

	console.log(typeof b);//string

```

- 方式二    String()函数
	- 使用String()函数做强制类型转换时，
		1. 对于Number和Boolean实际上就是调用的toString方法
		2. 对于Null和Undefined,就不会调用
			- 它会将null直接转换为"null",将undefined直接转换为"undefined"

```

	var a=123;

	b=String(a);

	console.log(typeof a);//number

	console.log(typeof b);//string
```


### 转换为Number

- 方式一 Number()函数
	- 使用方法和String()一样
	- 字符串-->数字
		1. 如果纯数字的字符串，则转为数字
		2. 若果有非数字的字符串，如a="12bs"，则转换为NaN
		3. 若果字符串为空或全是空格的字符，则转为0
	- 布尔值-->数字
		- true转为1
		- false转为0
	- 空值-->数字
		- null转为0
	- 未定义-->数字
		- undefined转为NaN
- 方式二 
	- 专门对付字符串
	- parseInt()函数
		- 转换整数
	- parseFloat()函数
		- 转换浮点数
	- 对于非String使用parseInt()和parseFloat()函数，它会先转换为String，再转为数字(NaN)
	
```

	a="123px65";
	b="123.68";
	c="a123";
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);

	console.log(a);//123
	console.log(b);//123
	console.log(c);//NaN

	parseInt(true)； // NaN
	parseInt(null)； // NaN
	parseInt(undefined)； // NaN

```

- 在Js中，16进制数字，以0x开头
	- 注意是数字0
- 在Js中，8进制数字，以0开头
- 在JS中，2进制的数字，以0b开头
	- 2进制写法，不是所有浏览器支持
- parseInt()可以传递第个二参数，来指定数字的进制
	- parseInt(a,10)或parseInt(a,8)


### 转换为布尔值

- 方式一 Boolean()函数
	- 数字-->布尔值
		- 除了0和NaN，其余都是true
	- 字符串-->布尔值
		- 除了空字符串，其余都是true
	- 空值-->布尔值、未定义-->布尔值
		- 都是false
	- 对象也会转换为true

- 方式二 隐式类型转换
	- 为任意的数据类型做两次非运算


## 运算符（操作符）

如，typeof就是运算符

### 算数运算符

>当对非Number类型的值进行运算时，会将这些值转换为Number,然后再运算
>
>任何值和NaN运算都得NaN 
	
#### +

- 如果两个字符串相加，则会拼接为字符串
- 任何值和字符串做加法运算，都会先转换为字符串，再拼接为字符串	
> c=c+""; 这一特点功能相当于String()函数


#### -
- 注意：除了加法运算，字符串做其余运算还是会转为Number，再运算
> d=d-0;这一特点功能相当于Number()函数


#### /
#### * 
#### %

```

	result=true+1;  //2
	result=true+false;   //1
	result=2+null;   //2
	result=2+NaN;   //NaN
	result="123"+"456";   //"123456"
	result="123"+1;   //"1231"
	result="hello"+true;   //"hellotrue"
	result=1+2+"3";   //"33"
	result=100-"1";   //99  还是数值
	result=2*undefined;   //NaN
	result=2*null;   //0

	console.log(result);

```

#### 一元运算符

- 正号 +
- 负号 -

```

	var a=123;
	a=+a;  //123 不变
	a=-a;  //-123

	var b="18";
	b=+b;   //18 变为数值

	var res=1++"2"+3; //6
```

#### 自增

> 变量自身+1
	
- 无论a++ 还是++a，都会立即使原变量的值自增1
- a++的值等于原变量的值（自增前的值）
- ++a的值等于新增（自增后的值） 

```

	var a=1;
	var b=++a; //b=2,a=2
	var c=a++; //c=2,a=3
 	var b=a++; //b=3,a=4  a的值一定改变
	
	var d=20;
	var res=d++ + ++d + d; //20+22+22=64

	var e=20;
	var e=e++; //20
	//解释：e先变为21,但最后还是赋值回20

```

#### 自减

> 变量自身-1

> 和自增同理


2019/2/19 11:01:43 

### 逻辑运算符

#### 非！

- 对布尔值进行取反操作
- 如果对非布尔值进行运算，会先转换为布尔值，然后再取反
	- 利用这一特点，可实现和Boolean()函数一样的功能
	- null、undefined、NaN以及空字符串('')取反都为true，其余都为false
	


#### 与&&

- js中的“与”属于短路的与
	- 如果第一个值为false，则不会看第二个值
- 非布尔值的情况(*****只有js才可以直接对非布尔值进行运算，其他语言不行***)
	- 会先转换为布尔值，然后再运算，并且返回原值
	- 如果第一个值为true，则必然返回第二个值
	- 如果第一个值为false，则直接返回第一个值



#### 或||

- js中“或”属于短路的或
	- 如果第一个值为true，则不会看第二个值
- 非布尔值的情况
	- 会先转换为布尔值，然后再运算，并且返回原值
	- 如果第一个值为true，则直接返回第一个值
	- 如果第一个值为false，则必然返回第二个值

```

	var res=1&&2;    //2
	var res=1&&0;    //0
	var res=0&&2;    //0
	var res=NaN&&0;    //NaN
	var res=0&&NaN;    //0

	var res=1||2;    //1
	var res=NaN||1;    //1
	var res=""||"hello";    //"hello"
	var res= -1||"hello";    // -1

	condole.log(res);

```

### 赋值运算符

#### =

> 将右侧值赋值给左侧值

#### +=

> a+=5等价于a=a+5

#### *=

#### /=

#### %=



### 关系运算符

#### 大于号>

#### 小于号>

#### 大于等于>=

#### 小于等于<=

> 判断大小关系，返回布尔值

- 非数值的情况
	- 对于非数值进行比较时，会将其转换为数字，然后再比较
	- 任何值和NaN比较，都返回false
	- 如果两个字符串比较，不会转换为数字
		- 而是比较字符串中的Unicode编码
		- 比较字符编码是一位一位进行比较，如果对应两位一样，则比较下一位


```

	var res=1>true;  //false
	var res=1>=true;  //true
	var res=1>"0";  //true
	var res=1>null;  //true
	var res=1>"hello";  //false
	
	var res="1"<"5";  //true
	var res="11"<"5";  //true  解释：字符第一位开始比较，1的编码小于5的编码，则返回true
	var res="abd"<"aca";  //true

	var res="11"<+"5";  //false  "5"转型为数字5

	
```

#### 相等运算符

> 也属于关系运算符

##### ==等等

- 如果两个值类型不一样，会转换成相同的类型再比较（**大部分是转成数值**）
- undefined衍生自null
- NaN不和任何值相等，包括本身
	- 可以用isNaN()函数来判断一个值是否是NaN


```

	console.log("1"==1);   //true
	console.log("1"==true);   //true  都转为数值
	
	console.log(null==0);   //false 比较特殊，没有转为数值

	console.log(undefined==null);   //true
	
	console.log(NaN==NaN);   //false

	var b=NaN;
	console.log(isNaN(b));   //true

```

##### !=不等

- 和==同理

##### ===全等

- 不会做自动的类型转换

##### !==不全等

- 不会做自动的类型转换






#### 关于Unicode编码

- 在字符串中使用转义字符输入Unicode编码
	- \u四位编码（16进制）
	- 如，consoloe.log("\u0031");  //输出1

- 在网页中时使用Unicode编码
	- &#编码（10进制）
	`<p>&#9760</p> 输出骷髅头`
	<p>&#9760</p>



### 条件运算符

> 也叫三元运算符

- 语法
	- 条件表达式?语句1:语句2
- 执行流程
	- 先对条件表达式进行求值
	- 值为true，执行语句1，并返回结果
	- 值为false，执行语句1，并返回结果
- 如果条件表达式的求值结果是一个非布尔值
	- 会转换为布尔值，再执行

```

	var max=a>b?a>c?a:c:b>c?b:c;

	等价于var max=a>b? (a>c?a:c) : (b>c?b:c);
	
	不推荐这样使用，不方便阅读

    //=================
	"hello"?alert('1'):alert('2');     //1
	""?alert('1'):alert('2');     //2
```

### 运算符优先级

> 和数学中一样，比如：先乘除后加减

>不用去记，拿不准时就用括号()改变优先级

1. .、[]、 new 
1. () 
1. ++、 -
1. !、~、+(单目)、-(单目)、typeof、void、delete 
1. %、*、/ 
1. +(双目)、-(双目)        指的是a+b
1. << 、 >>、 >>> 
1. <、<=、>、>= 
1. ==、!==、=== 
1. & 
1. ^ 
1. | 
1. && 
1. || 
1. ?: 
1. =、+=、-=、*=、/=、%=、<<=、>>=、>>>=、&=、^=、|= 
1. ,


