import { ADD_CARD, ADD_LIST } from '../actions';

let listID = 3;
let cardID = 4;

const initialState = [
    {
        id: 1,
        title: 'Task Number 1: Trello-Clone Project Management App',
        cards: [
            {
                id: 1,
                text: 'List Column Component',
            },
            {
                id: 2,
                text: 'Card for tasks placed within a list column component',
            }
        ]
    },
    {
        id: 2,
        title: 'Task Number 2: Trello-Clone Project Management App',
        cards: [
            {
                id: 1,
                text: 'Making lists appear in columns',
            },
            {
                id: 2,
                text: 'Styling lists',
            },
            {
                id: 3,
                text: 'Video 3 coming up!',
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID += 1
            return [...state, newList];
        case ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            };
            cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default listsReducer;