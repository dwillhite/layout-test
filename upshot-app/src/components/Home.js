import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';
import './../App.scss';

class Home extends Component {
    render() {
        return(
          <div className="App">
            <Header></Header>
            <Body></Body>
        </div>
        );
    }
  }
  
  export default Home;