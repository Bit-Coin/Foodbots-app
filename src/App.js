import React, { Component } from 'react';
import $ from 'jquery';
import './css/theme.css';
import Header from './Header';

window.jQuery = $;

class App extends Component {
  render() {
    return (
      <div>
        <Header/>                       
      </div>
    );
  }
}
export default App;
