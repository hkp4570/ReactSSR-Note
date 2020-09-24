import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import '../assets/global.css';
import RouterApp from '../routes/RouterApp'

function App () {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}

export default App
