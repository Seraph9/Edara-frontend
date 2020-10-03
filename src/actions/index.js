export * from './listsActions'; // this is necessary when importing from main folder 'actions' as this is the entry file or index, even though the function is already being exported in its own file within this folder
export * from './cardsActions';


export const DRAGGED = 'DRAGGED';

// LIST VARIABLES
export const ADD_LIST = 'ADD_LIST';
export const LOAD_LISTS = 'LOAD_LISTS';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

// CARD VARIABLES
export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD'