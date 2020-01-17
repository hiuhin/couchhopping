import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUsers = cityId => dispatch => (
    APIUtil.fetchUsers(cityId).then(payload => (
        dispatch(receiveAllUsers(payload))
    ))
);

export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId).then(payload => (
        dispatch(receiveUser(payload))
    ))
);

export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(payload => (
        dispatch(receiveUser(payload))
    ))
);