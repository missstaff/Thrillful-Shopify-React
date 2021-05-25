import {
    MESSAGE_SUCCESS,
    MESSAGE_ERROR,
    MESSAGE_WARNING,
    MESSAGE_RESET,
} from '../constants/messageConstants';


const initialState = {
    message:
    {
        content: '',
        variant: '',
        isActive: false,
    }
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_SUCCESS:
            return {
                ...state,
                message: {
                    content: action.payload.content,
                    variant: action.payload.variant,
                    isActive: action.payload.isActive,
                }
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                message: {
                    content: action.payload.content,
                    variant: action.payload.variant,
                    isActive: action.payload.isActive,
                }
            }
        case MESSAGE_WARNING:
            return {
                ...state,
                message: {
                    content: action.payload.content,
                    variant: action.payload.variant,
                    isActive: action.payload.isActive,
                }
            }
        case MESSAGE_RESET:
            return {
                message: {
                    content: '',
                    variant: '',
                    isActive: false,
                }
            }
        default:
            return state;
    }

}