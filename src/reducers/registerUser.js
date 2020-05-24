import { actionTypes } from '../constants/action-state-types';

const initialState = {
    user: {}
};

export const registerUser = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};