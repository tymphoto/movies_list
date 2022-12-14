import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './MovieCard.css';
import { deleteFavourite, getFavourite } from '../../redux/actions/favouriteAction';
import { addComment, deleteComment } from '../../redux/actions/moviesAction';

function MovieCard({ movie, id, type }) {
  const dispatch = useDispatch();
  const [currentComment, setCurrentComment] = useState('');
  const [disabled, setDisabled] = useState(true);

  const addNewComment = (newComment, e) => {
    e.preventDefault();
    dispatch(addComment(id, newComment));
    setCurrentComment('');
    setDisabled(true);
  };

  return (
    <div className="movieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.medium_cover_image} alt="movies_cover" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          {type === 'moviesList'
            ? (
              <div>
                <div className="comment_container">
                  {movie.comment ? <Card.Text>Комментарии</Card.Text> : ''}
                  {movie.comment?.map((comment) => (
                    <div key={Math.random()} className="comment_box">
                      <Card.Text>{comment}</Card.Text>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="movie_card_button_delete"
                        onClick={() => dispatch(deleteComment(id, comment))}
                      >
                        ❌
                      </Button>
                    </div>
                  ))}
                </div>
                <Form>
                  <Form.Control
                    type="comment"
                    placeholder="Комментарий"
                    value={currentComment}
                    onChange={(e) => { setCurrentComment(e.target.value); setDisabled(false); }}
                  />
                  <Button
                    variant="outline-primary"
                    className="movie_card_button"
                    disabled={disabled}
                    onClick={(e) => addNewComment(currentComment, e)}
                  >
                    Добавить комментарий
                  </Button>
                </Form>
                <Button
                  variant="outline-danger"
                  className="movie_card_button"
                  onClick={() => dispatch(getFavourite(movie))}
                >
                  ❤❤❤
                </Button>
              </div>
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
