import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import AddButtons from './components/AddButtons';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd = () => {
    // re-ordering logic for drag-n-drop persistence

  }

  render() {
    const { lists } = this.props;
    //console.log(lists);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
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
