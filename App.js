import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import BooleanComponent from './03/BooleanComponent';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <b>지루할 때 : </b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 : </b>
          <BooleanComponent />
        </div>
      </div>
    );
  }
}

export default App;
