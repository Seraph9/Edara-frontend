import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import AddButtons from './AddButtons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { createList } from '../actions';

function List({ title, cards, listID, index }) {

    // const [lists, setLists] = useState();

    // const getLists = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/');
    //         const data = await response.json();
    //         setLists(data);

    //     } catch (err) {
    //         console.error(err.message);
    //     }

    // }

    // useEffect(() => {
    //     getLists();
    // }, []);


    return (
        <Draggable draggableId={String(listID)} index={index}>
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
                    <Droppable droppableId={String(listID)} type='card'>
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <h4>{title}</h4>
                                {cards.map((card, index) => <Cards key={card.id} index={index} id={card.id} text={card.text} />)}
                                {provided.placeholder}
                                <AddButtons listID={listID} />
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

export default List;