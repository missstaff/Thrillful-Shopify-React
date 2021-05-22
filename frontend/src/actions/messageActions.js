// import React from 'react';

import {
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  MESSAGE_WARNING,
  MESSAGE_RESET,
} from '../constants/messageConstants';


export const success = (obj) => (dispatch) => { 
  dispatch({ 
    type: MESSAGE_SUCCESS, payload: { content: obj.content, variant: obj.variant, isActive: obj.isActive } });
}