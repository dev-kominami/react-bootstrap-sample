import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'

import App from './App';
import NavigationBar from './components/navigationbar'
import Next from './components/next'
import Next2 from './components/next2'
import TablePage from './components/tablepage'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/next">
            <Next />
          </Route>
          <Route path="/next2">
            <Next2 />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
