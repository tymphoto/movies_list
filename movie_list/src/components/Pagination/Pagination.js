import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ButtonGroup className="me-2" aria-label="First group">
        {pageNumbers.map((number) => (
          <Button variant="secondary" onClick={() => paginate(number)}>{number}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Pagination;
