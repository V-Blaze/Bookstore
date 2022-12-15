import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurStatus } from '../redux/categories/categories';
// Stylesheet
import './categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div className="categories-main-container">
        <div>
          <h5 className="category-status">{categories}</h5>
        </div>
        <button
          className="check-status-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(checkCurStatus());
          }}
        >
          Check Status
        </button>
      </div>
    </>
  );
};

export default Categories;
