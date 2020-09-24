import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

function Index ({ route }) {
  return (
    <div>
      <h1>后台页面</h1>
      <div>
        <Link to='/admin/user'>用户管理</Link>
        <Link to='/admin/system' style={{ marginLeft: 50 }}>系统管理</Link>
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Index
