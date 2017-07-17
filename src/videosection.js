import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import $ from 'jquery';

import HeaderVideo from './js/video_header.js';
import video_fix from './img/video_fix.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
      // 'use strict';
      HeaderVideo.init({
        container: $('.header-video'),
        header: $('.header-video--media'),
        videoTrigger: $("#video-trigger"),
        autoPlayVideo: true
      });
    });
  }

  render() {
    return (
      <div>
      <section className="header-video">
          <div id="hero_video">
            <div id="sub_content">
                <h1>Order Takeaway or Delivery Food</h1>
                <p>
                    Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                </p>
                <form method="post" action="list_page.html">
                    <div id="custom-search-input">
                        <div className="input-group">
                            <input type="text" className=" search-query" placeholder="Your Address or postal code"/>
                            <span className="input-group-btn">
                            <input type="submit" className="btn_search" value="submit"/>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
          </div>
          <img src={video_fix} alt="" className="header-video--media" data-video-src={`${process.env.PUBLIC_URL}/video/intro`} data-teaser-source={`${process.env.PUBLIC_URL}/video/intro`} data-provider="Vimeo" data-video-width="1920" data-video-height="960"/>
          <div id="count" className="hidden-xs">
            <ul>
                <li><span className="number">2650</span> Restaurant</li>
                <li><span className="number">5350</span> People Served</li>
                <li><span className="number">12350</span> Registered Users</li>
            </ul>
          </div>          
        </section>
      </div>                  
    );
  }
};