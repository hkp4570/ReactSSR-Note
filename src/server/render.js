import React from 'react';
import ReactDom from 'react-dom/server';
import App from './App';
import {getScript} from './getScript';
import {getLinks} from './getLinks';

export default (req, res) => {
  const componentHTML = ReactDom.renderToString(<App />)
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SSR</title>
    ${getLinks()}
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    ${getScript()}
  </body>
  </html>`
  
  res.send(html)
}
