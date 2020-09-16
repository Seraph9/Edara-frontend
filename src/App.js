import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Board from './components/Board';
import Splash from './components/Splash';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/users/:id' component={Board} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
};


export default App;
