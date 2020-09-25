import request from './request';

export async function getMovies (page=1,limit=10) {
  return await request.get('/api/movie',{
    page,
    limit,
  })
}
