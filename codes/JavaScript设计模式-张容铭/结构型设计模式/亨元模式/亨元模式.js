// const Flyweight = function() {
//     let created = [];
//     function create() {
//         let dom = document.createElement('div');
//         document.getElementById('container').appendChild(dom);
//         created.push(dom);
//         return dom;
//     }
//     return {
//         getDiv: function() {
//             if (created.length < 5) {
//                 return create();
//             } else {
//                 // 获取第一个元素，并插入最后面
//                 let div = created.shift();
//                 created.push(div);
//                 return div;
//             }
//         }
//     }
// }();

// const article = Array.from({ length: 12 }).map((_, i) => `这是第${i+1}条新闻`)

// // 实现分页
// let paper = 0,
//     num = 5, // 一页5条数据
//     len = article.length;

// // 添加5条新闻
// for (let i = 0; i < 5; i++) {
//     if (article[i]) {
//         Flyweight.getDiv().innerHTML = article[i];
//     }
// }

// // 给"下一页"按钮绑定事件
// document.getElementById('next_page').onclick = function() {
//     //  内容不足5条
//     if (article.length < 5) {
//         return;
//     }

//     let n = ++paper * num % len, // 获取当前页的第一条新闻索引
//         j = 0;
//     // 插入5条新闻
//     for (; j < 5; j++) {
//         if (article[n + j]) {
//             Flyweight.getDiv().innerHTML = article[n + j];
//         // 起始位置第n+j-len条
//         } else if (article[n + j - len]) {
//             Flyweight.getDiv().innerHTML = article[n + j - len];
//         } else {
//             Flyweight.getDiv().innerHTML = '';
//         }
//     }
// }

const Flyweight = function() {
    let created = [];
    function create() {
        let dom = document.createElement('div');
        document.getElementById('container').appendChild(dom);
        created.push(dom);
        return dom;
    }
    return {
        getDiv: function() {
            if (created.length < 5) {
                return create();
            } else {
                // 获取第一个元素，并插入最后面
                let div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}();

const article = Array.from({ length: 12 }).map((_, i) => `这是第${i+1}条新闻`)

// 实现分页
let paper = 0,
    num = 5, // 一页5条数据
    len = article.length,
    maxPaper = Math.floor(len/num); // 最大页索引（paper从0开始）

// 添加5条新闻
for (let i = 0; i < 5; i++) {
    if (article[i]) {
        Flyweight.getDiv().innerHTML = article[i];
    }
}

// 给“下一页”按钮绑定事件
document.getElementById('next_page').onclick = function() {
    //  内容不足5条 或者 到了最大页索引
    if (article.length < 5 || paper >= maxPaper) {
        return;
    }

    let n = ++paper * num % len; // 获取当前页的第一条新闻索引
    insert(n);
}

// 给“上一页”按钮绑定事件
document.getElementById('last_page').onclick = function() {
    if (paper <= 0) {
        return;
    }
    let n = --paper * num % len;
    insert(n);
}

function insert(n) {
    let j = 0;
    // 插入5条新闻
    for (; j < 5; j++) {
        if (article[n + j]) {
            Flyweight.getDiv().innerHTML = article[n + j];
        } else {
            Flyweight.getDiv().innerHTML = '';
        }
    }
}