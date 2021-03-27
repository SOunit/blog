import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// ==============================================
// original, multiple http request is problem!
// ===============================================
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// };

// ============================================================
// the code below is for dispalying problem of memoize
// they dont work as we expect
// they request multiple times still even though memorize
// ===========================================================

// memorize not work well 1
// this returns inner function, then http request is done
// export const fetchUser = _.memoize(function (id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   };
// });

// memorize not work well 2
// this memorize inner function, but inner function is new everytime.
// so they make http request everytime
export const fetchUser = function (id) {
  return _.memoize(async function (dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  });
};
