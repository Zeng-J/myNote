## React16.2升级



### React16舍弃

- React.createClass
  - 解决方法，使用`create-react-class` 模块
- 生命周期getDefaultProps、getInitialState



### 准备舍弃，但还可用

- 生命周期componentWillMount、componentWillReceiveProps、componentWillUpdate

  [文档]: https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html

- ref=字符串 这种方式获取节点

  [文档]: https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs



### 潜在更改点

- className必须传入string，不能boolean ✔



- class类的get方法中调用`ReactDom.findDOMNode`报错，官方建议将`ReactDom.findDOMNode`放在`componentDidUpdate`或`componentDidMount` ✔



- “ <selectorContainer /> is using uppercase HTML. Always use lowercase HTML tags in React.”等等，组件应该首字母大写，校验由`PropTypes.func`改为`PropTypes.elementType` ✔



- ref可以获取真实节点，可以完全避免使用findDomNode

  [文档]: https://react.docschina.org/docs/react-dom.html#finddomnode

  

- "You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call."使用了`React.createClass`的情况下, 里面的子组件不需要给事件的handler额外bind`this`，否则有告警提示

  - 举例，`<Child handle={this.handle.bind(this)} />`

  - [文档]: https://segmentfault.com/q/1010000003968598/a-1020000003989220
  
    





## antd3.0升级

### 官方文档，公司项目中符合需更改的

- 移除了 Input 对 `type='textarea'` 的支持，请直接使用 `Input.TextArea` 组件。✔
- Table废弃以下属性 `onRowClick`，`onRowDoubleClick`、`onRowContextMenu`、`onRowMouseEnter`、`onRowMouseLeave`，请使用 `onRow` 代替。 ✔
- Card 的 `noHovering` 属性重命名为 `hoverable`，且默认值改为 `true`。✔

[文档]: https://github.com/ant-design/ant-design/blob/2adf8ced24da7b3cb46a3475854a83d76a98c536/CHANGELOG.zh-CN.md#300



### 潜在修改的

- Col组件`span`、`offset`属性必须为Number,否则报错 ✔
- TimePicker组件`allowEmpty`改为`allowClear` ✔
- Input的`maxLength`属性必须为Number,否则报错 ✔
- Select 组件废弃了 `combobox` 模式，使用 `AutoComplete` 组件代替。 ✔
  - 项目中去除了两处地方`combobox`，继续使用`Select`
- `Input.TextArea`组件属性使用`autoSize`代替`autosize` ✔
- `TreeSelect`组件中`treeData`中用`title`代替`label` ✔
- 单个` Checkbox`组件使用`checked`代替`value`（尽管antd2也要求checked，但项目中使用value未报错，antd3会报错）,使用`Checkbox.Group`包含的`Checkbox`还应使用`value` ✔
- 不能类似`<i className="anticon anticon-check"></i>`这样使用antd图标样式，因为在 `3.9.0` 之后，使用了 SVG 图标替换了原先的 font 图标 ✔
- `Tag`组件`afterClose`将废弃，用`onClose`代替 ✔
- `Modal.method`方法中`iconType`废弃，用`icon`代替 ✔



### 公司项目专有修改的

#### 使用`separate_mount`的弹窗中，在`componentDidMount`中获取不到ref节点。原因是Modal中子元素后于`componentDidMount`出现。✔

- 解决
  - 解决方法一：在ref回调函数进行对节点处理操作
  - 解决方法二：渲染Modal的方法应该是在主线程里，
    - 那么将`componentDidMount`中函数用`setTimeout`包裹（不需要设置毫秒数），使其放到异步队列中，即可在modal渲染后拿到ref
    - 或者使用Promise.resolve()
- 需修改文件
  ToFrontWarehouseDelivery
  ToFrontWarehouseDeliveryOfDrink
  GoodsInfoCombinationNew
  GoodsInfoNew
  SpecialGroupConfig
  Delivery
  Qrcode
  DeliveryConfigureOfDrink
  DrinkBIBConfigure

#### Modal组件中，若初次渲染 this.setState({ visible: true }, () => // 获取ref)，回调函数中拿不到ref

- `ShopUser`中1030行

#### 将用ConfigProvider包裹的组件卸载（separate_mount）后，Modal.method的国际化失效

[相关文档](https://github.com/ant-design/ant-design/issues/19517)



## 升级最新React16.13.1

### UNSAFE_生命周期改名

- `componentWillMount` → `UNSAFE_componentWillMount`
- `componentWillReceiveProps` → `UNSAFE_componentWillReceiveProps`
- `componentWillUpdate` → `UNSAFE_componentWillUpdate`