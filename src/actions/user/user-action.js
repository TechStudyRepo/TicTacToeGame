import { actionTypes } from '../../constants/action-state-types';

export const addUser = (props, player1, player2) => {
    return dispatch => {
        let users = {
            user1: player1,
            user2: player2
        };
        dispatch(saveUsers(users));
        props.push('/game');
    };
};

export function saveUsers(users) {
    return {
        type: actionTypes.REGISTER_USER,
        payload: users
    }
};