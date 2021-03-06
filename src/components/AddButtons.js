import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import { connect, useDispatch } from 'react-redux';
import { createList, createCard } from '../actions';
import store from '../store';


class AddButtons extends React.Component {

    state = {
        formOpen: false,
        text: ''
    }

    addButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0, 0, 0, .15)' : 'inherit';

        return (
            <div onClick={this.openForm} style={{
                ...styles.buttonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
            }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list
            ? 'Enter list title...'
            : 'Enter a title for this card...';

        const buttonTitle = list ? 'Add List' : 'Add Card';

        return <div>
            <Card style={{
                // overflow: 'visible',
                minHeight: 85,
                minWidth: 272,
                padding: '6px 8px 2px'
            }}>
                <TextareaAutosize
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
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
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                // onClick={list ? this.createList : this.createCard}
                >
                    {buttonTitle}{' '}
                </Button>
                <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
            </div>
        </div>
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    // handleAddList = () => {
    //     const { dispatch } = this.props;
    //     const { text } = this.state;

    //     if (text) {
    //         this.setState({ text: '' });
    //         dispatch(createList(text));
    //     }
    //     return;
    // }

    handleAddCard = async e => {
        //console.log('event.current: ', e.currentTarget);

        let { dispatch, lists } = this.props;

        const { text } = this.state;
        // let listId = lists[0].id;
        // const lists ? lists.map(list => {
        //     if (list.id === // if current selected list's id matches the list.id during mapping then only set that list.id to the variable listId to be sent as route parameter. listId = list.id) : 'No lists!';
        const userId = localStorage.getItem('EDARA_CURRENT_USER_ID');
        if (text) {
            const body = { text };
            try {
                lists.map(async list => {
                    if (list.id) {
                        let listId = list.id;
                        const res = await fetch(`http://localhost:8000/lists/${listId}/cards`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(body)
                        })
                        const data = await res.json();
                        console.log('Card data: ', data);
                        const { card } = data;
                        console.log('card text: ', card.text)
                        dispatch(createCard(card.text, card.listId));
                        this.setState({ text: '' });
                    }
                })

            } catch (err) {
                console.error(err.message);
            }


        }

    };

    // dispatch = useDispatch();

    handleAddList = async e => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { text } = this.state;
        const userId = localStorage.getItem('EDARA_CURRENT_USER_ID');


        if (text) {
            const body = { userId, title: text };
            try {
                const res = await fetch('http://localhost:8000/lists', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                })

                const data = await res.json();

                const { list } = data;

                dispatch(createList(list.title));
                const { lists } = this.props;

                //console.log("redux current store-state: ", store.getState());
                //this.setState({ text: lists });
            } catch (err) {
                console.error(err.message);
            }


        }
        // const { id, title } = this.props.list; // not needed

    };

    render() {
        //console.log(this.props);
        return this.state.formOpen ? this.renderForm() : this.addButton();
    }
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

// const mapDispatchToProps = dispatch => ({
//     createCard: (text, listID) => {
//         dispatch(createCard(text, listID))
//     },
//     createList: title => {
//         dispatch(createList(title))
//     }
// });

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
});

export default connect(mapStateToProps)(AddButtons);