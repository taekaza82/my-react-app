import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Swtich } from "react-router-dom";
import Home from "./containers/Home";

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route path="/" Component={Home} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter> {this.renderRouter()} </BrowserRouter>
    );
  }
}

export default App;
