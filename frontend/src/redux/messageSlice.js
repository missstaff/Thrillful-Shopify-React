import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: {
      content: '',
      variant: '',
      isActive: false,
    },
  },
  reducers: {
    success: (state, action) => {
      return {
        ...state,
        message: {
          content: action.payload,
          variant: 'green',
          isActive: true,
        },
      };
    },
    error: (state, action) => {
      return {
        ...state,
        message: {
          content: action.payload,
          variant: 'red',
          isActive: true,
        },
      };
    },
    warning: (state, action) => {
      return {
        ...state,
        message: {
          content: action.payload,
          variant: 'yellow',
          isActive: true,
        },
      };
    },
    reset: (state) => {
      return {
        ...state,
        message: {
          content: '',
          variant: '',
          isActive: false,
        },
      };
    },
    default: (state) => {
      return state;
    },
  },
});

export const { success, error, warning, reset } = messageSlice.actions;

export const selectMessage = (state) => state.message;

export default messageSlice.reducer;
