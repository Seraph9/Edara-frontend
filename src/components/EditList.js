import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

function EditList(props) {

    const handleEditList = async () => {
        // NOTE: TODO - need to get the corrent listId from backend, not from hard-coded initial state of store
        const { id, title } = props.lists;
        console.log("props.lists in editlist.js: ", props.lists);
        //const listId = id.substring(5, 6);
        //const userId = localStorage.getItem('EDARA_CURRENT_USER_ID');
        const body = { title };
        const res = await fetch(`http://localhost:8000/lists/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    };

    return (
        <Button
            variant='contained'
            style={{ color: 'white', backgroundColor: 'orange' }}
            onMouseDown={handleEditList}
        // onClick={list ? this.createList : this.createCard}
        >Edit</Button>
    )
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(EditList);