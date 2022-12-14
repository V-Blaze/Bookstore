import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import InputBook from './InputBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          book={book}
        />
      ))}
      <InputBook />
    </>
  );
};

export default Books;
