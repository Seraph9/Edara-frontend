import { ADD_LIST, LOAD_LISTS, EDIT_LIST, DELETE_LIST, DRAGGED } from './index';

// Create
export const createList = title => {
    return {
        type: ADD_LIST,
        payload: title
    };
};

// Read
export const loadLists = lists => {
    return {
        type: LOAD_LISTS,
        payload: lists
    }
};

// Update
export const editList = title => {
    return {
        type: EDIT_LIST,
        payload: title
    }
};

// Delete
export const deleteList = listId => {
    return {
        type: DELETE_LIST,
        payload: listId
    }
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: DRAGGED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    };
};