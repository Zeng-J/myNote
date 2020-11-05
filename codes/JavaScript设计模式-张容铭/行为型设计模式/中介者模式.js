const Mediator = function() {
    let _msg = {};
    return {
        register: function(type, action) {
            if (_msg[type]) {
                _msg[type].push(action);
            } else {
                _msg[type] = [];
                _msg[type].push(action);
            }
        },
        send: function(type) {
            if (_msg[type]) {
                for (let i = 0, len = _msg[type].length; i < len; i++) {
                    _msg[type][i] && _msg[type][i]();
                }
            }
        }
    }
}

// 订阅消息
(function() {
    Mediator.register('demo', function() {
        console.log('demo');
    })
})()

// 发布消息
(function() {
    var btn = document.getElementById('btn');
    btn.onchange = function() {
        Mediator.send('demo')
    }
})()