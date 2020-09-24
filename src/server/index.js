import React from 'react';
import render from './render';

import express from 'express';
const app = express();

app.use(express.static('./public'));

app.get('*',render);

app.listen(8080,() => {
  console.log('服务器已启动');
})
