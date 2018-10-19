import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Prompt } from 'react-router-dom';
import './css/index.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Game from './components/game/Game';

// ========================================

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path='/' component={Home}></Route>
      <Route path='/game' component={Game}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);