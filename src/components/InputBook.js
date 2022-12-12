import React from 'react';
import { addNewBook } from '../redux/books/books';
import store from '../redux/configureStore';

const InputBook = () => (

  <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = e.target.elements.title.value;
      const author = e.target.elements.author.value;
      const payload = { title, author };
      store.dispatch(addNewBook(payload));
    }}
    >
      <input type="text" placeholder="Book titile ..." id="title" required />
      <input type="text" placeholder="Book author ..." id="author" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default InputBook;
