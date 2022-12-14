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
  const dispatch = useDispatch();
  dispatch(getAllBooks()).unwrap();

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
