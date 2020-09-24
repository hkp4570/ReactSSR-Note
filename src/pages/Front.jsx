import React from 'react'
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config'

function Front ({ route }) {
  return (
    <div>
      <Header/>
      <div style={{ padding: 50 }}>
        {
          renderRoutes(route.routes)
        }
      </div>
    </div>
  )
}

export default Front
