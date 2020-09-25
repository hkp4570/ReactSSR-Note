import Head from 'next/head';
import {useEffect, useState} from 'react';

const Index =  () => {
  console.log('index render')
  const [advs, setAdvs] = useState([]);
  useEffect(() => {
    setAdvs([
      {url:'https://www.baidu.com',name:'百度'},
      {url:'https://www.taobao.com',name:'淘宝'},
    ])
  },[])
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <h1>index 首页 {Math.random()}</h1>
      <ul>
        {advs.map((e,index) => (
          <li key={index}><a href={e.url}>{e.name}</a></li>
        ))}
      </ul>
    </div>
  )
}
export default Index;
