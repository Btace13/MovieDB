import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <Card/>
          </div>
      </div>
    );
  }
}

export default App;
