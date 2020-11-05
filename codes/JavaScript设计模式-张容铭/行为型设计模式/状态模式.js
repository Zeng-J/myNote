// ---例1------------------------------------------
function showResult(result) {
    if (result === 0) {
        // 处理结果0
    } else if (result === 1) {
        // 处理结果1
    } else if (result === 2) {
        // 处理结果2
    }
}

// 将分支判断语句改为对象状态管理
const ResultState = (function() {
    const States = {
        state0: () => { /* 处理结果0 */ },
        state1: () => { /* 处理结果1 */ },
        state2: () => { /* 处理结果2 */ },
    }

    function show(result) {
        States['state' + result] && States['state' + result]();
    }

    return {
        show
    }
})();



// ---例2----------------------------------------
const ActionState = function() {
    let _currentState = {};

    const states = {
        jump: function() {
            console.log('jump');
        },
        move: function() {
            console.log('move');
        },
        shoot: function() {
            console.log('shoot');
        },
        squat: function() {
            console.log('squat');
        },
    };

    const Action = {
        changeState: function() {
            let arg = arguments;
            _currentState = {};
            if (arg.length) {
                for (let i = 0, len = arg.length; i < len; i++) {
                    _currentState[arg[i]] = true;
                }
            }
            return this;
        },
        goes: function() {
            for (let i in _currentState) {
                states[i] && states[i]();
            }
            return this;
        }
    }

    return {
        change: Action.changeState,
        goes: Action.goes
    }
}

new ActionState().change('jump', 'shoot').goes();
