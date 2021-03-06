import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import AddButtons from './AddButtons';
import DeleteList from './DeleteList';
import EditList from './EditList';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { createList, loadCards } from '../actions';
import { connect, useDispatch } from 'react-redux';


function List(props) {
    //const [listCards, setListCards] = useState();
    const { title, cards, listId, index, lists } = props;
    console.log("lists in list.js: ", lists);
    const getListCards = () => {
        fetch(`http://localhost:8000/lists/${listId}/cards`)
            .then(response => response.json())
            .then(data => {
                // question: should I have a get route handler in notes router for all cards or in lists router?
                console.log("cards get fetch in list.js: ", data);
                const listCards = data.map(list => list.Cards);
                props.dispatch(loadCards(listCards));
                //setListCards(data);
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getListCards();
    }, []);


    console.log('cards in list.js: ', cards);
    console.log('lists in list.js: ', lists);
    const { array } = cards;
    console.log("array: ", array);

    return (
        <Draggable draggableId={String(listId)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                        ...styles.listContainer,
                        ...provided.draggableProps.style
                    }}
                >
                    <Droppable droppableId={String(listId)} type='card'>
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <h4>{title}</h4><DeleteList listId={listId} /><EditList listId={listId} />
                                {/* {lists[2] ? <h4>{lists[2].title}</h4> : "loading"} */}
                                {cards ? cards.map((card, index) => (<Cards key={card.listId} index={index} id={card.listId} text={card.text} />)) : "loading"}
                                {provided.placeholder}
                                <AddButtons listId={listId} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>

    )
};

const styles = {
    listContainer: {
        backgroundColor: 'NavajoWhite', // #dfe3e6
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: '100%',
        marginRight: 8,
        fontFamily: 'Roboto, Helvetica, Arial, sans- serif'
        // fontSize: 18
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
});

export default connect(mapStateToProps)(List);