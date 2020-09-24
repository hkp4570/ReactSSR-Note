import React from 'react';
import routes from './routeConfig';
import { renderRoutes } from "react-router-config";

import Header from '../components/Header';

function RouterApp () {
  return (
    <div>
      <Header />
      <div style={{ padding:'50px' }}>
        {
          renderRoutes(routes)
        }
      </div>
    </div>
  )
}

export default RouterApp
