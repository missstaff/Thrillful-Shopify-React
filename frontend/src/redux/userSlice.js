import { createSlice } from "@reduxjs/toolkit";
import { error } from "./messageSlice.js";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      info: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
      status: localStorage.getItem("userInfo") ? "loggedIn" : "loggedOut",
    },
  },
  reducers: {
    loading: (state) => {
      return {
        ...state,
        user: {
          status: "loading",
        },
      };
    },
    loggedIn: (state, action) => {
      return {
        ...state,
        user: {
          info: action.payload,
          status: "loggedIn",
        },
      };
    },
    loggedOut: (state) => {
      return {
        ...state,
        user: {
          info: null,
          status: "loggedOut",
        },
      };
    },
    default: (state) => {
      return state;
    },
  },
});

// actions are exported: action names become the 'action.type'

export const { loading, loggedIn, loggedOut } = userSlice.actions;

// thunks

export const signin = (email, password) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    //gets overwritten to loggedin when we dispatch.
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch(loggedIn(data));
  } catch (err) {
    // import error() from messageSlice
    dispatch(loggedOut());
    dispatch(
      error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      )
    );
  }
};

export const register =
  (first_name, last_name, username, email, password) => async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.post("/api/users/register", {
        first_name,
        last_name,
        username,
        email,
        password,
      });
      dispatch(loggedIn(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      //Dispatch loggedout so it doesn't continue to spin.
      dispatch(loggedOut());
      dispatch(
        error(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      );
    }
  };

export const update = (user) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.put("/api/users/profile", user, {
      headers: { Authorization: `Bearer ${user.info.token}` },
    });
    dispatch(loggedIn(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    //Dispatch loggedout so it doesn't continue to spin.
    //dispatch(loggedOut());
    dispatch(
      error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      )
    );
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch(loggedOut());
};

// make the state of the user easily available to any component via useSelector from react-redux
export const selectUser = (state) => state.user;

export default userSlice.reducer;
