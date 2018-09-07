import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavBar';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;