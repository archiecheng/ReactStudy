// 项目的入口, 项目从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入项目的根组件
import App from './App';

import store from './store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// 1. 创建 router 实例对象并且配置路由对应关系
//  const router = createBrowserRouter([
//   {
//     path:'/login',
//     element: <div>我是登录</div>
//   },
//   {
//     path:'/article',
//     element: <div>我是文章页</div>
//   }
//  ])

// 1. 导入路由router
import router from './router'
// 把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    {/* <RouterProvider router={router}></RouterProvider> */}
  </Provider>
);

