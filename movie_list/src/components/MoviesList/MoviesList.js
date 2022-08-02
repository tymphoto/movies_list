import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesThunk } from '../../redux/actions/moviesAction';
import MovieCard from '../MovieCard/MovieCard';

function MoviesList() {
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => state);
  console.log(moviesList);

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, []);

  return (
    <div>
      {moviesList.data.movies?.map((movie) => (
        <MovieCard
          movie={movie}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </div>
  );
}

export default MoviesList;
