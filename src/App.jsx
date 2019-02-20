
import React, { Component } from 'react';
import './App.scss';

//Components
import { Exchange } from './scenes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Exchange />
      </div>
    );
  }
}

export default App;
