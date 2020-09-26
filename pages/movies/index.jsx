import Head from 'next/head'
import { getMovies } from '../../services/movieService'
import Pager from '../../components/Pager'
import { useRouter } from 'next/router'

// 先把数据请求到，然后形成静态页面
// router.push()的第三个参数{shallow:true}，是否每次服务端都运行
const Movies = ({ pageProps: { movies, page, total, limit  }}) => {
  const router = useRouter()
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
      <Pager
        page={page}
        total={total}
        limit={limit}
        onPageChange={newPage => {
          router.push(`/movies`, `/movies?page=${newPage}`);
        }}
      />
    </div>
  )
}
export default Movies

// 此函数必须在页面组件中 该函数只可在服务端运行 运行在组件渲染之前 只能在build期间运行 返回的对象中的props属性，将被混合到整个组件属性
// export async function getStaticProps () {
//   const resp = await getMovies(1, 20)
//   return {
//     props: {
//       movies: resp.data
//     }
//   }
// }

// 服务端渲染用此函数
// 每次请求到达后都会运行
// 仅在服务器端运行
// req, res, query
export async function getServerSideProps ({ query }) {
  const page = +query.page || 1
  const resp = await getMovies(page, 10)
  return {
    props: {
      movies: resp.data,
      page,
      total: resp.count,
      limit: 10
    }
  }
}
