import axios from 'axios';
import { GET_MOVIES, START, STOP } from '../constants/constants';

export const getMovies = (data) => ({ type: GET_MOVIES, payload: data });

export const getMoviesThunk = () => async (dispatch) => {
  try {
    dispatch({ type: START });
    const res = await axios.get('https://yts.mx/api/v2/list_movies.json', { limit: 1 });
    console.log(res.data.data.movies);
    dispatch(getMovies(res.data.data.movies));
    dispatch({ type: STOP });
  } catch (e) {
    console.log(e);
  }
};
