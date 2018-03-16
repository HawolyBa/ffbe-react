import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  componentWillMount() {
    let search = require('gamepedia-api').search;
    search("exvius", 1).then(result => { console.log(result[0]) }).catch(err => { console.log("ERROR: "+err) });
  }

  render() {


    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
