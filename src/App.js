import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Character from './components/Character/Character';
import CharCreate from './components/CharCreate/CharCreate';
import CharList from './components/CharList/CharList';
import InfoPage from './components/InfoPage/InfoPage';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          exact path="/char"
          component={ Character }
        />
        <Route
          exact path="/char/create"
          component={ CharCreate }
        />
        <Route
          exact path="/char/list"
          component={ CharList }
          />
        <Route
          path="/info"
          component={InfoPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
