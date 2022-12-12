import React from 'react';

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

export default BookItem;
