import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Splash from './components/Splash';
import NotFound from './components/NotFound';
import store from './store'
import { Provider } from 'react-redux';

const currentUserId = localStorage.getItem('EDARA_CURRENT_USER_ID');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/users/:id' component={App} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
