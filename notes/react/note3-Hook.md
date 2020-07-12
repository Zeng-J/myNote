## useEffect

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。

```javascript
useEffect(() => {
    
    // mounted时操作
    
    return () => {
        // unmount时操作
    }
    
}, [])
```



### 执行顺序演示

```javascript
// 代码片段
const [value, setValue] = useState('');
const [otherValue, setOtherValue] = useState('');

useEffect(() => {
    console.log('mounted');
    return () => console.log('unmount');
}, [])

useEffect(() => {
    console.log('update');
    return () => console.log('clear');
})

useEffect(() => {
    console.log('updateValue');
    return () => console.log('clearValue');
}, [value])

// ---初次进入组件----------
// mounted
// update
// updateValue

// ---改变value----------
// clear
// clearValue
// update
// updateValue

// ---改变otherValue--------
// clear
// update

// 卸载组件
// unmount
// clear
// clearValue
```



## 使用Hook后

- 不能使用class类的get方式对数据进行二次处理
- 函数组件拿取`ref`，使用`useRef`