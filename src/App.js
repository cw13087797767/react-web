import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index'

require('./mock/home-mock')
require('./mock/user-mock')

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
