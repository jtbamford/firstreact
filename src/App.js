import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './Button';
//import './Button.css';

class App extends Component {

  output = () => {
  console.log("Hello");
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
          {this.output()}
    {/*  <Button label="he" /> */}
  {/* bootstrap button styling */}
    <div style={{position:"relative", right:"100px"}}>
          <button className="btn btn-danger btn-lg">Working</button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
