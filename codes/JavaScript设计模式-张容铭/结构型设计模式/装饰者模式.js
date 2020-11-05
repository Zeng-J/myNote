// // 手机号输入
// var telInput = document.getElementById('tel_input'),
//     telWarnText = document.getElementById('tel_warn_text');

// telInput.onfocus = function () {
//     telWarnText.style.display = 'inline-block';
// }
// telInput.onblur = function () {
//     telWarnText.style.display = 'none';
// }

// // 名字输入
// var nameInput = document.getElementById('name_input'),
//     nameWarnText = document.getElementById('name_warn_text');

// nameInput.onfocus = function () {
//     nameWarnText.style.display = 'inline-block';
// }
// nameInput.onblur = function () {
//     nameWarnText.style.display = 'none';
// }

// // 地址输入
// var addressInput = document.getElementById('address_input'),
//     addressWarnText = document.getElementById('address_warn_text');

// addressInput.onfocus = function () {
//     addressWarnText.style.display = 'inline-block';
// }
// addressInput.onblur = function () {
//     addressWarnText.style.display = 'none';
// }

let decorator = function(id, fn) {
    let input = document.getElementById(id);

    // 若输入框已绑定事件
    if (typeof input.onclick === 'function') {
        // 缓存输入框原有绑定事件
        let oldClickFn = input.onclick;
        //  为输入框定义新的事件
        input.onclick = function() {
            oldClickFn();
            fn();
        }
    } else {
        input.onclick = fn;
    }
}

decorator('tel_input', function() {
    document.getElementById('tel_demo_text').style.display = 'none';
})