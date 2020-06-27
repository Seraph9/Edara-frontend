import { ADD_CARD } from './index';

export const createCard = (text, listID) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listID
        }
    };
};