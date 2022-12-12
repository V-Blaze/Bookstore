import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'


const initialState = []
export default reducer = (state = initialState, action = {}) =>{
    switch(action.type) {
        case ADD_BOOK:
            return [
                ...state,
                {
                    title: action.title,
                    author: action.author,
                    id: uuidv4()
                }
            ]
        case REMOVE_BOOK:
            return [
                ...state.filter((item) =>{
                return item.id !== action.id
                })
            ]
        default:
            return state
    }
}

export const addNewBook = (payload) => {
    return {type: ADD_BOOK, payload}
}

export const removeBook = (payload) => {
    return {type: REMOVE_BOOK, payload}
}