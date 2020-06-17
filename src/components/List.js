import React from 'react';
import Cards from './Cards';

function List({ title }) {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <Cards />
        </div>

    )
};

const styles = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default List;