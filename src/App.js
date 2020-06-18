import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div>
        <h1>Idara App!</h1>
        <div style={styles.listsContainer}>
          {lists.map(list => <List title={list.title} cards={list.cards} />)}
        </div>
      </div>
    )
  }
};

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
