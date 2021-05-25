import Axios from 'axios';
import {
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
    
} from '../constants/productConstants';

export const productadd = (identification, item) => async (dispatch) => {
  dispatch({ type:  PRODUCT_ADD_REQUEST, payload: { identification, item } });
  try {
    const { data } = await Axios.post('/api/products/messages/new', { identification, item });
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
    localStorage.setItem('productInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export const signout = () => (dispatch) => {
//   localStorage.removeItem('productInfo');
//   localStorage.removeItem('cartItems');
//   dispatch({ type: USER_SIGNOUT });
// };
