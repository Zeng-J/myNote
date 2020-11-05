// --- 1、请求模块 ---
const sendData = function(data, detalType, dom) {
    const xhr = new XMLHttpRequest();

    let url = '/api?time=' + +new Date();

    xhr.onload = function(event) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            dealData(xhr.responseText, detalType, dom);
        } else {
            // 请求失败
        }
    }

    // 拼接字符串
    for (let i in data) {
        url += `&${i}=${data[i]}`;
    }

    xhr.open('get', url, true);
    xhr.send(null);
}

// --- 2、响应数据适配模块 ---
const dealData = function(data, dealType, dom) {
    switch(dealType) {
        // 输入提示
        case 'sug':
            // ...
            return createSug(data, dom);
            break;
        // 输入校验
            case 'validate':
            return createValidateResult(data, dom);
            break;
    }
}

// --- 3、创建组件模块 ---
const createSug = function(data, dom) {
    // ...
}
const createValidateResult = function(data, dom) {
    // ...
}

// 最终使用
var input = document.getElementsByTagName('input');
// 监听内容改变事件做内容校验
input[0].onchange = function(e) {
    sendData({ value: input[0].value }, 'validate', input[0]);
}

// 监听键盘事件对内容做提示处理
input[1].onkeydown = function(e) {
    sendData({ value: input[1].value }, 'sug', input[1]);
}