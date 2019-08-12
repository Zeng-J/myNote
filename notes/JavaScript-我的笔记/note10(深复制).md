2019/8/2 13:05:15 

## 1. 深度克隆

### 1. 浅拷贝

- `Object.assgin`
- `Array.prototype.concat`
- `Array.prototype.slice`

### 2. 深拷贝

- `JSON.parse(JSON.stringify())`
	- 只能是对象/数组，不能有函数

#### 定义深度克隆函数

```
	
	// toString返回值的类型为字符串
	Object.prototype.toString.call("str"); // [Object String]

	Object.prototype.toString.call("str").slice(8, -1); // String 
	

```

```
	
	function checkedType(target) {
		return Object.prototype.toString.call(target).slice(8, -1);
	}

	function clone(target) {
		if (checkedType(target) === "Obejct" || checkedType(target) === "Array") {
			let result = {};
			checkedType(target) === "Array" ? result = [] : "";
			for (let i in target) {
				result[i] = clone(target[i]);
			}
			return result;
		} else {
			return target;
		}
	}

```