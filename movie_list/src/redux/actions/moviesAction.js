import axios from 'axios';
import { GET_MOVIES } from '../constants/constants';

export const getMovies = (data) => ({ type: GET_MOVIES, payload: data });

export const getMoviesThunk = () => async (dispatch) => {
  try {
    const res = await axios.get('https://yts.mx/api/v2/list_movies.json', { limit: 1 });
    dispatch(getMovies(res.data));
  } catch (e) {
    console.log(e);
  }
};
