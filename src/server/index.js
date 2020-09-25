import React from 'react';
import render from './render';
const { createProxyMiddleware } = require('http-proxy-middleware');

import express from 'express';
const app = express();

app.use(express.static('./public'));

app.use('/api', createProxyMiddleware({ target: 'http://yuanjin.tech:5005/', changeOrigin: true }));

app.get('*',render);

app.listen(8080,() => {
  console.log('服务器已启动');
})
