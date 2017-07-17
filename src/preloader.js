import React, { Component } from 'react';


export default class preloader extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div id="preloader" style="display: opacity30">
          <div className="sk-spinner sk-spinner-wave" id="status">
              <div className="sk-rect1"></div>
              <div className="sk-rect2"></div>
              <div className="sk-rect3"></div>
              <div className="sk-rect4"></div>
              <div className="sk-rect5"></div>
          </div>
      </div>
      );
  }

};