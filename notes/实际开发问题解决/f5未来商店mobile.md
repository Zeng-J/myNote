2019/7/25 20:56:38 

## 移除ios自带button样式

```

	/*移除ios自带button样式*/
	input[type=button]{
		-webkit-appearance:none;
		outline:none
	}

```



## IOS的select标签Bug-即使未选中，也会显示第一个option

2020/03/28

```html
<select>
    <!-- ios的bug:样式上看上去选中了第一个，事实上并未选择 -->
    <!-- display:none是给安卓用的，隐藏第一个option -->
    <option style="display:none" value="" disabled>请选择</option>
    <option value="guangzhou">广州</option>
    <option value="shenzhen">深圳</option>
    <option value="shanghai">上海</option>
</select>
```

