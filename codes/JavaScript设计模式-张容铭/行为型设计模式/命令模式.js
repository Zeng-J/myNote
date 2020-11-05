const CanvasCommand = (function() {
    const canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
    
    const Aciton = {
        // 填充色彩
        fillStyle: function(c) {
            ctx.fillStyle = c;
        },
        // 填充矩形
        fillRect: function(x, y, width, height) {
            ctx.fillRect(x, y, width, height);
        },
        // 描边色彩
        strokeStyle: function(c) {
            ctx.strokeStyle = c;
        },
        // 描述矩形
        strokeRect: function(x, y, width, height) {
            ctx.fillText(text, x, y);
        },
        // 填充字体
        fillText: function(text, x, y) {
            ctx.fillText(text, x, y);
        },
        // 开启路径
        beginPath: function() {
            ctx.beginPath(x, y);
        },
        // 移动画笔触电
        moveTo: function(x, y) {
            ctx.moveTo(x, y);
        },
        // 画笔连线
        lineTo: function(x, y) {
            ctx.lineTo(x, y);
        },
        // 绘制弧线
        arc: function(x, y, r, begin, end, dir) {
            ctx.arc(x, y, r, begin, end, dir);
        },
        // 填充
        fill: function() {
            ctx.fill();
        },
        // 描边
        stroke: function() {
            ctx.stroke();
        }
    }

    return {
        // 命令接口
        excute: function(msg) {
            if (!msg) {
                return;
            }

            // 如果命令是个数组
            if (msg.length) {
                for (let i = 0, len = msg.length; i < len; i++) {
                    arguments.callee(msg[i]);
                }
            } else {
                msg.param = Object.prototype.toString.call(msg.param) === '[object Array]' ? msg.param : [msg.param];
                Aciton[msg.command].apply(Aciton, msg.param);
            }
        }
    }
})();

CanvasCommand.excute([
    { command: 'fillStyle', param: 'red' },
    { command: 'fillRect', param: [20, 20, 100, 100] }
])