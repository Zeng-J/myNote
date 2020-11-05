// 给类数组对象封装方法访问器
const Visitor = (function() {
    return {
        // 截取方法
        splice: function() {
            // splice方法参数，从原参数的第二个参数开始算起
            let args = Array.prototype.splice.call(arguments, 1);
            // 对第一个参数对象执行splice方法
            return Array.prototype.splice.apply(arguments[0], args);
        },
        // 追加数据方法
        push: function() {
            let len = arguments[0].length || 0,
                // 添加的数据从原参数的第一个参数算起
                args = this.splice(arguments, 1);
            // 让对象拥有length属性
            arguments[0].length = len + arguments.length - 1;
            // 对第一个参数对象执行push方法
            return Array.prototype.push.apply(arguments[0], args);
        },
        // 弹出最后一次添加的元素
        pop: function() {
            return Array.prototype.pop.apply(arguments[0]);
        }
    }
})();

// 使用
let a = new Object();
Visitor.push(a, 1,2,3,4);
console.log(a); // {0: 1, 1: 2, 2: 3, 3: 4, length: 4}
Visitor.pop(a);
console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}
Visitor.splice(a, 0,1);
console.log(a); // {0: 2, 1: 3, length: 2}
