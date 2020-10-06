import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

function DeleteList(props) {

    const handleDeleteList = async () => {
        // NOTE: TODO - need to get the corrent listId from backend, not from hard-coded initial state of store
        const { listId } = props;
        console.log("props in delete list: ", props);
        //const listId = listID.substring(5, 6);
        //const userId = localStorage.getItem('EDARA_CURRENT_USER_ID');
        //const body = { userId };
        //const resCardsDelete = await fetch(`http://localhost:8000/notes/${}`)
        const res = await fetch(`http://localhost:8000/lists/${listId}`, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(body)
        });

    };

    return (
        <Button
            variant='contained'
            style={{ color: 'white', backgroundColor: 'red', marginBottom: '8px' }}
            onMouseDown={handleDeleteList}
        // onClick={list ? this.createList : this.createCard}
        >Delete List</Button>
    )
};

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
});

export default connect(mapStateToProps)(DeleteList);
