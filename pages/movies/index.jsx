import Head from 'next/head';
import {getMovies} from '../../services/movieService'

const Movies = () => {
  getMovies().then(res => {
    console.log(res)
  })
  return (
    <div>
      <Head>
        <title>电影</title>
      </Head>
      <h1>movies</h1>
    </div>
  )
}
export default Movies;
