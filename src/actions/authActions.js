export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';

export const login = (userId, lists) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: {
            userId, lists
        }
    };
};

export const logout = userId => {
    return {
        type: RECEIVE_USER_LOGOUT,
        payload: userId
    };
};

export const signUp = userId => {
    return {
        type: RECEIVE_NEW_USER,
        payload: userId
    };
};

