import React from 'react';
import Cards from './Cards';
import AddButtons from './AddButtons';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function List({ title, cards, listID, index }) {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={styles.container}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
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
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: '100%',
        marginRight: 8
        // fontFamily: 'monospace',
        // fontSize: 18
    }
}

export default List;