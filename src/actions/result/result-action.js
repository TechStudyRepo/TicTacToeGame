import { actionTypes } from '../../constants/action-state-types';

export const setResult = (props, result) => {
    return dispatch => {
        let player = result;
        dispatch(saveResult(player));
        props.push('/result');
    };
};

export function saveResult(player) {
    return {
        type: actionTypes.SAVE_RESULT,
        payload: player
    }
};