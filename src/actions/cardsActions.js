import { ADD_CARD, LOAD_CARDS } from './index';

export const createCard = (text, listId) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listId
        }
    };
};

export const loadCards = cards => {
    return {
        type: LOAD_CARDS,
        payload: cards
    }
}