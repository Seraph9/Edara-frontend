import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';


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
                <Button variant='contained' style={{ color: 'white', backgroundColor: '#5aac44' }}>
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

    render() {

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

export default AddButtons;