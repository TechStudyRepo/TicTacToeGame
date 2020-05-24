import { saveUsers } from './actions/user/user-action';
import { saveResult } from './actions/result/result-action'
import { actionTypes } from './constants/action-state-types';

describe('actions user', () => {
  test('should create an action to save the user details', () => {
    const user = {
      user1: "P1",
      user2: "P2"
    },
      expectedAction = {
        type: actionTypes.REGISTER_USER,
        payload: user,
      };
    expect(saveUsers(user)).toEqual(expectedAction)
  });
})

describe('actions result', () => {
  test('should create an action to result', () => {
    const player = "P1",
      expectedAction = {
        type: actionTypes.SAVE_RESULT,
        payload: player,
      }
    expect(saveResult(player)).toEqual(expectedAction)
  });
})