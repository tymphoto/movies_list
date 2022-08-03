import { GET_MOVIES, ADD_COMMENT, DELETE_COMMENT } from '../constants/constants';

const initialState = [];

const MoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return payload;
    case ADD_COMMENT:
      return state.map((el) => {
        if (el.id === payload.id) {
          if (el.comment) el.comment.push(payload.data);
          if (!el.comment) return { ...el, comment: [payload.data] };
        }
        return el;
      });
    case DELETE_COMMENT:
      return state.map((el) => {
        if (el.id === payload.id && el.comment.includes(payload.data)) {
          const newComments = el.comment.filter((comment) => comment !== payload.data);
          return { ...el, comment: newComments };
        }
        return el;
      });
    default:
      return state;
  }
};

export default MoviesReducer;
