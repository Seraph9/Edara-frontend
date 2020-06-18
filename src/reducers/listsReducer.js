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
        default:
            return state;
    }
};

export default listsReducer;