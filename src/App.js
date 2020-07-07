import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from './actions';
// import Board from './components/Board';
import List from './components/List';
import AddButtons from './components/AddButtons';


class App extends Component {

  onDragEnd = result => {
    // re-ordering logic for drag-n-drop persistence
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    // if (type === 'list') {
    //   return;
    // }
    console.log('logged')
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
        <h1>Edara App!</h1>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={styles.listsContainer}
            >
              {/* <Board /> */}
              {lists.map((list, index) => {
                //console.log(list);
                return (
                  <List
                    key={list.id}
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                )
              })}
              {provided.placeholder}
              <AddButtons list />
            </div>
          )}
        </Droppable>
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
