import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { title, author, item_id } = book;
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
          // eslint-disable-next-line
          dispatch(removeBook(item_id)).unwrap();
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
