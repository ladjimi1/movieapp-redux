import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import {BrowserRouter,Route } from 'react-router-dom';
import MoviDesc from './MoviDesc'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      
    <Route exact path="/" component={App}/>
    <Route exact path='/movie/:id' component={MoviDesc}/>
      
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);