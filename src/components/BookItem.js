import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const { title, author, id } = book;
  return (
    <>
      <div>
        <h4>{title}</h4>
        <h6>{author}</h6>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeBook(id));
        }}
      >
        Remove
      </button>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;
