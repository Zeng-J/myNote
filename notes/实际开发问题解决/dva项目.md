## 1. 有些组件拿不到`this.props.history`

```javascript
// router.js
import { Router, Route } from 'dva/router';
app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={MyPage} />
  </Router>
);

// myPage.js
export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
        	<div>
            	<header>title</header>
            	<MyComponent />
            </div>
        );
    }
}

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    jump = () => {
        this.props.history.push('/index'); // 报错
    }
    
    render() {
        return (
        	<button onClick={this.jump}>跳转</button>
        );
    }
}
```

如上，想在`MyComponent`组件里调用`this.props.history.push`，这是不行的。可以将`this.props.history`通过`MyPage`父组件传给`MyComponent`再来调用。

原来，路由级别的组件才会默认有`this.props.history`属性（有点弱智，但还是记录下，加深影响）。

