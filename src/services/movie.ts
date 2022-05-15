import { axios } from 'hooks/worker';
import { IMovieAPIRes } from 'types/movie.d';

const API_URL = 'http://omdbapi.com/';

interface Params {
  s: string;
  page: number;
}

export const getMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${API_URL}`, {
    params: {
      ...params,
      apikey: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });
