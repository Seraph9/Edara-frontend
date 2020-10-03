import { ADD_CARD, LOAD_CARDS, EDIT_CARD, DELETE_CARD } from './index';

// Create
export const createCard = (text, listId) => {
    return {
        type: ADD_CARD,
        payload: {
            text, listId
        }
    };
};

// Read
export const loadCards = cards => {
    return {
        type: LOAD_CARDS,
        payload: cards
    }
};

// Update
export const editCard = (text, listId) => {
    return {
        type: EDIT_CARD,
        payload: {
            text, listId
        }
    }
};

// Delete
export const deleteCard = cardId => {
    return {
        type: DELETE_CARD,
        payload: {
            cardId
        }
    }
};