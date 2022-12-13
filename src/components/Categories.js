import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <hr />
        <div>
          <h5>{categories}</h5>
        </div>
        <button
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
