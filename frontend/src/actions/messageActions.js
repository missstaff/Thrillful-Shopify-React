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

  export const error = (obj) => (dispatch) => { 
    dispatch({ 
      type: MESSAGE_ERROR, payload: { content: obj.content, variant: obj.variant, isActive: obj.isActive } });
  }

  export const warning = (obj) => (dispatch) => { 
    dispatch({ 
      type: MESSAGE_WARNING, payload: { content: obj.content, variant: obj.variant, isActive: obj.isActive } });
  }

  export const reset = (obj) => (dispatch) => { 
    dispatch({ 
      type: MESSAGE_RESET, payload: { content: obj.content, variant: obj.variant, isActive: obj.isActive } });
  }