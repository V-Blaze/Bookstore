import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import InputBook from './InputBook';

// stylesheet
import './Books.css';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <div className="main-book-section">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))}
        <InputBook />
      </div>
    </>
  );
};

export default Books;
