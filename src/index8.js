import React ,{Component} from 'react';
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

import Page_footer from './footer';

import slide_2 from './img/slides/slide_2.jpg';
import slide_3 from './img/slides/slide_3.jpg';
import slide_4 from './img/slides/slide_4.jpg';



const layerslider_style = {
    width:'100%',
    height:'600px'
}
const h3_style_1 ={
    top: '44%',
    left: '50%'
    
}
const p_style_1 = {
    top:'52%',
    left:'50%'
}
const p_style_2 = {
    top:'64%',
    left:'50%'
}
const h_data_ls_1 ={
   offsetxin:'0',
   durationin:'2000',
   delayin:'1000',
   easingin:'easeOutElastic',
   rotatexin:'90',
   transformoriginin:'50% bottom 0',
   offsetxout:'0',
   rotatexout:'90',
   transformoriginout:'50% bottom 0'
}
const p_data_ls_1 = {
    durationin:'2000',
    delayin:'1000',
    easingin:'easeOutElastic'
}
const p_data_ls_2 = {
    durationin:'2000',
    delayin:'1300',
    easingin:'easeOutElastic'
}
const data_ls_1 = {
    slidedelay: '5000', 
    transition2d:'5'
}

export default class index8 extends Component {
 componentDidMount() {        
        $(document).ready(function(){                
            autoStart: true;
            responsive: true;
            responsiveUnder: 1280;
            layersContainer: 1170;
            navButtons:false;
            showCircleTimer:false;
            navStartStop:false;
            skinsPath: './layerslider/skins/';
            // Please make sure that you didn't forget to add a comma to the line endings
            // except the last line!        
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
render(){
  return (  
    <div><header>        
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
        <div id="full-slider-wrapper">
            <div id="layerslider" style={layerslider_style} >            
                <div className="ls-slide" data-ls={data_ls_1}>
                    <Image src={slide_1} className="ls-bg" alt="Slide background"/>
                    <h3 className="ls-l slide_typo" style={h3_style_1} data-ls={h_data_ls_1} ><strong>Enjoy</strong> a quick friends dinner</h3> 
                    <p className="ls-l slide_typo_2" style={p_style_1} data-ls={p_data_ls_1} >Order Quality Takeaway or Delivery Food online</p>
                    <p className="ls-l" style={p_style_2} data-ls={p_data_ls_2} >
                        <a href="list_page.html" className="button_intro">Search</a> 
                        <a href="#0" className="button_intro outline">Read more</a>
                    </p>
                </div>                       
                <div className="ls-slide" data-ls={data_ls_1}>
                    <Image  src={slide_4} className="ls-bg" alt="Slide background"/>
                    <h3 className="ls-l slide_typo" style={h3_style_1} data-ls={h_data_ls_1} ><strong>Enjoy</strong> a quick friends dinner</h3> 
                    <p className="ls-l slide_typo_2" style={p_style_1} data-ls={p_data_ls_1} >Order Quality Takeaway or Delivery Food online</p>
                    <p className="ls-l" style={p_style_2} data-ls={p_data_ls_2} >
                        <a href="list_page.html" className="button_intro">Search</a> 
                        <a href="#0" className="button_intro outline">Read more</a>
                    </p>                    
                </div>                         
                <div className="ls-slide"  data-ls={data_ls_1}>
                    <Image src={slide_2} className="ls-bg" alt="Slide background"/>                    
                    <h3 className="ls-l slide_typo" style={h3_style_1} data-ls={h_data_ls_1} ><strong>Enjoy</strong> a quick friends dinner</h3> 
                    <p className="ls-l slide_typo_2" style={p_style_1} data-ls={p_data_ls_1} >Order Quality Takeaway or Delivery Food online</p>
                    <p className="ls-l" style={p_style_2} data-ls={p_data_ls_2} >
                        <a href="list_page.html" className="button_intro">Search</a> 
                        <a href="#0" className="button_intro outline">Read more</a>
                    </p>
                </div>                          
                <div className="ls-slide" data-ls={data_ls_1}>
                    <Image src={slide_3} className="ls-bg" alt="Slide background"/>                    
                    <h3 className="ls-l slide_typo" style={h3_style_1} data-ls={h_data_ls_1} ><strong>Enjoy</strong> a quick friends dinner</h3> 
                    <p className="ls-l slide_typo_2" style={p_style_1} data-ls={p_data_ls_1} >Order Quality Takeaway or Delivery Food online</p>
                    <p className="ls-l" style={p_style_2} data-ls={p_data_ls_2} >
                        <a href="list_page.html" className="button_intro">Search</a> 
                        <a href="#0" className="button_intro outline">Read more</a>
                    </p>
                </div>
                <div id="count" className="hidden-xs">
                    <ul>
                        <li><span className="number">2650</span> Restaurant</li>
                        <li><span className="number">5350</span> People Served</li>
                        <li><span className="number">12350</span> Registered Users</li>
                    </ul>
                </div>
            </div>    
        </div>
        <Content/>
        <Page_footer/>
    </div>
  );
  }
};      
