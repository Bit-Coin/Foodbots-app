import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Link
} from 'react-router-dom';

import submit_restaurant from './img/submit_restaurant.jpg';
import thumb_restaurant from './img/thumb_restaurant.jpg';
import thumb_restaurant_2 from './img/thumb_restaurant_2.jpg';
import thumb_restaurant_3 from './img/thumb_restaurant_3.jpg';
import thumb_restaurant_4 from './img/thumb_restaurant_4.jpg';
import thumb_restaurant_5 from './img/thumb_restaurant_5.jpg';
import thumb_restaurant_6 from './img/thumb_restaurant_6.jpg';
import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';
import sub_header_short from './img/sub_header_short.jpg';

export default function list_page(props) {
  return (
<div>  
    <div class="container-fluid full-height">
        <div class="row row-height">
            <div class="col-lg-7 col-md-6 content-left">
                <div id="filters_map">
                    <a data-toggle="collapse" href="#collapseFiltesmap" aria-expanded="false" aria-controls="collapseFiltesmap" class="btn_filter" id="open_filters"></a>
                    <div class="pull-right">
                      <a href="#0" class="btn_filter search-overlay-menu-btn" id="search_bt"></a>
                      <a href="grid_list.html" class="btn_filter" id="grid"></a>
                      <a href="list_page.html" class="btn_filter" id="list"></a>
                    </div>
                    <div id="collapseFiltesmap" class="collapse">
                        <div class="filter_type clearfix">
                            <h6>Distance</h6>
                            <div class="range_wp">
                                <input type="text" id="range" name="range" value=""/>
                            </div>
                        </div>
                        <div class="filter_type clearfix">
                            <h6>Type</h6>
                            <ul>
                              <li><label><input type="checkbox" checked class="icheck"/>All <small>(49)</small></label></li>
                              <li><label><input type="checkbox" class="icheck"/>American <small>(12)</small></label><i class="color_1"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Chinese <small>(5)</small></label><i class="color_2"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Hamburger <small>(7)</small></label><i class="color_3"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Fish <small>(1)</small></label><i class="color_4"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Mexican <small>(49)</small></label><i class="color_5"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Pizza <small>(22)</small></label><i class="color_6"></i></li>
                              <li><label><input type="checkbox" class="icheck"/>Sushi <small>(43)</small></label><i class="color_7"></i></li>
                            </ul>
                        </div>
                      <div class="filter_type clearfix">
                            <h6>Rating</h6>
                           <ul>
                            <li><label><input type="checkbox" class="icheck"/><span class="rating">
                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i>
                            </span></label></li>
                            <li><label><input type="checkbox" class="icheck"/><span class="rating">
                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                            </span></label></li>
                            <li><label><input type="checkbox" class="icheck"/><span class="rating">
                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i>
                            </span></label></li>
                            <li><label><input type="checkbox" class="icheck"/><span class="rating">
                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i>
                            </span></label></li>
                            <li><label><input type="checkbox" class="icheck"/><span class="rating">
                            <i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i>
                            </span></label></li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="strip_list">
                  <div class="ribbon_1">
                    Popular
                  </div>
                  <div class="row">
                    <div class="col-md-9 col-sm-9">
                      <div class="desc">
                        <div class="thumb_strip">
                          <a href="detail_page.html"><img src={thumb_restaurant_2} alt=""/></a>
                        </div>
                        <div class="rating">
                          <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
                        </div>
                        <h3>Naples Pizza</h3>
                        <div class="type">
                          Italian / Pizza
                        </div>
                        <div class="location">
                          135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i class="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <div class="go_to">
                        <div>
                          <a href="detail_page.html" class="btn_1">View Menu</a>
                                          <a onclick="onHtmlClick('Pizza', 1)" class="btn_listing">View on Map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      
                <div class="strip_list">
                  <div class="row">
                    <div class="col-md-9 col-sm-9">
                      <div class="desc">
                        <div class="thumb_strip">
                          <a href="detail_page.html"><img src={thumb_restaurant_3} alt=""/></a>
                        </div>
                        <div class="rating">
                          <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
                        </div>
                        <h3>Golden Bowl</h3>
                        <div class="type">
                          Chinese / Japanese
                        </div>
                        <div class="location">
                          135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i class="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <div class="go_to">
                        <div>
                          <a href="detail_page.html" class="btn_1">View Menu</a>
                                          <a onclick="onHtmlClick('Chinese', 0)" class="btn_listing">View on Map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                      
                <div class="strip_list">
                  <div class="row">
                    <div class="col-md-9 col-sm-9">
                      <div class="desc">
                        <div class="thumb_strip">
                          <a href="detail_page.html"><img src={thumb_restaurant_4} alt=""/></a>
                        </div>
                        <div class="rating">
                          <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
                        </div>
                        <h3>Oriental Chinese</h3>
                        <div class="type">
                          Chinese / Japanese
                        </div>
                        <div class="location">
                          135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i class="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <div class="go_to">
                        <div>
                          <a href="detail_page.html" class="btn_1">View Menu</a>
                                          <a onclick="onHtmlClick('Chinese', 1)" class="btn_listing">View on Map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      
                <div class="strip_list">
                  <div class="row">
                    <div class="col-md-9 col-sm-9">
                      <div class="desc">
                        <div class="thumb_strip">
                          <a href="detail_page.html"><img src={thumb_restaurant_5} alt=""/></a>
                        </div>
                        <div class="rating">
                          <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
                        </div>
                        <h3>Dragon Tower</h3>
                        <div class="type">
                          Chinese / Thai
                        </div>
                        <div class="location">
                          135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i class="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <div class="go_to">
                        <div>
                          <a href="detail_page.html" class="btn_1">View Menu</a>
                                          <a onclick="onHtmlClick('Chinese', 2)" class="btn_listing">View on Map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      
                <div class="strip_list last">
                  <div class="row">
                    <div class="col-md-9 col-sm-9">
                      <div class="desc">
                        <div class="thumb_strip">
                          <a href="detail_page.html"><img src={thumb_restaurant_6} alt=""/></a>
                        </div>
                        <div class="rating">
                          <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
                        </div>
                        <h3>New Hong Kong</h3>
                        <div class="type">
                          Sushi
                        </div>
                        <div class="location">
                          135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00.</span> Minimum order: $15
                        </div>
                        <ul>
                          <li>Take away<i class="icon_check_alt2 ok"></i></li>
                          <li>Delivery<i class="icon_check_alt2 ok"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <div class="go_to">
                        <div>
                          <a href="detail_page.html" class="btn_1">View Menu</a>
                          <a onclick="onHtmlClick('Sushi', 0)" class="btn_listing">View on Map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#0" class="load_more_bt_2">Load more...</a>  
              </div>      
              <div class=" col-lg-5 col-md-6 map-right">
                <div id="map_listing"></div>      
              </div>
            </div>        
          </div>              
          <div class="layer"></div>
          <div class="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content modal-popup">
                <a href="#" class="close-link"><i class="icon_close_alt2"></i></a>
                <form action="#" class="popup-form" id="myLogin">
                          <div class="login_icon"><i class="icon_lock_alt"></i></div>
                  <input type="text" class="form-control form-white" placeholder="Username"/>
                  <input type="text" class="form-control form-white" placeholder="Password"/>
                  <div class="text-left">
                    <a href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </form>
              </div>
            </div>
          </div>             
          <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content modal-popup">
                <a href="#" class="close-link"><i class="icon_close_alt2"></i></a>
                <form action="#" class="popup-form" id="myRegister">
                          <div class="login_icon"><i class="icon_lock_alt"></i></div>
                  <input type="text" class="form-control form-white" placeholder="Name"/>
                  <input type="text" class="form-control form-white" placeholder="Last Name"/>
                            <input type="email" class="form-control form-white" placeholder="Email"/>
                            <input type="text" class="form-control form-white" placeholder="Password"  id="password1"/>
                            <input type="text" class="form-control form-white" placeholder="Confirm password"  id="password2"/>
                            <div id="pass-info" class="clearfix"></div>
                  <div class="checkbox-holder text-left">
                    <div class="checkbox">
                      <input type="checkbox" value="accept_2" id="check_2" name="check_2" />
                      <label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-submit">Register</button>
                </form>
              </div>
            </div>
          </div>                         
          <div class="search-overlay-menu">
            <span class="search-overlay-close"><i class="icon_close"></i></span>
            <form role="search" id="searchform" method="get">
              <input value="" name="q" type="search" placeholder="Search..." />
              <button type="submit"><i class="icon-search-6"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};      