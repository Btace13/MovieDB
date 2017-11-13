import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
            text: 'Ace'
    };
}
myCallback = (newText) => {
  this.setState({text: newText});
};
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
          <h1>{this.state.text}</h1>
              <Header/>
              <Card/>
          </div>
      </div>
    );
  }
}

export default App;
