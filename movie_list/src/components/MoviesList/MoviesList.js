import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
import './MoviesList.css';

function MoviesList({ list, type }) {
  const { loading } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = list.slice(firstMovieIndex, lastMovieIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="moviesList">
        {loading
          ? <div><img src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=ecf05e47r8tpfe1atvcwrm719cuiszlk0n0dbmzn0zs022jm&rid=giphy.gif&ct=g" alt="LOADING" /></div>
          : (currentMovies.map((movie, i) => (
            <MovieCard
              movie={movie}
              id={movie.id}
              key={movie.id}
              type={type}
            />
          )))}
      </div>

      <div>
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={list.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default MoviesList;
