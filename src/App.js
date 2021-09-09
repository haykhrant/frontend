import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Bar } from './components/Bar';
import { MobileBar } from './components/MobileBar';
import Messages from './components/Messages';
import NotFound from './components/NotFound404';

import { Home } from './screens/Home';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Bar />
        <MobileBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Messages time={3000} />
    </>
  );
}

export default App;
