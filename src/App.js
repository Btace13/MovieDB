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
              <footer><span>Created By: </span><a href="http://github.com/btace13" target={'_blank'}>Enrique</a></footer>
          </div>
      </div>
    );
  }
}

export default App;
