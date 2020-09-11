export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const login = (text, listID) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listID
        }
    };
};

export const logout = (text, listID) => {
    return {
        type: RECEIVE_USER_LOGOUT,
        payload: {
            text, listID
        }
    };
};

export const signUp = (text, listID) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listID
        }
    };
};

