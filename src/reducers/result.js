import { actionTypes } from '../constants/action-state-types';

const initialState = {
    player: ''
};

export const result = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RESULT:
            return {
                ...state,
                player: action.payload
            };
        default:
            return state;
    }
};