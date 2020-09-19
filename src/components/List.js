import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import AddButtons from './AddButtons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { createList } from '../actions';
import { connect, useDispatch } from 'react-redux';

function List(props) {
    const { title, cards, listID, index, lists } = props;

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
                                {lists[2] ? <h4>{lists[2].title}</h4> : "loading"}
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

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(List);