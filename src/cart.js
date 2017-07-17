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
import slide_2 from './img/slides/slide_2.jpg';
import thumb_restaurant from './img/thumb_restaurant.jpg';
import thumb_restaurant_2 from './img/thumb_restaurant_2.jpg';
import thumb_restaurant_3 from './img/thumb_restaurant_3.jpg';
import thumb_restaurant_4 from './img/thumb_restaurant_4.jpg';
import thumb_restaurant_5 from './img/thumb_restaurant_5.jpg';
import thumb_restaurant_6 from './img/thumb_restaurant_6.jpg';
import menu_thumb_1 from './img/menu_thumb_1.jpg';
import menu_thumb_2 from './img/menu_thumb_2.jpg';
import menu_thumb_3 from './img/menu_thumb_3.jpg';
import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';
import sub_header from './img/sub_header_2.jpg';
import sub_header_cart from './img/sub_header_cart.jpg';

import Page_footer from './footer';

const cart_dateheight = { 
  height:150 
}


export default class cart extends Component {
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
                <h1>Place your order</h1>
                <div className="bs-wizard">
                    <div className="col-xs-4 bs-wizard-step active">
                      <div className="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <a href="#0" className="bs-wizard-dot"></a>
                    </div>
                                   
                    <div className="col-xs-4 bs-wizard-step disabled">
                      <div className="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <a href="cart_2.html" className="bs-wizard-dot"></a>
                    </div>
                
                  <div className="col-xs-4 bs-wizard-step disabled">
                      <div className="text-center bs-wizard-stepnum"><strong>3.</strong> Finish!</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <a href="cart_3.html" className="bs-wizard-dot"></a>
                  </div>  
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
              <div className="col-md-3">                  
                <div className="box_style_2 hidden-xs info">
                  <h4 className="nomargin_top">Delivery time <i className="icon_clock_alt pull-right"></i></h4>
                  <p>
                    Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.
                  </p>
                  <hr/>
                  <h4>Secure payment <i className="icon_creditcard pull-right"></i></h4>
                  <p>
                    Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.
                  </p>
                </div>
                        
                <div className="box_style_2 hidden-xs" id="help">
                  <i className="icon_lifesaver"></i>
                  <h4>Need <span>Help?</span></h4>
                  <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>                      
              </div>
                    
              <div className="col-md-6">
                <div className="box_style_2" id="order_process">
                  <h2 className="inner">Your order details</h2>
                  <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" id="firstname_order" name="firstname_order" placeholder="First name"/>
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" id="lastname_order" name="lastname_order" placeholder="Last name"/>
                  </div>
                  <div className="form-group">
                    <label>Telephone/mobile</label>
                    <input type="text" id="tel_order" name="tel_order" className="form-control" placeholder="Telephone/mobile"/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email_booking_2" name="email_order" className="form-control" placeholder="Your email"/>
                  </div>
                  <div className="form-group">
                    <label>Your full address</label>
                    <input type="text" id="address_order" name="address_order" className="form-control" placeholder=" Your full address"/>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" id="city_order" name="city_order" className="form-control" placeholder="Your city"/>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Postal code</label>
                        <input type="text" id="pcode_oder" name="pcode_oder" className="form-control" placeholder=" Your postal code"/>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Delivery Day</label>
                        <select className="form-control" name="delivery_schedule_day" id="delivery_schedule_day">
                          <option value="" defaultvalue>Select day</option>
                          <option value="Today">Today</option>
                          <option value="Tomorrow">Tomorrow</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Delivery time</label>
                        <select className="form-control" name="delivery_schedule_time" id="delivery_schedule_time">
                          <option value="" defaultvalue>Select time</option>
                          <option value="11.30am">11.30am</option>
                          <option value="11.45am">11.45am</option>
                          <option value="12.15am">12.15am</option>
                          <option value="12.30am">12.30am</option>
                          <option value="12.45am">12.45am</option>
                          <option value="01.00pm">01.00pm</option>
                          <option value="01.15pm">01.15pm</option>
                          <option value="01.30pm">01.30pm</option>
                          <option value="01.45pm">01.45pm</option>
                          <option value="02.00pm">02.00pm</option>
                          <option value="07.00pm">07.00pm</option>
                          <option value="07.15pm">07.15pm</option>
                          <option value="07.30pm">07.30pm</option>
                          <option value="07.45pm">07.45pm</option>
                          <option value="08.00pm">08.00pm</option>
                          <option value="08.15pm">08.15pm</option>
                          <option value="08.30pm">08.30pm</option>
                          <option value="08.45pm">08.45pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-md-12">
                
                        <label>Notes for the restaurant</label>
                        <textarea className="form-control"  placeholder="Ex. Allergies, cash change..." name="notes" id="notes" style={cart_dateheight}></textarea>
                
                    </div>
                  </div>
                </div>
              </div>
                    
              <div className="col-md-3" id="sidebar">
                <div className="theiaStickySidebar">
                  <div id="cart_box">
                    <h3>Your order <i className="icon_cart_alt pull-right"></i></h3>
                    <table className="table table_summary">
                    <tbody>
                    <tr>
                      <td>
                        <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Enchiladas
                      </td>
                      <td>
                        <strong className="pull-right">$11</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Burrito
                      </td>
                      <td>
                        <strong className="pull-right">$14</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Chicken
                      </td>
                      <td>
                        <strong className="pull-right">$20</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Corona Beer
                      </td>
                      <td>
                        <strong className="pull-right">$9</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Cheese Cake
                      </td>
                      <td>
                        <strong className="pull-right">$12</strong>
                      </td>
                    </tr>
                    </tbody>
                    </table>
                    <hr/>
                    <div className="row" id="options_2">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                        <label><input type="radio" value="" checked name="option_2" className="icheck"/>Delivery</label>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                        <label><input type="radio" value="" name="option_2" className="icheck"/>Take Away</label>
                      </div>
                    </div>
                    <hr/>
                    <table className="table table_summary">
                    <tbody>
                    <tr>
                      <td>
                         Subtotal <span className="pull-right">$56</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                         Delivery fee <span className="pull-right">$10</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="total">
                         TOTAL <span className="pull-right">$66</span>
                      </td>
                    </tr>
                    </tbody>
                    </table>
                    <hr/>
                    <Link className="btn_full" to="/cart_2">Go to checkout</Link>
                    <a className="btn_full_outline" href="detail_page.html"><i className="icon-right"></i> Add other items</a>
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