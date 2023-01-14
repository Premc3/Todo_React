
import React, { Component } from 'react';

import Todo from './Components/Todo';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addtodo from './Components/Add_todo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Todo/>}/>;
        <Route path='/add' exact element={<Addtodo/>}/>;
      </Routes>
      </BrowserRouter>
    )

  }
}

export default App;
