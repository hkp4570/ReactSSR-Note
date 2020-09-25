import { getMovies } from '../../services/movies'

export const actionsType = {
  setData: 'movies/setData',
  fetchMovies: 'movies/fetchMovies'
}

export function setData (data) {
  return { type: actionsType.setData, payload: data }
}

export function fetchMovies (page = 1, limit = 10) {
  return async function (dispatch) {
    const resp = await getMovies(page, limit)
    dispatch(setData(resp.data))
  }
}
