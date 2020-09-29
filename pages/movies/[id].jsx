import { getMovies, getMovie } from '../../services/movieService'
import {useRouter} from 'next/router';

const MoviesDetail = ({  movie  }) => {
  const router = useRouter();
  if(router.isFallback){
    return <h1>loading...</h1>
  }
  return (
    <div>
      <h1>中文名：{movie.name}</h1>
      <h1>英文名：{movie.ename}</h1>
    </div>
  )
}

export default MoviesDetail

export async function getStaticProps ({ params }) {
  const resp = await getMovie(params.id)
  return {
    props: {
      movie: resp.data
    }
  }
}

// 该函数用于得到有哪些可能出现的id  fallback作用：当没有匹配到静态页面是需要做什么
export async function getStaticPaths () {
  const resp = await getMovies(1,10)
  const paths = resp.data.map(e => ({
    params: {
      id: e._id
    }
  }))
  console.log('getStaticPaths', paths)
  return {
    paths,
    fallback: true,
  }
}
