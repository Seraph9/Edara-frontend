import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

function DeleteList(props) {

    const handleDeleteList = async () => {
        // NOTE: TODO - need to get the corrent listId from backend, not from hard-coded initial state of store
        const { listID } = props;
        const listId = listID.substring(5, 6);
        //const userId = localStorage.getItem('EDARA_CURRENT_USER_ID');
        //const body = { userId };
        const res = await fetch(`http://localhost:8000/lists/${34}`, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(body)
        });
    };

    return (
        <Button
            variant='contained'
            style={{ color: 'white', backgroundColor: 'red' }}
            onMouseDown={handleDeleteList}
        // onClick={list ? this.createList : this.createCard}
        >Delete List</Button>
    )
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(DeleteList);
