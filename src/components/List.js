import React from 'react';
import Cards from './Cards';

function List({ title, cards }) {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => <Cards text={card.text} />)}
        </div>

    )
};

const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
        // fontFamily: 'monospace',
        // fontSize: 18
    }
}

export default List;