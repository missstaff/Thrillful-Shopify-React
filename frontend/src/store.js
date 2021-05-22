import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer.js';


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")?
        JSON.parse(localStorage.getItem("userInfo")) : null
    }
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});


// const reducer = (state, action) => {
//     return { userSignin : userSigninReducer };
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );


export default store