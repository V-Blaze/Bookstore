import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// styleSheet
import './App.css';

// components
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import { getAllBooks } from './redux/books/books';

function App() {
  // console.log(Object.assign(value[0], { id: key }));
  const processAPIData = (res) => {
    const newObj = Object.entries(res).map(([key, value]) => Object.assign(value[0], { id: key }));

    return newObj;
  };

  const dispatch = useDispatch();
  dispatch(getAllBooks())
    .unwrap()
    .then((res) => {
      const payload = processAPIData(res);
      console.log(payload);
      dispatch({ type: 'books/books/GET_ALL_BOOKS', payload });
    });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
