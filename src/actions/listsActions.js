import { ADD_LIST, DRAGGED } from './index';

export const createList = title => {
    return {
        type: ADD_LIST,
        payload: title
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: DRAGGED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    };
};