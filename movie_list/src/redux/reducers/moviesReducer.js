import { GET_MOVIES } from '../constants/constants';

const initialState = {};

const MoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return payload;
    default:
      return state;
  }
};

export default MoviesReducer;
