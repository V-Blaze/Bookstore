import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Clean code',
    author: 'Robert Matini',
    id: 1
  },
  {
    title: 'Programming Pearls',
    author: 'Jon Bently',
    id: 2
  },
  {
    title: 'Introduction to Algorithim',
    author: 'Ronald Rivest',
    id: 3
  },
];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: uuidv4(),
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
}

export const addNewBook = (payload) => ({ type: ADD_BOOK, payload });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
