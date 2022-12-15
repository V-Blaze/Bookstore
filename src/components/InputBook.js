import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
// components
import { addNewBook } from '../redux/books/books';
// Stylesheet
import './InputBook.css';

const InputBook = () => {
  const dispatch = useDispatch();

  return (

    <div className="input-form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const author = e.target.elements.author.value;
          const payload = {
            item_id: uuidv4(), title, author, category: 'fiction',
          };
          dispatch(addNewBook(payload)).unwrap();
          e.target.reset();
        }}
        className="book-form"
      >
        <input type="text" placeholder="Book titile ..." id="title" required />
        <input type="text" placeholder="Book author ..." id="author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default InputBook;
