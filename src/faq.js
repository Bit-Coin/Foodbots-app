import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Link
} from 'react-router-dom';

import logo from './img/logo.png';
import logo_mobile from './img/logo_mobile.png';
import devices from './img/devices.jpg';
import sub_header_cart from './img/sub_header_cart.jpg';

import Page_footer from './footer';

export default class faq extends Component {
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
  render() {   
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
              <h1>Frequently asked questions</h1>
              <p>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
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
            <div className="col-md-3" id="sidebar">
              <div className="theiaStickySidebar">
                <div className="box_style_1" id="faq_box">
                  <ul id="cat_nav">
                    <li><a href="#payment" className="active">Payments</a></li>
                    <li><a href="#works">How it works</a></li>
                    <li><a href="#delay">Delivery delay</a></li>
                    <li><a href="#takeaway">Takeaway</a></li>
                    <li><a href="#preorder">Preorder</a></li>
                    <li><a href="#register_2">Register</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#privacy">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
                
            <div className="col-md-9">
              <h3 className="nomargin_top">Payments</h3>           
              <div className="panel-group" id="payment">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#payment" href="#collapseOne">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#payment" href="#collapseTwo">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#payment" href="#collapseThree">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>                      
              <h3>How it works</h3>
                 
              <div className="panel-group" id="works">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#works" href="#collapseOne_works">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_works" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#works" href="#collapseTwo_works">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_works" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#works" href="#collapseThree_works">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_works" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>              
              <h3>Delivery delay</h3>
                 
              <div className="panel-group" id="delay">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#delay" href="#collapseOne_delay">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_delay" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#delay" href="#collapseTwo_delay">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_delay" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#delay" href="#collapseThree_delay">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_delay" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
                                        
              <h3>Takeaway</h3>
                 
              <div className="panel-group" id="takeaway">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#takeaway" href="#collapseOne_takeaway">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_takeaway" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#takeaway" href="#collapseTwo_takeaway">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_takeaway" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#takeaway" href="#collapseThree_takeaway">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_takeaway" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
                  
              <h3>Preorder</h3>
                 
              <div className="panel-group" id="preorder">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#preorder" href="#collapseOne_preorder">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_preorder" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#preorder" href="#collapseTwo_preorder">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_preorder" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#preorder" href="#collapseThree_preorder">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_preorder" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
                  
              <h3>Register</h3>
                 
              <div className="panel-group" id="register_2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#register_2" href="#collapseOne_register">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_register" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#register_2" href="#collapseTwo_register">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_register" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#register_2" href="#collapseThree_register">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_register" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Pricing</h3>
                 
              <div className="panel-group" id="pricing">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#pricing" href="#collapseOne_pricing">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_pricing" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#pricing" href="#collapseTwo_pricing">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_pricing" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#pricing" href="#collapseThree_pricing">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_pricing" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Privacy</h3>
                 
              <div className="panel-group" id="privacy">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#privacy" href="#collapseOne_privacy">Anim pariatur cliche reprehenderit?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseOne_privacy" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#privacy" href="#collapseTwo_privacy">Parsnip lotus root celery?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseTwo_privacy" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#privacy" href="#collapseThree_privacy">Beet greens peanut salad?<i className="indicator icon_plus_alt2 pull-right"></i></a>
                    </h4>
                  </div>
                  <div id="collapseThree_privacy" className="panel-collapse collapse">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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