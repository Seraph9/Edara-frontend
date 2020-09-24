import { ADD_CARD, LOAD_CARDS } from './index';

export const createCard = (text, listID) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listID
        }
    };
};

export const loadCards = cards => {
    return {
        type: LOAD_CARDS,
        payload: cards
    }
}