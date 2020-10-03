import { ADD_CARD, DRAGGED, LOAD_CARDS, loadCards } from '../actions';

const initialState = []; // state is empty so what am I mapping over below?

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD: { // start with braces to give newState variable its own context so you can redeclare it again below
            const newCard = {
                text: action.payload.text,
                id: action.payload.listId
            };
            //cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.listId) {
                    console.log("list in ADD_CARD listsReducer:", list);
                    return {
                        ...list,
                        cards: [newCard]
                    }
                } else {
                    return list;
                }
            });
            //return newState;
            return [...action.payload]
        }
        case LOAD_CARDS: {
            const newState = state.map(list => {
                list['cards'] = [...action.payload]
            })
            // if (list.id === action.payload.listId) {
            //     console.log("list in ADD_CARD listsReducer:", list);
            //     return {
            //         ...list,
            //         cards: [newCard]
            //     }
            //return newState;
            return [...action.payload]
        }
        default:
            return state;
    }
};

export default cardsReducer;