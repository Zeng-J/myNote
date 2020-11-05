const MVC = {};

// 数据模型层
MVC.model = function(){
    const M = {};
    M.data = {
        demo1: {},
        // ...
    };
    return {
        getData(m){},
        setData(k, v){},
        // ...
    }
}();

// 视图层
MVC.view = function(){
    const M = MVC.model;
    const V = {
        // 基于数据，创建视图
        createComponent1() {
            let demo1 = M.getData('demo1');
            console.log(demo1);
            // ...
        },
        // ...
    };
    return function(v) {
        V[v]();
    }
}();

// 控制器层
MVC.ctrl = function(){
    const M = MVC.model;
    const V = MVC.view;
    const C = {
        initComponent1: function() {
            // 渲染视图
            V('createComponent1');

            // 添加交互方法
            document.getElementById('component1').onclick = function(){
                let demo1 = {};
                M.setData('demo1', demo1);
            };
            // ...
        },
        // ...
    };
    for (let i in C) {
        C[i] && C[i]();
    }
}();