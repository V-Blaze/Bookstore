import React from 'react';
import BookItem from './BookItem';
import InputBook from './InputBook';
import store from '../redux/configureStore';

const Books = () => {
  const state = store.getState();
  const { books } = state;
  return (
    <>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
      <InputBook />
    </>
  );
};

export default Books;
