import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';

function EditList(props) {

    const [editForm, setEditForm] = useState(false);
    const [editText, setEditText] = useState('');

    const openEditForm = async (e) => {
        setEditForm(true);

        const { title } = props.lists;

        return <div>
            <Card style={{
                // overflow: 'visible',
                minHeight: 85,
                minWidth: 272,
                padding: '6px 8px 2px'
            }}>
                <TextareaAutosize
                    placeholder=''
                    autoFocus
                    onBlur={setEditForm(false)}
                    value={title}
                    onChange={setEditText(e.target.value)}
                    style={{
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none'
                    }} />
            </Card>
            <div style={styles.formButton}>
                <Button
                    variant='contained'
                    style={{ color: 'white', backgroundColor: '#5aac44' }}
                    onMouseDown={handleEditList}
                // onClick={list ? this.createList : this.createCard}
                >
                    Edit
                </Button>
                <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
            </div>
        </div>
    };

    const handleEditList = async () => {
        openEditForm();
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
    }


    return (
        editForm ? openEditForm() :
            <Button
                variant='contained'
                style={{ color: 'white', backgroundColor: 'orange', marginLeft: '5px', marginBottom: '8px' }}
                onMouseDown={handleEditList}
            // onClick={list ? this.createList : this.createCard}
            >Edit List</Button>
    )
};

const styles = {
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButton: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
});

export default connect(mapStateToProps)(EditList);