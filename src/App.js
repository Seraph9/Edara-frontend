import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import AddButtons from './components/AddButtons';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from './actions';
import Board from './components/Board';

class App extends Component {

  onDragEnd = result => {
    // re-ordering logic for drag-n-drop persistence
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;
    //console.log(lists);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h1>Edara App!</h1>
          <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={styles.listsContainer}
              >
                <Board />
                {provided.placeholder}
                <AddButtons list />
              </div>
            )}
          </Droppable>
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
