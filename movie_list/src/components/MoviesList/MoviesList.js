import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ list, type }) {
  const { loading } = useSelector((state) => state);

  return (
    <div className="moviesList">
      {loading
        ? <div><img src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=ecf05e47r8tpfe1atvcwrm719cuiszlk0n0dbmzn0zs022jm&rid=giphy.gif&ct=g" alt="LOADING" /></div>
        : (list.map((movie) => (
          <MovieCard
            movie={movie}
            id={movie.id}
            key={movie.id}
            type={type}
          />
        )))}
    </div>

  );
}

export default MoviesList;
