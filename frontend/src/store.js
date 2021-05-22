import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userSigninReducer } from './reducers/userReducer.js';
import { messageReducer } from './reducers/messageReducer.js';


const initialState = {};
const reducer = (state, action) => {
    return { userSignin : userSigninReducer,
            message: messageReducer };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );


export default store