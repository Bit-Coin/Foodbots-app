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
import detail_page_2 from './detail_page_2';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';
import icon_pack_2 from './icon_pack_2';
import slide_1 from './img/slides/slide_1.jpg';
import slide_2 from './img/slides/slide_2.jpg';
import Page_footer from './footer';
import sub_header_cart from './img/sub_header_cart.jpg';
import blog_1 from "./img/blog-1.jpg";
import blog_2 from "./img/blog-2.jpg";
import blog_3 from "./img/blog-3.jpg";

export default class blog extends Component {
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
             <h1>QuickFood Blog</h1>
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
        </div>
    </div>
    <div className="container margin_60_35">
        <div className="row">
               
           <div className="col-md-9">
              <div className="post">
                <a href="blog_post.html" ><Image src={blog_1} alt="" className="img-responsive"/></a>
                <div className="post_info clearfix">
                  <div className="post-left">
                    <ul>
                      <li><i className="icon-calendar-empty"></i>12/05/2015 <em>by Mark</em></li>
                                      <li><i className="icon-inbox-alt"></i><a href="#">Category</a></li>
                      <li><i className="icon-tags"></i><a href="#">Works</a>, <a href="#">Personal</a></li>
                    </ul>
                  </div>
                  <div className="post-right"><i className="icon-comment"></i><a href="#">25 </a></div>
                </div>
                <h2>Duis aute irure dolor in reprehenderit</h2>
                <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                          <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                <a href="blog_post.html" className="btn_1" >Read more</a>
              </div>
                                      
              <div className="post">
                <a href="blog_post.html" ><Image src={blog_2} alt="" className="img-responsive"/></a>
                <div className="post_info clearfix">
                  <div className="post-left">
                    <ul>
                      <li><i className="icon-calendar-empty"></i>12/05/2015 <em>by Mark</em></li>
                                      <li><i className="icon-inbox-alt"></i><a href="#">Category</a></li>
                      <li><i className="icon-tags"></i><a href="#">Works</a>, <a href="#">Personal</a></li>
                    </ul>
                  </div>
                  <div className="post-right"><i className="icon-comment"></i><a href="#">25 </a></div>
                </div>
                <h2>Duis aute irure dolor in reprehenderit</h2>
                <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                          <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                <a href="blog_post.html" className="btn_1" >Read more</a>
              </div>
                      
              <div className="post">
                <a href="blog_post.html" ><Image src={blog_3} alt="" className="img-responsive"/></a>
                <div className="post_info clearfix">
                  <div className="post-left">
                    <ul>
                      <li><i className="icon-calendar-empty"></i>12/05/2015 <em>by Mark</em></li>
                                      <li><i className="icon-inbox-alt"></i><a href="#">Category</a></li>
                      <li><i className="icon-tags"></i><a href="#">Works</a>, <a href="#">Personal</a></li>
                    </ul>
                  </div>
                  <div className="post-right"><i className="icon-comment"></i><a href="#">25 </a></div>
                </div>
                <h2>Duis aute irure dolor in reprehenderit</h2>
                <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                          <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo......
                </p>
                <a href="blog_post.html" className="btn_1" >Read more</a>
              </div>
             
                    <div className="text-center">
                       <ul className="pager">
                          <li className="previous"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
                          <li className="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
                        </ul>
                    </div>
           </div>
           
            <aside className="col-md-3" id="sidebar">

              <div className="widget">
              <div id="custom-search-input-blog">
                      <div className="input-group col-md-12">
                          <input type="text" className="form-control input-lg" placeholder="Search"/>
                          <span className="input-group-btn">
                              <button className="btn btn-info btn-lg" type="button">
                                  <i className="icon-search-1"></i>
                              </button>
                          </span>
                      </div>
                  </div>
              </div>
                      <hr/>
              <div className="widget">
                <h4>Categories</h4>
                <ul id="cat_nav_blog">
                            <li><a href="#">News</a></li>
                              <li><a href="#">Events</a></li>
                              <li><a href="#">Special dishes</a></li>
                              <li><a href="#">New Restaurants</a></li>
                          </ul>
              </div>
       
                     <hr/>
                  
              <div className="widget">
                <h4>Recent post</h4>
                <ul className="recent_post">
                  <li>
                  <i className="icon-calendar-empty"></i> 16th July, 2020
                  <div><a href="#">It is a long established fact that a reader will be distracted </a></div>
                  </li>
                  <li>
                  <i className="icon-calendar-empty"></i> 16th July, 2020
                  <div><a href="#">It is a long established fact that a reader will be distracted </a></div>
                  </li>
                  <li>
                  <i className="icon-calendar-empty"></i> 16th July, 2020
                  <div><a href="#">It is a long established fact that a reader will be distracted </a></div>
                  </li>
                </ul>
              </div>
                      <hr/>
              <div className="widget tags">
                <h4>Tags</h4>
                <a href="#">Lorem ipsum</a>
                <a href="#">Dolor</a>
                <a href="#">Long established</a>
                <a href="#">Sit amet</a>
                <a href="#">Latin words</a>
                <a href="#">Excepteur sint</a>
              </div>
                      
           </aside>
        
        </div>
      </div>
      <Page_footer/> 
    </div>
      );
  }
};