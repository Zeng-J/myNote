// MVVM只能数据驱动视图，视图更改数据，而不能通过其他方式操作数据。

// ~屏蔽压缩报错
~(function() {
    // 在闭包中获取全局变量
    // (0, eval)('this')获取this，是因为严格模式下，闭包中获取不到this，需要间接调用eval来获取
    const window = this || (0, eval('this'));

    const VM = function(){
        const Method = {
            // 进度条
            progressbar: function(dom, data){
                let progress = document.createElement('div'),
                    param = data.data;
                progress.style.width = (param.position || 100) + '%';
                dom.className += ' ui-progressbar';
                dom.appendChild(progress);
            },
            // 滑动条
            slider: function(dom, data){
                dom.className += ' ui-slider';

                let bar = document.createElement('span'),
                    progress = document.createElement('div'),
                    titleText = null,
                    progressText = null,
                    param = data.data,
                    // 容器元素宽度
                    width = dom.clientWidth,
                    // 容器元素横坐标值
                    left = dom.offsetLeft,
                    // 拨片位置
                    realWidth = (param.position || 100) * width / 100;

                dom.innerHTML = '';
                if (param.title) {
                    titleText = document.createElement('b');
                    progressText = document.createElement('em');
                    titleText.innerHTML = param.title;
                    dom.appendChild(titleText);
                    dom.appendChild(progressText);
                }

                // 设置滑动条
                setStyle(realWidth);

                dom.appendChild(progress);
                dom.appendChild(bar);

                function setStyle(w) {
                    // 设置进度容器宽度
                    progress.style.width = w + 'px';
                    // 设置拨片横坐标
                    bar.style.left = w + 'px';
                    // 如果有拨片提示文案
                    if (progressText) {
                        // 设置拨片提示文案横坐标
                        progressText.style.left = w + 'px';
                        // 设置拨片提示文案内容
                        progressText.innerHTML = param.position + '%';
                    }
                }


                // 按下鼠标拨片
                bar.onmousedown = function() {
                    document.onmousemove = function(event) {
                        let e = event || window.event;
                        let w = e.clientX - left;
                        // 进度条长度
                        let styleWidth = w < width ? (w > 0 ? w : 0) : width;
                        // 设置滑动条
                        setStyle(styleWidth);

                        param.position = parseFloat(styleWidth / width * 100).toFixed(2);
                    }

                    // 阻止页面滑动选取事件
                    document.onselectstart = function() {
                        return false;
                    }
                }

                // 停止滑动交互（鼠标按键松开）
                document.onmouseup = function() {
                    // 取消文档鼠标光标移动事件
                    document.onmousemove = null;
                    // 取消文档滑动选取事件
                    document.onselectstart = null;
                }
            }
        };
        function getBindData(dom) {
            let data = dom.getAttribute('data-bind');
            // 将自定义属性data-bind值转化为对象
            return !!data && (new Function("return ({" + data + "})"))()
        }
        return function() {
            let doms = document.body.getElementsByTagName('*'),
                ctx = null;
            for (let i = 0; i < doms.length; i++) {
                ctx = getBindData(doms[i]);
                // 如果元素是UI组件，则根据自定义组件类型，渲染该组件
                ctx.type && Method[ctx.type] && Method[ctx.type](doms[i], ctx);
            }
        }
    }();

    window.VM = VM;
})()

let demo1 = { position: "18" }
let demo2 = { position: "50", title: '100' }
let demo3 = { position: "18" }

window.onload = function() {
    VM();
}