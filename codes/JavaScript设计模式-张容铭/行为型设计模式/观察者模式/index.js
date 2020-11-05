const Observer = (function() {
    const _message = {};
    return {
        // 注册信息接口
        regist: function(type, fn) {
            if (typeof _message[type] === 'undefined') {
                _message[type] = [fn];
            } else {
                _message[type].push(fn);
            }
            return this;
        },
        // 发布信息接口
        fire: function(type, args) {
            if (!_message[type]) {
                return
            }

            let events = {
                type,
                args: args || {}
            },
            i = 0,
            len = _message[type].length;

            for (; i < len; i++) {
                _message[type][i].call(this, events);
            }
        },
        // 移除信息接口
        remove: function(type, fn) {
            if (_message[type] instanceof Array) {
                let i = _message[type].length - 1;
                for (; i >=0; i--) {
                    _message[type][i] === fn && _message[type].splice(i, 1);
                }
            }
        },
    }
})()

function $(id) {
    return document.getElementById(id);
}

// 工程师 A 评论列表模块
(function() {
    function addMsgItem(e) {
        let text = e.args.text,
            ul = $('msg'),
            li = document.createElement('li'),
            span = document.createElement('span');
        
        li.innerHTML = text;

        // 删除按钮
        span.innerHTML = '删除';
        span.onclick = function() {
            ul.removeChild(li);
            Observer.fire('removeCommentMessage', {
                num: -1
            });
        }
        li.appendChild(span);
        ul.appendChild(li);
    }
    Observer.regist('addCommentMessage', addMsgItem);
})();

// 工程师 B 显示评论数量模块
(function() {
    function changeMsgNum(e) {
        let num = e.args.num;
        $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
    }

    Observer
        .regist('addCommentMessage', changeMsgNum)
        .regist('removeCommentMessage', changeMsgNum);
})();

// 工程师 C 提交评论模块
(function() {
    $('user_submit').onclick = function () {
        let text = $('user_input');
        if (text.value === '') {
            return;
        }
        Observer.fire('addCommentMessage', {
            text: text.value,
            num: 1
        })
        text.value = '';
    }
})();