import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
// import Board from './components/Board';
import List from './List';
import AddButtons from './AddButtons';
import Splash from './Splash';
import NavMenu from './NavMenu';


class Board extends Component {

    state = {
        isLoggedIn: true,
    }

    // const [lists, setLists] = useState();

    // getLists = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/lists', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         const data = await response.json();
    //         console.log("List Data: ", data);
    //         //setLists(data);

    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // };

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
        console.log(lists);
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
                            {lists.map((list, index) => {
                                //console.log(list);
                                return (
                                    <List
                                        key={list.id}
                                        listID={list.id}
                                        title={list.title}
                                        cards={list.cards}
                                        index={index}
                                    />
                                )
                            })}
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