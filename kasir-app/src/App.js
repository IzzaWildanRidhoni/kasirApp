import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Sukses from './pages/Sukses';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sukses" exact component={Sukses} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
