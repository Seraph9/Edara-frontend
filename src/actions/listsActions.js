import { ADD_LIST, LOAD_LISTS, DRAGGED } from './index';

export const createList = title => {
    return {
        type: ADD_LIST,
        payload: title
    };
};

export const loadLists = lists => {
    return {
        type: LOAD_LISTS,
        payload: lists
    }
}

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