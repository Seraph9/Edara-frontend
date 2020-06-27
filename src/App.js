import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import AddButtons from './components/AddButtons';

class App extends Component {
  render() {
    const { lists } = this.props;
    console.log(lists);

    return (
      <div>
        <h1>Idara App!</h1>
        <div style={styles.listsContainer}>
          {lists.map(list => {
            console.log(list);
            return <List key={list.id} listID={list.id} title={list.title} cards={list.cards} />
          })}
          <AddButtons list />
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
