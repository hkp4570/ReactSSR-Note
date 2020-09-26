import Head from 'next/head'
import { getMovies } from '../../services/movieService'

// 先把数据请求到，然后形成静态页面
const Movies = ({pageProps:{movies}}) => {
  return (
    <div>
      <Head>
        <title>电影</title>
      </Head>
      <h1>movies</h1>
      <ul>
        {movies.map(e => (
          <li key={e._id}>
            <a href={`/movies/${e._id}`}>
              <span>{e.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Movies

// 此函数必须在页面组件中 该函数只可在服务端运行 运行在组件渲染之前 只能在build期间运行 返回的对象中的props属性，将被混合到整个组件属性
export async function getStaticProps () {
  const resp = await getMovies(1, 20)
  return {
    props: {
      movies: resp.data
    }
  }
}
