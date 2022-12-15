import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

// Stylesheet
import './BookItem.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { title, author, item_id } = book;
  return (
    <>
      <div className="book-item-main-div">
        <div className="title-section">
          <div>
            <span className="book-category">Fiction</span>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
          </div>
          <div className="book-action-btns">
            <button type="button">Commnents</button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line
                dispatch(removeBook(item_id)).unwrap();
              }}
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="progress-section">
            <div className="circular-progress" />
            <div>
              <h3 className="circular-progress-percent">65%</h3>
              <span>Completed</span>
            </div>
          </div>
          <div className="current-chapter-section">
            <h3 className="cur-chapter">CURRENT CHAPTER</h3>
            <h4>Chapter 10</h4>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;
