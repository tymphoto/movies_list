import { GET_FAVOURITE, DELETE_FAVOURITE } from '../constants/constants';

const initialState = [];

const FavouriteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FAVOURITE:
      if (state.includes(payload)) return [...state];
      return [...state, payload];
    case DELETE_FAVOURITE:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default FavouriteReducer;
