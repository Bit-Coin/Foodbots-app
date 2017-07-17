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
import submit_driver from './submit_driver';
import blog from './blog';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';
import icon_pack_2 from './icon_pack_2';
import slide_1 from './img/slides/slide_1.jpg';
import slide_2 from './img/slides/slide_2.jpg';
import blank from './img/blank.gif';
import medium from './img/slider_single_restaurant/1_medium.jpg';
import small from './img/slider_single_restaurant/1_small.jpg';
import medium_restaurant from './img/slider_single_restaurant/1_medium.jpg';
import lage_1 from './img/slider_single_restaurant/1_large.jpg';
import large_restaurant from './img/slider_single_restaurant/1_large.jpg';
import thumb_restaurant from './img/thumb_restaurant.jpg';
import sub_header_2 from "./img/sub_header_2.jpg";
import medium_2 from './img/slider_single_restaurant/2_medium.jpg';
import medium_3 from './img/slider_single_restaurant/3_medium.jpg';
import medium_4 from './img/slider_single_restaurant/4_medium.jpg';
import medium_5 from './img/slider_single_restaurant/5_medium.jpg';
import medium_6 from './img/slider_single_restaurant/6_medium.jpg';
import medium_7 from './img/slider_single_restaurant/7_medium.jpg';
import medium_8 from './img/slider_single_restaurant/8_medium.jpg';
import medium_9 from './img/slider_single_restaurant/9_medium.jpg';
import avatar1 from './img/avatar1.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.jpg';

import Page_footer from './footer';


export default class detail_page2 extends Component {
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
        <section className="parallax-window" data-parallax="scroll" data-image-src={sub_header_2} data-natural-width="1400" data-natural-height="470">
          <div id="subheader">
            <div id="sub_content">
              <div id="thumb">
                <Image src={thumb_restaurant} alt=""/></div>
                <div className="rating">
                  <i className="icon_star voted"></i>
                  <i className="icon_star voted"></i>
                  <i className="icon_star voted"></i>
                  <i className="icon_star voted"></i>
                  <i className="icon_star"></i> 
                  (<small><a href="detail_page_2.html">Read 98 reviews</a></small>)
                </div>
                <h1>Mexican TacoMex</h1>
                <div>
                  <em>Mexican / American</em>
                </div>
                <div>
                  <i className="icon_pin"></i> 135 Newtownards Road, Belfast, BT4 1AB - <strong>Delivery charge:</strong> {"$"}10, free over {"$"}15.
                </div>
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
            <div className="row">
                
              <div className="col-md-4">
                <p>
                  <a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap">View on map</a>
                </p>
                <div className="box_style_2">
                  <h4 className="nomargin_top">Opening time <i className="icon_clock_alt pull-right"></i></h4>
                  <ul className="opening_list">
                    <li>Monday<span>12.00am-11.00pm</span></li>
                    <li>Tuesday<span>12.00am-11.00pm</span></li>
                    <li>Wednesday <span className="label label-danger">Closed</span></li>
                    <li>Thursday<span>12.00am-11.00pm</span></li>
                    <li>Friday<span>12.00am-11.00pm</span></li>
                    <li>Saturday<span>12.00am-11.00pm</span></li>
                    <li>Sunday <span className="label label-danger">Closed</span></li>
                  </ul>
                </div>
                <div className="box_style_2 hidden-xs" id="help">
                  <i className="icon_lifesaver"></i>
                  <h4>Need <span>Help?</span></h4>
                  <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </div>
                    
              <div className="col-md-8">
                <div className="box_style_2">
                  <h2 className="inner">Description</h2>
                            
                            <div id="Image_carousel" className="slider-pro">
                                <div className="sp-slides">
                                
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                    </div>
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <h3 className="sp-layer sp-black sp-padding" data-horizontal="40" data-vertical="40" data-show-transition="left">
                                        Lorem ipsum dolor sit amet </h3>
                                        <p className="sp-layer sp-white sp-padding" data-horizontal="40" data-vertical="100" data-show-transition="left" data-show-delay="200">
                                             consectetur adipisicing elit
                                        </p>
                                        <p className="sp-layer sp-black sp-padding" data-horizontal="40" data-vertical="160" data-width="350" data-show-transition="left" data-show-delay="400">
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-white sp-padding" data-position="centerCenter" data-vertical="-50" data-show-transition="right" data-show-delay="500">
                                             Lorem ipsum dolor sit amet
                                        </p>
                                        <p className="sp-layer sp-black sp-padding" data-position="centerCenter" data-vertical="50" data-show-transition="left" data-show-delay="700">
                                             consectetur adipisicing elit
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-black sp-padding" data-position="bottomLeft" data-vertical="0" data-width="100%" data-show-transition="up">
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                       <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-white sp-padding" data-vertical="5%" data-horizontal="5%" data-width="90%" data-show-transition="down" data-show-delay="400">
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                       <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-white sp-padding" data-horizontal="10" data-vertical="10" data-width="300">
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-black sp-padding" data-position="bottomLeft" data-horizontal="5%" data-vertical="5%" data-width="90%" data-show-transition="up" data-show-delay="400">
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    
                                   <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                        <p className="sp-layer sp-black sp-padding" data-horizontal="50" data-vertical="50" data-show-transition="down" data-show-delay="500">
                                             Lorem ipsum dolor sit amet
                                        </p>
                                        <p className="sp-layer sp-white sp-padding" data-horizontal="50" data-vertical="100" data-show-transition="up" data-show-delay="500">
                                             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    
                                    <div className="sp-slide">
                                        <Image alt="" className="sp-image" src={blank} 
                                        data-src={medium}
                                        data-small={small}
                                        data-medium={medium_restaurant}
                                        data-large={lage_1}
                                        data-retina={large_restaurant}/>
                                    </div>
                                </div>
                                <div className="sp-thumbnails">
                                    <Image alt="" className="sp-thumbnail" src={medium}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_2}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_3}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_4}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_5}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_6}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_7}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_8}/>
                                    <Image alt="" className="sp-thumbnail" src={medium_9}/>
                                </div>
                            </div>
                            <h3>About us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, ius sonet meliore partiendo cu. Nobis laudem mediocrem cum et. Debitis nonumes similique te eam, blandit eligendi principes sea no. Cu eum quidam expetendis.
                  </p>
                  <p className="add_bottom_30">
                    Lorem ipsum dolor sit amet, ex has recusabo adipiscing, aliquip alienum at vis, eos id qualisque quaerendum. Soleat habemus duo no, te quo dicam everti, sale ullum movet per ea. Cu cum laudem quaeque, agam decore nullam ei vis. Nec ad tota etiam eirmod. Harum debitis detraxit ut vel, eu vel option oporteat.
                  </p>
                  <div id="summary_review">
                    <div id="general_rating">
                      11 Reviews
                      <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                      </div>
                    </div>
                                
                    <div className="row" id="rating_summary">
                      <div className="col-md-6">
                        <ul>
                          <li>Food Quality
                          <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
                          </div>
                          </li>
                          <li>Price
                          <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                          </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>Punctuality
                          <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                          </div>
                          </li>
                          <li>Courtesy
                          <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                          </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="styled"/>
                    <a href="#" className="btn_1 add_bottom_15" data-toggle="modal" data-target="#myReview">Leave a review</a>
                  </div>
                            
                  <div className="review_strip_single">
                    <Image src={avatar1} alt="" className="Image-circle"/>
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i>
                        </div>
                         Food Quality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Price
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                         Punctuality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                         Courtesy
                      </div>
                    </div>
                  </div>
                            
                  <div className="review_strip_single">
                    <Image src={avatar3} alt="" className="Image-circle"/>
                    <small> - 25 March 2015 -</small>
                    <h4>Markus Schulz</h4>
                    <p>
                       "At sed dico invenire facilisis, sed option sapientem iudicabit ad, sea idque doming vituperatoribus at. Duo ut inani tantas scaevola. Commodo oblique at cum. Duo id vide delectus. Vel et doctus laoreet minimum, ei feugait pertinacia usu.
                    </p>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Food Quality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Price
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Punctuality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                         Courtesy
                      </div>
                    </div>
                  </div>
                            
                  <div className="review_strip_single last">
                    <Image src={avatar2} alt="" className="Image-circle"/>
                    <small> - 10 April 2015 -</small>
                    <h4>Frank Cooper</h4>
                    <p>
                       "Ne mea congue facilis eligendi, possit utamur sensibus id qui, mel tollit euismod alienum eu. Ad tollit lucilius praesent per, ex probo utroque placerat eos. Tale verear efficiendi et cum, meis timeam vix et, et duis debet nostro mel. Aeterno labitur per no, id nec tantas nemore. An minim molestie per, mei sumo vulputate cu."
                    </p>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i>
                        </div>
                         Food Quality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Price
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i>
                        </div>
                         Punctuality
                      </div>
                      <div className="col-md-3">
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
                        </div>
                         Courtesy
                      </div>
                    </div>
                  </div>                          
                </div>
              </div>
            </div>
        </div>
        <Page_footer/>
      </div>

      );
  }
};