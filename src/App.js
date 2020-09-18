import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Board from './components/Board';
import Splash from './components/Splash';
import NotFound from './components/NotFound';
import store from './store'


function App(props) {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/lists' component={Board} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
};

// const mapStateToProps = state => ({
//   lists: state.lists
// });

// export default connect(mapStateToProps)(App);

export default App;