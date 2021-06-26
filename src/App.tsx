import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from './Pages/Board/Board';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/board">
            <Board test="" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
