import { combineReducers } from 'redux';
import FavouriteReducer from './favouriteReducer';
import LoadingReducer from './loadingReducer';
import MoviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  moviesList: MoviesReducer,
  favourite: FavouriteReducer,
  loading: LoadingReducer,
});

export default rootReducer;
