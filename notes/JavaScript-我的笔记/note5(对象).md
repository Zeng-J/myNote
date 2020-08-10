2019/4/26 12:57:34 

## Javascript的本地对象，内置对象和宿主对象

### 本地对象

- ECMAScript中定义好的对象，需要new 实例化的对象
- 如，`Object`、`Function`、`Array`、`String`、`Number`、`Date`、`RegExp`、`Boolean`、`Error`、`EvalError`等等

### 内置对象

- 本地对象中比较特殊的一种，即已经实例化好的本地对象
- 只有两个内置对象
	- Global
	- Math

### 宿主对象

- 由ECMAScript实现的宿主环境提供的对象
- 就是BOM、DOM和我们自己定义的对象。

