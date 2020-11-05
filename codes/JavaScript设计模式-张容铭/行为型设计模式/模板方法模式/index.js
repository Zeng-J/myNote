const Alert = function(data) {
    if (!data) {
        return;
    }

    this.content = data.content;

    // 提示框面板
    this.panel = document.createElement('div');

    // 内容组件
    this.contentNode = document.createElement('p');

    this.confirmBtn = document.createElement('span');

    this.closeBtn = document.createElement('b');

    this.panel.className = 'alert';
    this.confirmBtn.className = 'confirm';
    this.closeBtn.className = 'close';

    this.confirmBtn.innerHTML = data.confirm || '确认';
    this.closeBtn.innerHTML = data.close || '关闭';
    this.contentNode.innerHTML = this.content;
    this.success = data.success || function(){};
    this.fail = data.fail || function(){};
}

Alert.prototype = {
    init: function() {
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        document.body.appendChild(this.panel);
        this.bindEvent();
    },
    bindEvent: function() {
        var self = this;
        this.closeBtn.onclick = function() {
            self.fail();
            self.hide();
        }
    },
    hide: function() {
        this.panel.style.display = 'none';
    },
    show: function() {
        this.panel.style.display = 'block';
    }
}

const RightAlert = function(data) {
    Alert.call(this, data);
    this.confirmBtn.className = this.confirmBtn.className + ' right';
}
RightAlert.prototype = new Alert();

const TitleAlert = function(data) {
    Alert.call(this, data);
    this.title = data.title;
    this.titleNode = document.createElement('h3');
    this.titleNode.innerHTML = this.title;
}
TitleAlert.prototype = new Alert();
TitleAlert.prototype.init = function() {
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
    Alert.prototype.init.call(this);
}

const titleAlert = new TitleAlert({
    title: '标题',
    content: '内容...',
    fail: () => console.log('fail')
})

titleAlert.init();

document.getElementById('show-btn').onclick = () => titleAlert.show();