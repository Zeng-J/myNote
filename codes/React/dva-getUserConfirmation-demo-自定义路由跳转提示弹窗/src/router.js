import React from 'react';
import { Router, BrowserRouter, Route, Switch, Link, Prompt } from 'dva/router';
import Index from './routes/Index';
import About from './routes/About';
import { Tag, Modal } from 'antd';

function RouterConfig({ history, app }) {
  const getConfirmation = (message, callback) => {
    console.log(app, app._store, app._store.getState());
    if (app._store.getState().example.sorting) {
      Modal.confirm({
        title: '排序中',
        content: '确定离开？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          app._store.dispatch({
            type: "example/handleChangeSort",
            payload: {
              sorting: false
            }
          })
          callback(true);
        },
        onCancel: () => callback(false),
      });
    } else {
      callback(true);
    }
  }

  return (
    <div>
      <BrowserRouter getUserConfirmation={getConfirmation}>
        <div style={{ paddingTop: 20, textAlign: "center" }}>
          <Prompt message="确定离开？" />
          <Link to="/"><Tag>首页</Tag></Link>
          <Link to="/about"><Tag>关于</Tag></Link>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default RouterConfig;
