import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import { deleteFavourite, getFavourite } from '../../redux/actions/favouriteAction';

function MovieCard({ movie, id, type }) {
  const dispatch = useDispatch();

  return (
    <div className="movieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.medium_cover_image} alt="movies_cover" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.raiting}
          </Card.Text>
          {type === 'moviesList'
            ? (
              <Button
                variant="outline-danger"
                className="movie_card_button"
                onClick={() => dispatch(getFavourite(movie))}
              >
                ❤❤❤
              </Button>
            )
            : (
              <Button
                variant="outline-secondary"
                className="movie_card_button"
                onClick={() => dispatch(deleteFavourite(id))}
              >
                🗑️
              </Button>
            )}

        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
