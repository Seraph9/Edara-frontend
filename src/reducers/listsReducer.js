import { ADD_CARD, ADD_LIST, DRAGGED, LOAD_LISTS } from '../actions';

let listID = 3;
let cardID = 6;

const initialState = [
    {
        id: `list-${1}`,
        userId: 1,
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
        userId: 1,
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
                text: 'Backend coming up!',
            }
        ]
    }
];

const listsReducer = async (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            // const res = await fetch('http://localhost:8000/lists');
            // console.log('response in listsReducer is: ', res);
            // const data = res.json();
            // console.log('data in listsReducer is: ', data);
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1
            return [...state, newList];
        case ADD_CARD: { // start with braces to give newState variable its own context so you can redeclare it again below
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
        }
        case DRAGGED:
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId, type } = action.payload;

            const newState = [...state];

            // moving/dragging lists/columns around the page
            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                console.log(newState);
                return newState;
            }

            // move cards in the same list/column
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // move cards to other lists/columns
            if (droppableIdStart !== droppableIdEnd) {
                // find list where drag happened/originated
                const listStart = state.find(list => droppableIdStart === list.id);
                // extract card from this source list
                const card = listStart.cards.splice(droppableIndexStart, 1);
                // fine the destination list where drag ends
                const listEnd = state.find(list => droppableIdEnd === list.id);
                // place or insert card in this destination list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        case LOAD_LISTS:
            return [...action.payload]
        default:
            return state;
    }
};

export default listsReducer;