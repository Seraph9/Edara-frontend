import { ADD_CARD, ADD_LIST } from '../actions';

let listID = 3;
let cardID = 6;

const initialState = [
    {
        id: `list-${1}`,
        title: 'Task Number 1: Trello-Clone Project Management App',
        cards: [
            {
                id: `card-${1}`,
                text: 'List Column Component',
            },
            {
                id: `card-${2}`,
                text: 'Card for tasks placed within a list column component',
            }
        ]
    },
    {
        id: `list-${2}`,
        title: 'Task Number 2: Trello-Clone Project Management App',
        cards: [
            {
                id: `card-${3}`,
                text: 'Making lists appear in columns',
            },
            {
                id: `card-${4}`,
                text: 'Styling lists',
            },
            {
                id: `card-${5}`,
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
                id: `list-${listID}`
            };
            listID += 1
            return [...state, newList];
        case ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
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