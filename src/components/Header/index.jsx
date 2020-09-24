import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

function Index () {
  return (
    <div className={styles.header}>
      <Link to='/'>首页</Link>
      <Link to='/movies'>电影列表</Link>
      <Link to='/admin'>后台管理</Link>
    </div>
  )
}

export default Index
