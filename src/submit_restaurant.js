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
import thumb_restaurant from './img/thumb_restaurant.jpg';
import thumb_restaurant_2 from './img/thumb_restaurant_2.jpg';
import thumb_restaurant_3 from './img/thumb_restaurant_3.jpg';

import menu_thumb_2 from './img/menu_thumb_2.jpg';
import menu_thumb_3 from './img/menu_thumb_3.jpg';
import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';
import sub_header from './img/sub_header_2.jpg';

import Page_footer from './footer';

export default class submitrestaurant extends Component {
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
          <section className="parallax-window" data-parallax="scroll" data-image-src={sub_header} data-natural-width="1400" data-natural-height="470">
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
      <div className="main_title margin_mobile">
              <h2 className="nomargin_top">Increase your customers</h2>
              <p>
                  Cum doctus civibus efficiantur in imperdiet deterruisset.
              </p>
          </div>
          <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature">
                <i className="icon_datareport"></i>
                <h3><span>Increase</span> your sales</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="feature">
                <i className="icon_chat_alt"></i>
                <h3><span>H24</span> chat support</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature">
                <i className="icon_bag_alt"></i>
                <h3><span>Delivery</span> or Takeaway</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
              <div className="feature">
                <i className="icon_mobile"></i>
                <h3><span>Mobile</span> support</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature">
                <i className="icon_wallet"></i>
                <h3><span>Cash</span> payment</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="feature">
                <i className="icon_creditcard"></i>
                <h3><span>Secure card</span> payment</h3>
                <p>
                   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="white_bg">
          <div className="container margin_60_35">
            <div className="main_title margin_mobile">
                    <h2 className="nomargin_top">Our Plans</h2>
                    <p>
                        Cum doctus civibus efficiantur in imperdiet deterruisset.
                    </p>
                </div>
               <div className="row text-center plans">
                    <div className="plan col-md-4">
                        <h2 className="plan-title">1 Month Plan</h2>
                        <p className="plan-price">$99<span>/00</span></p>
                        <ul className="plan-features">
                            <li><strong>Check and go</strong> included</li>
                            <li><strong>1 month</strong> valid</li>
                            <li><strong>Unsubscribe</strong> anytime</li>
                        </ul>
                    </div> 
                    
                    <div className="plan plan-tall col-md-4">
                    <span className="ribbon"></span>
                    <span className="ribbon_table"></span>
                        <h2 className="plan-title">3 Months Plan</h2>
                        <p className="plan-price">$199<span>/00</span></p>
                        <ul className="plan-features">
                          <li><strong>Premium</strong> support</li>
                            <li><strong>Check and go</strong> included</li>
                             <li><strong>APP</strong> included</li>
                            <li><strong>3 months</strong> valid</li>
                            <li><strong>Unsubscribe</strong> anytime</li>
                        </ul>
                    </div>
                    
                    <div className="plan col-md-4">
                        <h2 className="plan-title">6 Months Plan</h2>
                        <p className="plan-price">$299<span>/00</span></p>
                        <ul className="plan-features">
                          <li><strong>Premium</strong> support</li>
                            <li><strong>Check and go</strong> included</li>
                            <li><strong>6 months</strong> valid</li>
                            <li><strong>Unsubscribe</strong> anytime</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container margin_60">
          <div className="main_title margin_mobile">
            <h2 className="nomargin_top">Please submit the form below</h2>
            <p>
                Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
          </div>
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
                  <form >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>First name</label>
                          <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Jhon"/>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Last name</label>
                          <input type="text" className="form-control" id="lastname_contact" name="lastname_contact" placeholder="Doe"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Email:</label>
                          <input type="email" id="email_contact" name="email_contact" className="form-control " placeholder="jhon@email.com"/>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Phone number:</label>
                          <input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="00 44 5435435"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Restaurant name</label>
                          <input type="text" id="restaurant" name="restaurant" className="form-control" placeholder="Pizza King"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Website</label>
                          <input type="text" id="restaurant_web" name="restaurant_web" className="form-control" placeholder="http://"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" id="restaurant_city" name="restaurant_city" className="form-control" placeholder="Las Vegas"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Postal code</label>
                          <input type="text" id="restaurant_postal_code" name="restaurant_postal_code" className="form-control" placeholder="00103"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Create a password</label>
                          <input type="text" className="form-control" placeholder="Password"  id="password1"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Confirm password</label>
                          <input type="text" className="form-control" placeholder="Confirm password"  id="password2"/>
                        </div>
                      </div>
                    </div>
                    <div id="pass-info" className="clearfix"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>
                        <input name="mobile" type="checkbox" value="" className="icheck" checked/>Accept <a href="#0">terms and conditions</a>.</label>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button className="btn_full_outline">Submit</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
        <Page_footer/>
      </div>
    );
  }
};