import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ue1iC6uczfiPytEmPJNe/books';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const GET_ALL_BOOKS = 'books/books/GET_ALL_BOOKS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    case GET_ALL_BOOKS:
      if (action.payload === '') {
        return [];
      }
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}

export const getAllBooks = createAsyncThunk(GET_ALL_BOOKS,
  async () => {
    const response = await axios.get(BASE_URL);
    return response?.data;
  });

// export const addNewBook = (payload) => ({ type: ADD_BOOK, payload });
export const addNewBook = createAsyncThunk(ADD_BOOK,
  async (payload) => {
    await axios.post(BASE_URL, payload);
    return payload;
  });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
