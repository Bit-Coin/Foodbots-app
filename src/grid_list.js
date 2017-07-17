import React ,{Component}from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
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
import detail_page_2 from './detail_page_2';
import blog from './blog';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';
import icon_pack_2 from './icon_pack_2';
import slide_1 from './img/slides/slide_1.jpg';

import thumb_restaurant_4 from './img/thumb_restaurant_4.jpg';
import thumb_restaurant_5 from './img/thumb_restaurant_5.jpg';
import thumb_restaurant_6 from './img/thumb_restaurant_6.jpg';
import Content from './content';
import Page_footer from './footer';

import thumb_restaurant from './img/thumb_restaurant.jpg';
import thumb_restaurant_2 from './img/thumb_restaurant_2.jpg';
import thumb_restaurant_3 from './img/thumb_restaurant_3.jpg';

import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';
import sub_header_short from './img/sub_header_short.jpg';


export default class list_page extends Component {
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
          <section className="parallax-window" id="short" data-parallax="scroll" data-image-src={sub_header_short} data-natural-width="1400" data-natural-height="350">
            <div id="subheader">
              <div id="sub_content">
                  <h1>24 results in your zone</h1>
                    <div><i className="icon_pin"></i> 135 Newtownards Road, Belfast, BT4 1AB</div>
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
          <div className="collapse" id="collapseMap">
            <div id="map" className="map"></div>
          </div>

        <div className="container margin_60_35">
          <div className="row">      
            <div className="col-md-3">
              <p>
                <a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap">View on map </a>
              </p>
              <div id="filters_col">
                <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters <i className="icon-plus-1 pull-right"></i></a>
                <div className="collapse" id="collapseFilters">
                  <div className="filter_type">
                    <h6>Distance</h6>
                      <input type="text" id="range" value="" name="range"/>
                    <h6>Type</h6>
                    <ul>
                      <li><label><input type="checkbox" checked className="icheck"/>All <small>(49)</small></label></li>
                      <li><label><input type="checkbox" className="icheck"/>American <small>(12)</small></label><i className="color_1"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Chinese <small>(5)</small></label><i className="color_2"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Hamburger <small>(7)</small></label><i className="color_3"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Fish <small>(1)</small></label><i className="color_4"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Mexican <small>(49)</small></label><i className="color_5"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Pizza <small>(22)</small></label><i className="color_6"></i></li>
                      <li><label><input type="checkbox" className="icheck"/>Sushi <small>(43)</small></label><i className="color_7"></i></li>
                    </ul>
                  </div>
                  <div className="filter_type">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck"/>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck"/>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck"/>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck"/>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck"/>
                          <span className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filter_type">
                    <h6>Options</h6>
                    <ul className="nomargin">
                      <li><label><input type="checkbox" className="icheck"/>Delivery</label></li>
                      <li><label><input type="checkbox" className="icheck"/>Take Away</label></li>
                      <li><label><input type="checkbox" className="icheck"/>Distance 10Km</label></li>
                      <li><label><input type="checkbox" className="icheck"/>Distance 5Km</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>        
            <div className="col-md-9">          
              <div id="tools">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="styled-select">
                      <select name="sort_rating" id="sort_rating">
                        <option value="" defaultvalue>Sort by ranking</option>
                        <option value="lower">Lowest ranking</option>
                        <option value="higher">Highest ranking</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-9 hidden-xs">
                    <a href="list_page.html" className="bt_filters"><i className="icon-list"></i></a>
                  </div>
                </div>
              </div>        
              <div className="row">
                <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.1s">
                  <a className="strip_list grid" href="detail_page.html">
                      <div className="ribbon_1">Popular</div>
                      <div className="desc">
                          <div className="thumb_strip">
                            <Image src={thumb_restaurant} alt=""/>
                          </div>
                          <div className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                          </div>
                          <h3>Taco Mexican</h3>
                          <div className="type">
                            Mexican / American
                          </div>
                          <div className="location">
                            135 Newtownards Road, Belfast, BT4.<span className="opening">Opens at 17:00.</span> Minimum order: $15
                          </div>
                          <ul>
                            <li>Take away<i className="icon_check_alt2 ok"></i></li>
                            <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                          </ul>
                      </div>
                  </a>
                </div>
                <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <a className="strip_list grid" href="detail_page.html">
                      <div className="ribbon_1">Popular</div>
                      <div className="desc">
                        <div className="thumb_strip">
                          <Image src={thumb_restaurant_2} alt=""/>
                        </div>
                        <div className="rating">
                          <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                        <h3>Naples Pizza</h3>
                        <div className="type">
                          Italian / Pizza
                        </div>
                        <div className="location">
                          135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i className="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                  </a>
                </div>
              </div>
                  
              <div className="row">
                <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <a className="strip_list grid" href="detail_page.html">
                    <div className="ribbon_1">Popular</div>
                    <div className="desc">
                      <div className="thumb_strip">
                        <Image src={thumb_restaurant_3} alt=""/>
                      </div>
                      <div className="rating">
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star"></i>
                      </div>
                      <h3>Japan Food</h3>
                      <div className="type">
                        Sushi / Japanese
                      </div>
                      <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00.</span> Minimum order: $15
                      </div>
                      <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <a className="strip_list grid" href="detail_page.html">
                    <div className="desc">
                      <div className="thumb_strip">
                        <Image src={thumb_restaurant_4} alt=""/>
                      </div>
                      <div className="rating">
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star voted"></i>
                        <i className="icon_star"></i>
                      </div>
                      <h3>Sushi Gold</h3>
                      <div className="type">
                        Sushi / Japanese
                      </div>
                      <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00.</span> Minimum order: $15
                      </div>
                      <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
                  
          <div className="row">
            <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.5s">
                <a className="strip_list grid" href="detail_page.html">
                    <div className="desc">
                      <div className="thumb_strip">
                        <Image src={thumb_restaurant_5} alt=""/>
                      </div>
                      <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                      </div>
                      <h3>Dragon Tower</h3>
                      <div className="type">
                        Chinese / Thai
                      </div>
                      <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00.</span> Minimum order: $15
                      </div>
                      <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                      </ul>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.6s">
              <a className="strip_list grid" href="detail_page.html">
                  <div className="desc">
                    <div className="thumb_strip">
                      <Image src={thumb_restaurant_6} alt=""/>
                    </div>
                    <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>China Food</h3>
                    <div className="type">
                      Chinese / Vietnam
                    </div>
                    <div className="location">
                      135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00.</span> Minimum order: $15
                    </div>
                    <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                  </div>
                </a>
            </div>
            </div>
              <a href="#0" className="load_more_bt wow fadeIn" data-wow-delay="0.2s">Load more...</a>           
            </div>        
          </div>
        </div>
        <Page_footer/>
      </div>
    );
  }
};      