const MVP = {};

// 数据层
MVP.model = function() {
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
MVP.view = function() {
    return function(str) {
        let tpl;
        // 根据传入的字符串，创建模板
        // ...
        return tpl;
    }
}();

// 管理层
MVP.presenter = function(){
    var V = MVP.view;
    var M = MVP.model;
    var C = {
        createComponent1: function(M, V) {
            // 获取数据
            const demo1 = M.getData('demo1');

            // 获取组件模板
            let template = V('...');
            // 得到如template="<li class='{{className}}'>{{text}}</li>"

            compiler(template, demo1);

            // 基于数据，编译模板
            function compiler(tpl, data) {
                let html;
                // ...
                document.getElementById('app').innerHTML = html;

            }


            // 添加交互方法等
            document.getElementById('app').onclick = function(){};
            // ...
        }
    };
    return {
        init: function() {
            for (let i in C) {
                C[i] && C[i](M, V);
            }
        }
    }
};

// MVP入口
MVP.init = function(){
    this.presenter.init();
};

window.onload = function() {
    MVP.init();
}