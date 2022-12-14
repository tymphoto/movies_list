import axios from 'axios';
import {
  GET_MOVIES, START, STOP, ADD_COMMENT, DELETE_COMMENT,
} from '../constants/constants';

export const getMovies = (data) => ({ type: GET_MOVIES, payload: data });

export const getMoviesThunk = () => async (dispatch) => {
  try {
    dispatch({ type: START });
    const res = await axios.get('https://yts.mx/api/v2/list_movies.json');
    dispatch(getMovies(res.data.data.movies));
    dispatch({ type: STOP });
  } catch (e) {
    console.log(e);
  }
};

export const addComment = (id, data) => ({ type: ADD_COMMENT, payload: { id, data } });
export const deleteComment = (id, data) => ({ type: DELETE_COMMENT, payload: { id, data } });
