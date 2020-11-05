const InputStrategy = (function() {
    const strategy = {
        // 是否为空
        notNull: function(value) {
            // 校验...
        },
        // 是否是一个数字
        number: function(value) {
            // ...
        },
        // 是否是本地电话
        phone: function(value) {
            // ...
        },
    };
    return {
        check: function(type, value) {
            return strategy[type] ? strategy[type](value) : '没有该类型的检测方法'
        },
        addStrategy: function(type, fn) {
            strategy[type] = fn;
        }
    }
})();

InputStrategy.check('number', 1);