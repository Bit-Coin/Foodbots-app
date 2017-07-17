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

import menu_thumb_1 from './img/menu_thumb_1.jpg';
import menu_thumb_2 from './img/menu_thumb_2.jpg';
import menu_thumb_3 from './img/menu_thumb_3.jpg';
import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';
import sub_header_short from './img/sub_header_short.jpg';
import sub_header_2 from "./img/sub_header_2.jpg";


export default class detail_page extends Component {
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
            <div className="col-md-3">
              <p><a href="list_page.html" className="btn_side">Back to search</a></p>
              <div className="box_style_1">
                <ul id="cat_nav">
                  <li><a href="#starters" className="active">Starters <span>(141)</span></a></li>
                  <li><a href="#main_courses">Main Courses <span>(20)</span></a></li>
                  <li><a href="#beef">Beef <span>(12)</span></a></li>
                  <li><a href="#desserts">Desserts <span>(11)</span></a></li>
                  <li><a href="#drinks">Drinks <span>(20)</span></a></li>
                </ul>
              </div>                
              <div className="box_style_2 hidden-xs" id="help">
                <i className="icon_lifesaver"></i>
                <h4>Need <span>Help?</span></h4>
                <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </div>            
            <div className="col-md-6">
              <div className="box_style_2" id="main_menu">
                <h2 className="inner">Menu</h2>
                <h3 className="nomargin_top" id="starters">Starters</h3>
                <p>
                  Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-list">
                  <thead>
                    <tr>
                      <th>
                         Item
                      </th>
                      <th>
                         Price
                      </th>
                      <th>
                         Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_1} alt="thumb"/></figure>
                        <h5>1. Mexican Enchiladas</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 9,40</strong>
                      </td>
                      <td className="options">
                        <div className="dropdown dropdown-options">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                              <i className="icon_plus_alt2"></i>
                            </a>
                            <div className="dropdown-menu">
                                <h5>Select an option</h5>
                                <label>
                                <input type="radio" value="option1" name="options_1" checked/>Medium <span>+ {"$"}3.30</span>
                                </label>
                                <label>
                                <input type="radio" value="option2" name="options_1" />Large <span>+ {"$"}5.30</span>
                                </label>
                                <label>
                                <input type="radio" value="option3" name="options_1" />Extra Large <span>+ {"$"}8.30</span>
                                </label>
                                <h5>Add ingredients</h5>
                                <label>
                                <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                </label>
                                <label>
                                <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                </label>
                                <a href="#0" className="add_to_basket">Add to cart</a>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_2} alt="thumb"/></figure>
                        <h5>2. Fajitas</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 6,80</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_2" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_2" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_2" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                        <Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>3. Royal Fajitas</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 5,70</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i className="icon_plus_alt2"></i></a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_3" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_3" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_3" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>4. Chicken Enchilada Wrap</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 5,20</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_4" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_4" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_4" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                           
                <h3 id="main_courses">Main courses</h3>
                <p>
                  Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-list ">
                  <thead>
                  <tr>
                    <th>
                       Item
                    </th>
                    <th>
                       Price
                    </th>
                    <th>
                       Order
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>5. Cheese Quesadilla</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 12,00</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_5" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_5" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_5" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>6. Chorizo & Cheese</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 24,71</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_6" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_6" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_6" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>7. Beef Taco</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 8,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>8. Minced Beef Double Layer</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 6,30</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_7" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_7" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_7" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_3} alt="thumb"/>
                        </figure>
                        <h5>9. Piri Piri Chicken</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 7,40</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_8" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_8" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_8" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_3} alt="thumb"/>
                        </figure>
                        <h5>10. Burrito Al Pastor</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 7,70</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_9" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_9" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_9" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
               
                <h3 id="beef">Beef</h3>
                <p>
                  Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-list ">
                  <thead>
                    <tr>
                      <th>
                         Item
                      </th>
                      <th>
                         Price
                      </th>
                      <th>
                         Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>11. Beef Enchilada Wrap</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 11,70</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i className="icon_plus_alt2"></i></a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_10" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_10" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_10" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>12. Chicken Fillet Taco</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 12,40</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_11" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_11" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_11" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>13. Tiger Prawn & Chorizo</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 24,71</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_12" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_12" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_12" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>14. Fillet Steak & Chorizo</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 15,30</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list">
                          <Image src={menu_thumb_3} alt="thumb"/>
                        </figure>
                        <h5>15. Burrito's with Rice</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 9,70</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="icon_plus_alt2"></i>
                              </a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_13" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_13" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_13" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>16. Mexican Burger</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 8,30</strong>
                      </td>
                      <td className="options">
                          <div className="dropdown dropdown-options">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i className="icon_plus_alt2"></i></a>
                              <div className="dropdown-menu">
                                  <h5>Select an option</h5>
                                  <label>
                                  <input type="radio" value="option1" name="options_14" checked/>Medium <span>+ {"$"}3.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option2" name="options_14" />Large <span>+ {"$"}5.30</span>
                                  </label>
                                  <label>
                                  <input type="radio" value="option3" name="options_14" />Extra Large <span>+ {"$"}8.30</span>
                                  </label>
                                  <h5>Add ingredients</h5>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Tomato <span>+ {"$"}4.30</span>
                                  </label>
                                  <label>
                                  <input type="checkbox" value=""/>Extra Peppers <span>+ {"$"}2.50</span>
                                  </label>
                                  <a href="#0" className="add_to_basket">Add to cart</a>
                              </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 id="desserts">Desserts</h3>
                <p>
                  Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-list ">
                  <thead>
                    <tr>
                      <th>
                         Item
                      </th>
                      <th>
                         Price
                      </th>
                      <th>
                         Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>17. Chocolate Fudge Cake</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 24,71</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>18. Cheesecake</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 7,50</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>19. Apple Pie & Custard</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 9,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>20. Profiteroles</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 12,00</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 id="drinks">Drinks</h3>
                <p>
                  Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-list ">
                  <thead>
                    <tr>
                      <th>
                         Item
                      </th>
                      <th>
                         Price
                      </th>
                      <th>
                         Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>21. Coke 0.33L</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 5,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>2. Diet Coke 0.33L</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 2,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>3. Diet Coke 1L</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 5,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="thumb_menu_list"><Image src={menu_thumb_3} alt="thumb"/></figure>
                        <h5>4. Fanta Orange 0.33L</h5>
                        <p>
                          Fuisset mentitum deleniti sit ea.
                        </p>
                      </td>
                      <td>
                        <strong>€ 2,70</strong>
                      </td>
                      <td className="options">
                        <a href="#0"><i className="icon_plus_alt2"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>                  
            <div className="col-md-3" id="sidebar">
              <div className="theiaStickySidebar">
                <div id="cart_box" >
                  <h3>Your order <i className="icon_cart_alt pull-right"></i></h3>
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>
                          <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Enchiladas
                        </td>
                        <td>
                          <strong className="pull-right">{"$"}11</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Burrito
                        </td>
                        <td>
                          <strong className="pull-right">{"$"}14</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Chicken
                        </td>
                        <td>
                          <strong className="pull-right">{"$"}20</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Corona Beer
                        </td>
                        <td>
                          <strong className="pull-right">{"$"}9</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Cheese Cake
                        </td>
                        <td>
                          <strong className="pull-right">{"$"}12</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                  <div className="row" id="options_2">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                      <label><input type="radio" value="" checked name="option_2" className="icheck"/>Delivery</label>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                      <label><input type="radio" value="" name="option_2" className="icheck"/>Take Away</label>
                    </div>
                  </div>                          
                
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>
                           Subtotal <span className="pull-right">{"$"}56</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           Delivery fee <span className="pull-right">{"$"}10</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="total">
                           TOTAL <span className="pull-right">{"$"}66</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                  <a className="btn_full" href="cart.html">Order now</a>
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

