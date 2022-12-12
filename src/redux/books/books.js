import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];
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
        ...state.filter((item) => item.id !== action.payload.id),
      ];
    default:
      return state;
  }
}

export const addNewBook = (payload) => ({ type: ADD_BOOK, payload });

export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
