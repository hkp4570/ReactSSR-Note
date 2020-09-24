import React from 'react'
import routes from './routeConfig'
import { renderRoutes } from 'react-router-config'

function RouterApp () {
  return (
    <div> {renderRoutes(routes)}</div>
  )
}

export default RouterApp
