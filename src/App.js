import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <Header/>
              <Card/>
          </div>
      </div>
    );
  }
}

export default App;
