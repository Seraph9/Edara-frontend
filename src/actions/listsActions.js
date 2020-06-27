import { ADD_LIST } from './index';

export const createList = title => {
    return {
        type: ADD_LIST,
        payload: title
    };
};