import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userSigninReducer } from './reducers/userReducer.js';


const initialState = {};
const reducer = (state, action) => {
    return { userSignin : userSigninReducer };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );


export default store