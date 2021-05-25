import {
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS, 
     PRODUCT_ADD_FAIL,
  } from '../constants/productConstants';
  
  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case  PRODUCT_ADD_REQUEST:
        return { loading: true };
      case PRODUCT_ADD_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case  PRODUCT_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };