import React from 'react';
import Icon from '@material-ui/core/Icon';

class AddButtons extends React.Component {

    state = {
        formOpen: false
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
        return <p>Form</p>
    }

    openForm = () => {
        this.setState({
            formOpen: true
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
    }
}

export default AddButtons;