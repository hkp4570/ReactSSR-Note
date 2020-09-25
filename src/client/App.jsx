import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import '../assets/global.css';
import RouterApp from '../routes/RouterApp';
import { Provider } from 'react-redux';
import store from '../store';

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  )
}

export default App
