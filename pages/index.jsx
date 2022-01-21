import Head from 'next/head';
import NestedLayout from '../components/NestedLayout';
import {useEffect, useState} from 'react';

const Index =  () => {
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
Index.getLayout = function getLayout(page){
  console.log(page,'page');
  return (
    <NestedLayout>{page}</NestedLayout>
  )
}
export default Index;