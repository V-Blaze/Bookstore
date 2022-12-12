import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <button type="button">Remove</button>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;
