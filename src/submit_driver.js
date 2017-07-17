import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,  
  Link
} from 'react-router-dom';


import logo from './img/logo.png';
import logo_mobile from './img/logo_mobile.png';
import VideoSection from './videosection';
import Home from './index1';
import Home_Static_image from './index2';
import Home_Text_rotator from './index3';
import Home_Cookie_bar from './index4';
import Home_Popup from './index5';
import Home_Mobile_synthetic from './index6';
import Home_Layer_slider from './index8';
import Coming_Page from './coming_soon';

import list_page from './list_page';
import grid_list from './grid_list';

import detail_page from './detail_page';
import submit_restaurant from './submit_restaurant';
import cart from './cart';
import cart_2 from './cart_2';
import cart_3 from './cart_3';
import cart_datepicker from './cart_datepicker';

import about from './about';
import faq from './faq';

import admin from './admin';

import detail_page_2 from './detail_page_2';
import blog from './blog';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';
import icon_pack_2 from './icon_pack_2';
import slide_1 from './img/slides/slide_1.jpg';
import slide_2 from './img/slides/slide_2.jpg';
import devices from './img/devices.jpg';
import sub_header_cart from './img/sub_header_cart.jpg';

import Page_footer from './footer';

export default class submit_driver extends Component {
  componentDidMount(){
    // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(250).css({'overflow':'visible'});
      $('#sub_content').addClass('animated zoomIn');
      $(window).scroll();      
      $('.number').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 2000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
 
  }
  handleClick(){
    var currentRoute = 'React-Route path';
    var linkRoute = 'link path';
    location.reload();   
   /* if (currentRoute === linkRoute){
        location.reload();        
    } else {
      location.reload();        
    }*/
  }
  componentWillMount(){
      document.body.style.backgroundColor = "#FFFFFF",
      document.body.classList.toggle('darkClass', this.props.isDark);
  }
  render(){
  return (
    <div>
      <header>        
                  <Grid  fluid>
                    <Row >
                      <Col md={4} sm={4} xs={4}>
                        <Link to=""  id="logo">
                        <Image src={logo} width="190" height="23" alt="" data-retina="complete" className="hidden-xs" />
                        <Image src={logo_mobile} width="59" height="23" alt="" data-retina="complete" className="hidden-lg hidden-md hidden-sm" />
                        </Link>
                      </Col>
                      <Col md={8} sm={8} xs={8} componentClass={'nav'}>
                        <Link className="cmn-toggle-switch cmn-toggle-switch__htx open_close" to="#">
                          <span>Menu mobile</span>
                        </Link>
                        <div className="main-menu">
                          <div id="header_menu">
                            <img src={logo} width="190" height="23" alt="" data-retina="true" />
                          </div>
                          <Link to="#" className="open_close" id="close_in"><i className="icon_close"></i></Link>
                          <ul  role="nav">
                            <li className="submenu">
                              <Link to="#" className="show-submenu">Home
                                <i className="icon-down-open-mini"></i>
                              </Link>
                                <ul>                                                     
                                  <li><Link onClick={this.handleClick}  to="/home">Home Video background</Link></li>                              
                                  <li><Link onClick={this.handleClick} to="/index2" refresh="true" >Home Static image</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index3">Home Text rotator</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index8">Home Layer slider</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index4">Home Cookie bar</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index5">Home Popup</Link></li>
                                                                     
                                  <li><Link onClick={this.handleClick}  to="/coming_soon">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <Link to="#" className="show-submenu">Restaurants
                                <i className="icon-down-open-mini"></i>
                              </Link>
                              <ul>
                                <li><Link onClick={this.handleClick}  to="/list_page">Row listing</Link></li>
                                <li><Link onClick={this.handleClick}  to="/grid_list">Grid listing</Link></li>
                                
                                <li><Link onClick={this.handleClick}  to="/detail_page">Restaurant Menu</Link></li>
                                <li><Link onClick={this.handleClick}  to="/submit_restaurant">Submit Restaurant</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart">Order step 1</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_2">Order step 2</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_3">Order step 3</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_datepicker">Order Date/Time picker</Link></li>
                              </ul>
                            </li>
                            <li><Link onClick={this.handleClick}  to="/about">About us</Link></li>
                            <li><Link onClick={this.handleClick}  to="/faq">Faq</Link></li>
                            <li className="submenu">
                              <Link to="#" className="show-submenu">Pages<i className="icon-down-open-mini"></i></Link>
                              <ul>                            
                                <li><Link onClick={this.handleClick}  to="/admin">Admin section</Link></li>
                                <li><Link onClick={this.handleClick}  to="/submit_driver">Submit Driver</Link></li>
                                <li><Link to="#0" data-toggle="modal" data-target="#login_2">User Login</Link></li>
                                <li><Link to="#0" data-toggle="modal" data-target="#register">User Register</Link></li>
                                <li><Link onClick={this.handleClick}  to="/detail_page_2">Restaurant detail page</Link></li>
                                <li><Link onClick={this.handleClick}  to="/blog">Blog</Link></li>
                                <li><Link onClick={this.handleClick}  to="/contacts">Contacts</Link></li>
                                
                                
                                <li><Link onClick={this.handleClick}  to="/icon_pack_1">Icon pack 1</Link></li>
                                <li><Link onClick={this.handleClick}  to="/icon_pack_2">Icon pack 2</Link></li>
                              </ul>
                            </li>                        
                            <li><Link to="#0" data-toggle="modal" data-target="#login_2">Login</Link></li>
                            <li><Link to="#0">Purchase this template</Link></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Grid>                 
          </header>
      <section className="parallax-window" id="short" data-parallax="scroll" data-image-src={sub_header_cart} data-natural-width="1400" data-natural-height="350">
        <div id="subheader">
            <div id="sub_content">
             <h1>Work with us</h1>
               <p>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
               <p></p>
            </div>
        </div>
      </section>
      <div id="position">
          <div className="container">
              <ul>
                  <li><a href="#0">Home</a></li>
                  <li><a href="#0">Category</a></li>
                  <li>Page active</li>
              </ul>
              <a href="#0" className="search-overlay-menu-btn"><i className="icon-search-6"></i> Search</a>
          </div>
      </div>
      <div className="container margin_60_35">
          <div className="main_title margin_mobile">
                  <h2 className="nomargin_top">Flexible Job and Great fees</h2>
                  <p>
                      Cum doctus civibus efficiantur in imperdiet deterruisset.
                  </p>
              </div>
        <div className="row">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature_2">
              <i className="icon_currency"></i>
              <h3>Great Fees</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
            <div className="feature_2">
              <i className="icon_easel"></i>
              <h3>Growing possibility</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature_2">
              <i className="icon_mobile"></i>
              <h3>Manage your own orders via App</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
            <div className="feature_2">
              <i className="icon_map_alt"></i>
              <h3>Work in a small area</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature_2">
              <i className="icon_clock_alt"></i>
              <h3>Flexible time</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
            <div className="feature_2">
              <i className="icon_calendar"></i>
              <h3>Flexible days</h3>
              <p>
                 Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 nopadding features-intro-img">
            <div className="features-bg">
              <div className="features-img">
              </div>
            </div>
          </div>
          <div className="col-md-6 nopadding">
            <div className="features-content">
              <h3>"Ex vero mediocrem"</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <p>
                Per ea erant aeque corpora, an agam tibique nec. At recusabo expetendis vim. Tractatos principes mel te, dolor solet viderer usu ad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Page_footer/>
    </div>
  );
}
};