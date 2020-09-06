var A = {
    Util: {
        util_method1: function() {},
        util_method2: function() {},
    },
    Tool: {
        tool_method1: function() {},
        tool_method2: function() {},
    },
    // ...
}

// 惰性单例
var LazySingle = (function() {
    // 单例实例引用
    var _instance = null;

    function Single() {
        // 私有属性
        var type = 'single';

        return {
            getType: function() {
                return type;
            },
            publicMethod: function() {},
            publicProperty: '1.0',
        }
    }

    return function() {
        if (!instance) {
            _instance = Single();
        }
        return _instance;
    }
})()