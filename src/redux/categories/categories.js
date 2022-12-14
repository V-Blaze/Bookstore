const CHECK_STATUS = 'categories/categories/CHECK_STATUS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
}

export const checkCurStatus = () => ({
  type: CHECK_STATUS,
});
