const VM = function(){
    const Method = {
        component1: function(dom, data) {
            const node = document.createElement('div');

            // 添加样式，添加子元素等
            node.style.width = data.data.width;
            // ...

            dom.appendChild(node);

            // 添加交互方法等
            node.onclick = function(){};
        },
        // ...
    };

    function getBindData(dom) {
        // 获取组件上的自定义属性值
        let data = dom.getAttribute('data-bind');
        // 将data值转换为对象
        return !!data && (new Function(`return ({${data}})`))()
    }

    return function() {
            // 获取页面中所有元素
        let doms = document.body.getElementsByTagName('*'),
            // 元素自定义数据句柄
            ctx = null;
        
        for (let i = 0; i < doms.length; i++) {
            ctx = getBindData(doms[i]);
            ctx.type && Method[ctx.type] && Method[ctx.type](doms[i], ctx);
        }
    }
};

// ---使用---
// html
<body>
  <div data-bind="type: 'component1', data: demo1"></div>
	<div data-bind="type: 'component1', data: demo2"><span>自定义内容</span></div>
</body>

// js
const demo1 = {
    width: 30,
    // ...
}
const demo2 = {
    width: 20,
    // ...
}
window.onload = function() {
    VM();
}