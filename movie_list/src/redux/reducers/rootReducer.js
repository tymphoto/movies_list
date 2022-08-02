import { combineReducers } from 'redux';
import LoadingReducer from './loadingReducer';
import MoviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  loading: LoadingReducer,
});

export default rootReducer;
