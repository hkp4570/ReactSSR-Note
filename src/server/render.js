import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import getHTML from "./getHTML";
import loadData from './loadData'
import makeStore from '../store'

export default async (req, res) => {
  // 当使用重定向时会自动想context中注入参数
  const context = {};
  const store = makeStore();
  // 加载数据到仓库
  // 调用对应组件（根据路由匹配到的组件）的loadData
  
  await loadData(req.path, store);
  
  // 渲染组件
  const componentHTML = ReactDom.renderToString(
    <App location={req.path} context={context} store={store} />
);
  const html = getHTML(componentHTML, req.path, store);
  console.log(context);
  
  if (context.url) {
    res.redirect(context.url);
    return ;
  }
  
  if (context.resCode) {
    res.status(context.resCode);
  }
  res.send(html);
};
