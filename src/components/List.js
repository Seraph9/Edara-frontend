import React from 'react';
import Cards from './Cards';
import AddButtons from './AddButtons';
import { Droppable } from 'react-beautiful-dnd';

function List({ title, cards, listID }) {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4>{title}</h4>
                    {cards.map((card, index) => <Cards key={card.id} index={index} id={card.id} text={card.text} />)}
                    <AddButtons listID={listID} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
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