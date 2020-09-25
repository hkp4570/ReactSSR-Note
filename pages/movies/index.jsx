import Head from 'next/head';
const Movies = () => {
  console.log('movies render')
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
