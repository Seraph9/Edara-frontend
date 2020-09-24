import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
// import Board from './components/Board';
import List from './List';
import AddButtons from './AddButtons';
import Splash from './Splash';
import NavMenu from './NavMenu';
import store from '../store';
import { loadLists } from '../actions/listsActions';
import { loadCards } from '../actions/cardsActions';


class Board extends Component {

    state = {
        isLoggedIn: true,
    }

    // const [lists, setLists] = useState();

    // componentDidMount() {

    //     Promise.all([
    //         fetch('http://localhost:8000/lists'),
    //         fetch('http://localhost:8000/')
    //     ]).then(responses => {
    //         return Promise.all(responses.map(res => {
    //             return res.json();
    //         }));
    //     }).then(data => {
    //         console.log("data get fetch in board.js: ", data);
    //         this.props.dispatch(loadLists(data));
    //         console.log("fetch notes in board:", data); // data is an array of objects
    //         this.props.dispatch(loadCards(data));
    //     }).catch(error => {
    //         console.log(error);
    //     });

    // }

    componentDidMount() {

        fetch('http://localhost:8000/lists')
            .then(response => response.json())
            .then(data => {
                console.log("lists get fetch in board.js: ", data);
                this.props.dispatch(loadLists(data));
                //data.map(list => this.props.dispatch(list));
            })
            .catch(error => console.error(error));

        // fetch('http://localhost:8000/')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("cards get fetch in board.js: ", data);
        //         this.props.dispatch(loadCards(data));
        //     })
        //     .catch(error => console.error(error));
    }

    // const currentReduxStoreState = store.getState();
    // console.log("Current Redux Store State: ", currentReduxStoreState);
    // fetch('http://localhost:8000/lists')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("data get fetch in board.js: ", data);
    //         this.props.dispatch(loadLists(data));
    //         //data.map(list => this.props.dispatch(list));
    //         fetch('http://localhost:8000/')
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log("fetch notes in board:", data); // data is an array of objects
    //                 this.props.dispatch(loadCards(data));
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             })
    //     })

    //setLists(data);
    // useEffect(() => {
    //     getLists();
    // }, []);

    onDragEnd = result => {
        // re-ordering logic for drag-n-drop persistence
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }
        // if (type === 'list') {
        //   return;
        // }
        console.log('logged')
        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };

    render() {
        const { lists } = this.props;
        console.log("lists of current state in board.js: ", lists);
        return this.state.isLoggedIn ? (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <NavMenu style={styles.navMenu} />
                <Droppable droppableId='all-lists' direction='horizontal' type='list'>
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={styles.listsContainer}
                        >
                            {/* {Array.from(lists).map((list, index) => { */}
                            {lists ? lists.map((list, index) => {
                                console.log("list in board.js: ", list);
                                return (
                                    <List
                                        key={list.id}
                                        listID={list.id}
                                        title={list.title}
                                        cards={list.cards}
                                        index={index}
                                    />
                                )
                            }) : "loading"}
                            {provided.placeholder}
                            <AddButtons list />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        ) : <Splash />
    }
};

const styles = {
    listsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(Board);
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import List from './List';
// import { loadLists } from '../actions/listsActions';




// function Board() {

//     const dispatch = useDispatch();

//     const lists = useSelector((state) => {
//         return state.lists;
//     });

//     useEffect(() => {

//         const getLists = async () => {

//             const res = await fetch('');
//             const newLists = await res.json(); // data
//             dispatch(loadLists(newLists));


//         };

//         getLists();

//     }, [])

//     return (
//         <>
//             {lists.map((list, index) => {
//                 //console.log(list);
//                 return (
//                     <List
//                         key={list.id}
//                         listID={list.id}
//                         title={list.title}
//                         cards={list.cards}
//                         index={index}
//                     />
//                 )
//             })}
//         </>
//     )
// };

// export default Board;