import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Qualification from './Qualification.js';
import Page_footercoming from './page_footercoming';

const callback = () => alert('Dismissed!');

export default class Header extends Component {
 

  render() {
   
   
    return (
      <div>                   
        <Qualification/>
        <Page_footercoming/>                      
      </div>                  
    );
  }
};
