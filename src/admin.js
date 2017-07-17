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


import submit_driver from './submit_driver';
import detail_page_2 from './detail_page_2';
import blog from './blog';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';
import icon_pack_2 from './icon_pack_2';
import slide_1 from './img/slides/slide_1.jpg';
import slide_2 from './img/slides/slide_2.jpg';
import Page_footer from './footer';
import devices from './img/devices.jpg';
import sub_header_cart from './img/sub_header_cart.jpg';

export default class admin extends Component {
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
        <Router>
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
                    <h1>Admin section</h1>
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
            <div className="container margin_60">
              <div id="tabs" className="tabs">
                <nav>
                  <ul>
                    <li><Link to="/main_info" className="icon-profile"><span>Main info</span></Link>
                    </li>
                    <li><Link to="/menu" className="icon-menut-items"><span>Menu</span></Link>
                    </li>
                    <li><Link to="/Settings" className="icon-settings"><span>Settings</span></Link>
                    </li>
                  </ul>
                </nav>
                <div className="content">
                  <Route path="/main_info" exact component={main_info}/>
                  <Route path="/menu" exact component={menu}/>
                  <Route path="/Settings" exact component={Settings}/>                              
                </div>          
            </div>      
          </div>
          <Page_footer/> 
          </div>  
        </Router>
      );
  }
};

const main_info = () =>(
    <section id="section-1">
            <div className="indent_title_in">
              <i className="icon_house_alt"></i>
              <h3>General restaurant description</h3>
              <p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
            </div>

            <div className="wrapper_indent">
              <div className="form-group">
                <label>Restaurant name</label>
                <input className="form-control" name="restaurant_name" id="restaurant_name" type="text"/>
              </div>
              <div className="form-group">
                <label>Restaurant description</label>
                <textarea className="wysihtml5 form-control" placeholder="Enter text ..." ></textarea>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Telephone</label>
                    <input type="text" id="Telephone" name="Telephone" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="Email" name="Email" className="form-control"/>
                  </div>
                </div>
              </div>
            </div>

            <hr className="styled_2"/>

            <div className="indent_title_in">
              <i className="icon_pin_alt"></i>
              <h3>Address</h3>
              <p>
                Mussum ipsum cacilds, vidis litro abertis.
              </p>
            </div>
            <div className="wrapper_indent">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select className="form-control" name="country" id="country">
                      <option value="" selected>Select your country</option>
                      <option value="Europe">Europe</option>
                      <option value="United states">United states</option>
                      <option value="Asia">Asia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Street line 1</label>
                    <input type="text" id="street_1" name="street_1" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Street line 2</label>
                    <input type="text" id="street_2" name="street_2" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" id="city_booking" name="city_booking" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" id="state_booking" name="state_booking" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Postal code</label>
                    <input type="text" id="postal_code" name="postal_code" className="form-control"/>
                  </div>
                </div>
              </div>
            </div>

            <hr className="styled_2"/>
            <div className="indent_title_in">
              <i className="icon_images"></i>
              <h3>Logo and restaurant photos</h3>
              <p>
                Mussum ipsum cacilds, vidis litro abertis.
              </p>
            </div>

            <div className="wrapper_indent add_bottom_45">
              <div className="form-group">
                <label>Upload your restaurant logo</label>
                <div id="logo_picture" className="dropzone">
                  <input name="file" type="file"/>
                  <div className="dz-default dz-message"><span>Click or Drop Images Here</span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Upload your restaurant photos</label>
                <div id="photos" className="dropzone">
                  <input name="file" type="file" multiple/>
                  <div className="dz-default dz-message"><span>Click or Drop Images Here</span>
                  </div>
                </div>
              </div>
            </div>
                      
            <hr className="styled_2"/>
            <div className="wrapper_indent">
              <button className="btn_1">Save now</button>
            </div>                      
          </section>
  )

const menu = () =>(
    <section id="section-2">
            <div className="indent_title_in">
              <i className="icon_document_alt"></i>
              <h3>Edit menu list</h3>
              <p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
            </div>
                      
            <div className="wrapper_indent">
              <div className="form-group">
                <label>Menu Category</label>
                <input type="text" name="menu_category" className="form-control" placeholder="EX. Starters"/>
              </div>

              <div className="menu-item-section clearfix">
                <h4>Menu item #1</h4>
                <div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
                </div>
              </div>

              <div className="strip_menu_items">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="menu-item-pic dropzone">
                      <input name="file" type="file"/>
                      <div className="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Title</label>
                          <input type="text"  name="menu_item_title" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Price</label>
                          <input type="text" name="menu_item_title_price" className="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Short description</label>
                      <input type="text" name="menu_item_description" className="form-control"/>
                    </div>

                    <div className="form-group">
                      <label>Item options</label>
                      <div className="table-responsive">
                        <table className="table table-striped edit-options">
                          <tbody>
                            <tr>
                              <td  className="tdwidth_2">
                                <input type="text" className="form-control" placeholder="+ $3.50"/>
                              </td>
                              <td className="tdwidth_5">
                                <input type="text" className="form-control" placeholder="Ex. Medium"/>
                              </td>
                              <td className="tdwidth_3">
                                <label>
                                  <input type="radio" name="option_item_settings_1" checked className="icheck" value="checkbox"/>Checkbox</label>
                                <label className="margin_left">
                                  <input type="radio" name="option_item_settings_1" className="icheck" value="radio"/>Radio</label>
                              </td>
                            </tr>
                            <tr>
                              <td className="tdwidth_2">
                                <input type="text" className="form-control" placeholder="+ $5.50"/>
                              </td>
                              <td className="tdwidth_5">
                                <input type="text" className="form-control" placeholder="Ex. Large"/>
                              </td>
                              <td className="tdwidth_3">
                                <label>
                                  <input type="radio" name="option_item_settings_2" className="icheck" value="checkbox"/>Checkbox</label>
                                <label className="margin_left">
                                  <input type="radio" name="option_item_settings_2" className="icheck" value="radio" checked/>Radio</label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="form-group">
                    <label>Item ingredients</label>
                                        <div className="table-responsive">
                    <table className="table table-striped notifications">
                      <tbody>
                        <tr>
                          <td className="tdwidth_2">
                            <input type="text" className="form-control" placeholder="+ $2.50"/>
                          </td>
                          <td className="tdwidth_5">
                            <input type="text" className="form-control" placeholder="Ex. Extra tomato"/>
                          </td>
                          <td className="tdwidth_3">
                            <label>
                              <input type="radio" name="option_item_settings_3" checked className="icheck" value="checkbox"/>Checkbox</label>
                            <label className="margin_left">
                              <input type="radio" name="option_item_settings_3" className="icheck" value="radio"/>Radio</label>
                          </td>
                        </tr>
                        <tr>
                          <td className="tdwidth_2">
                            <input type="text" className="form-control" placeholder="+ $5.50"/>
                          </td>
                          <td className="tdwidth_5">
                            <input type="text" className="form-control" placeholder="Ex. Extra Pepper"/>
                          </td>
                          <td className="tdwidth_3">
                            <label>
                              <input type="radio" name="option_item_settings_4" className="icheck" value="checkbox"/>Checkbox</label>
                            <label className="margin_left">
                              <input type="radio" name="option_item_settings_4" className="icheck" value="radio" checked/>Radio</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
                    
                  </div>
                </div>
              </div>
              <div className="menu-item-section clearfix">
                <h4>Menu item #2</h4>
                <div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
                </div>
              </div>
              <div className="strip_menu_items">
              <div className="row">
                <div className="col-sm-3">
                  <div className="menu-item-pic dropzone">
                    <input name="file" type="file"/>
                    <div className="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="menu_item_title" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" name="menu_item_title_price" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Short description</label>
                    <input type="text" name="menu_item_description" className="form-control"/>
                  </div>

                  <div className="form-group">
                    <label>Item options</label>
                                        <div className="table-responsive">
                    <table className="table table-striped notifications">
                      <tbody>
                        <tr>
                          <td className="tdwidth_2">
                            <input type="text" className="form-control" placeholder="+ $3.50"/>
                          </td>
                          <td className="tdwidth_5">
                            <input type="text" className="form-control" placeholder="Ex. Medium"/>
                          </td>
                          <td className="tdwidth_3">
                            <label>
                              <input type="radio" name="option_item_settings_5" checked className="icheck" value="checkbox"/>Checkbox</label>
                            <label className="margin_left">
                              <input type="radio" name="option_item_settings_5" className="icheck" value="radio"/>Radio</label>
                          </td>
                        </tr>
                        <tr>
                          <td className="tdwidth_2">
                            <input type="text" className="form-control" placeholder="+ $5.50"/>
                          </td>
                          <td className="tdwidth_5">
                            <input type="text" className="form-control" placeholder="Ex. Large"/>
                          </td>
                          <td className="tdwidth_3">
                            <label>
                              <input type="radio" name="option_item_settings_7" className="icheck" value="checkbox"/>Checkbox</label>
                            <label className="margin_left">
                              <input type="radio" name="option_item_settings_7" className="icheck" value="radio" checked/>Radio</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                                        </div>
                  </div>

                  <div className="form-group">
                      <label>Item ingredients</label>
                      <div className="table-responsive">
                        <table className="table table-striped notifications">
                          <tbody>
                            <tr>
                              <td className="tdwidth_2">
                                <input type="text" className="form-control" placeholder="+ $2.50"/>
                              </td>
                              <td className="tdwidth_5">
                                <input type="text" className="form-control" placeholder="Ex. Extra tomato"/>
                              </td>
                              <td className="tdwidth_2">
                                <label>
                                  <input type="radio" name="option_item_settings_8" checked className="icheck" value="checkbox"/>Checkbox</label>
                                <label className="margin_left">
                                  <input type="radio" name="option_item_settings_8" className="icheck" value="radio"/>Radio</label>
                              </td>
                            </tr>
                            <tr>
                              <td className="tdwidth_2">
                                <input type="text" className="form-control" placeholder="+ $5.50"/>
                              </td>
                              <td className="tdwidth_5">
                                <input type="text" className="form-control" placeholder="Ex. Extra Pepper"/>
                              </td>
                              <td className="tdwidth_3">
                                <label>
                                  <input type="radio" name="option_item_settings_9" className="icheck" value="checkbox"/>Checkbox</label>
                                <label className="margin_left">
                                  <input type="radio" name="option_item_settings_9" className="icheck" value="radio" checked/>Radio</label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>              
            </div>
            <hr className="styled_2"/>                    
            <div className="wrapper_indent">
              <div className="add_more_cat"><a href="#0" className="btn_1">Save now</a> <a href="#0" className="btn_1">Add menu category</a> </div>
            </div>                                              
          </section>
  )

const Settings = () =>(
    <section id="section-3">

            <div class="row">
                      
              <div class="col-md-6 col-sm-6 add_bottom_15">
                <div class="indent_title_in">
                  <i class="icon_lock_alt"></i>
                  <h3>Change your password</h3>
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis.
                  </p>
                </div>
                <div class="wrapper_indent">
                  <div class="form-group">
                    <label>Old password</label>
                    <input class="form-control" name="old_password" id="old_password" type="password"/>
                  </div>
                  <div class="form-group">
                    <label>New password</label>
                    <input class="form-control" name="new_password" id="new_password" type="password"/>
                  </div>
                  <div class="form-group">
                    <label>Confirm new password</label>
                    <input class="form-control" name="confirm_new_password" id="confirm_new_password" type="password"/>
                  </div>
                  <button type="submit" class="btn_1 green">Update Password</button>
                </div>
              </div>
                          
              <div class="col-md-6 col-sm-6 add_bottom_15">
                <div class="indent_title_in">
                  <i class="icon_mail_alt"></i>
                  <h3>Change your email</h3>
                  <p>
                    Mussum ipsum cacilds, vidis litro abertis.
                  </p>
                </div>
                <div class="wrapper_indent">
                  <div class="form-group">
                    <label>Old email</label>
                    <input class="form-control" name="old_email" id="old_email" type="email"/>
                  </div>
                  <div class="form-group">
                    <label>New email</label>
                    <input class="form-control" name="new_email" id="new_email" type="email"/>
                  </div>
                  <div class="form-group">
                    <label>Confirm new email</label>
                    <input class="form-control" name="confirm_new_email" id="confirm_new_email" type="email"/>
                  </div>
                  <button type="submit" class="btn_1 green">Update Email</button>
                </div>
              </div>
                          
            </div>

            <hr class="styled_2"/>
                      
            <div class="indent_title_in">
              <i class="icon_shield"></i>
              <h3>Notification settings</h3>
              <p>
                Mussum ipsum cacilds, vidis litro abertis.
              </p>
            </div>
            <div class="row">
                      
              <div class="col-md-6 col-sm-6">
                <div class="wrapper_indent">
                  <table class="table table-striped notifications">
                    <tbody>
                      <tr>
                        <td className="tdwidth_05">
                          <i class="icon_pencil-edit_alt"></i>
                        </td>
                        <td className="tdwidth_65">
                          New orders
                        </td>
                        <td className="tdwidth_35">
                          <label>
                            <input type="checkbox" name="option_1_settings" checked class="icheck" value="yes"/>Yes</label>
                          <label class="margin_left">
                            <input type="checkbox" name="option_1_settings" class="icheck" value="no"/>No</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i class="icon_pencil-edit_alt"></i>
                        </td>
                        <td>
                          Modified orders
                        </td>
                        <td>
                          <label>
                            <input type="checkbox" name="option_2_settings" checked class="icheck" value="yes"/>Yes</label>
                          <label class="margin_left">
                            <input type="checkbox" name="option_2_settings" class="icheck" value="no"/>No</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i class="icon_pencil-edit_alt"></i>
                        </td>
                        <td>
                          New user registration
                        </td>
                        <td>
                          <label>
                            <input type="checkbox" name="option_3_settings" checked class="icheck" value="yes"/>Yes</label>
                          <label class="margin_left">
                            <input type="checkbox" name="option_3_settings" class="icheck" value="no"/>No</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i class="icon_pencil-edit_alt"></i>
                        </td>
                        <td>
                          New comments
                        </td>
                        <td>
                          <label>
                            <input type="checkbox" name="option_4_settings" checked class="icheck" value="yes"/>Yes</label>
                          <label class="margin_left">
                            <input type="checkbox" name="option_4_settings" class="icheck" value="no"/>No</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit" class="btn_1 green">Update notifications settings</button>
                </div>
                              
              </div>
            </div>                      
          </section>
  )