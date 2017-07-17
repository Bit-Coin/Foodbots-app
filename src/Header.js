import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,  
  Link,
  
  IndexRedirect
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
import slide_2 from './img/slides/slide_2.jpg';

const back_color = () =>(
    'background-color': 'black'
  )

class Coming extends Component {
    /*static propTypes = {
      isDark: React.PropTypes.bool
    };
    static defaultProps = {
      isDark: false
    };

    componentDidMount(){
      document.body.style.backgroundColor = "#000",
      document.body.classList.toggle('darkClass', this.props.isDark);
      window.$('#slides').superslides({
      play: 6000,
      pagination:false,
      animation_speed: 800,
      animation: 'fade'
      });
      // makes sure the whole site is loaded            
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('darkClass', nextProps.isDark)
  }
  componentWillUnmount() {
    document.body.classList.remove('background-color')
  }*/

  render(){
      
      return(
      <div>          
        <Coming_Page/>        
      </div>
    );
  }
}
class Header extends Component{ 
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
      <Router>      
        <div>                                                       
                  <Route exact path="/" component={Coming}/>
                  <Route path="/coming_soon" component={Coming}/>
                  <Route path="/index2" component={Home_Static_image}/>
                  <Route path="/index3" component={Home_Text_rotator}/>                 
                  <Route path="/index4" component={Home_Cookie_bar}/>
                  <Route path="/index5" component={Home_Popup}/> 
                  <Route path="/index6" component={Home_Mobile_synthetic}/>  
                  <Route path="/home" component={Home}/>  


                  <Route path="/list_page" component={list_page}/>
                  <Route path="/grid_list" component={grid_list}/>
                  
                  <Route path="/detail_page" component={detail_page}/>
                  <Route path="/submit_restaurant" component={submit_restaurant}/>
                  <Route path="/cart" component={cart}/> 
                  <Route path="/cart_2" component={cart_2}/> 
                  <Route path="/cart_3" component={cart_3}/> 
                  <Route path="/cart_datepicker" component={cart_datepicker}/> 
                  
                  <Route path="/about" component={about}/>  
                  <Route path="/faq" component={faq}/>  

                  <Route path="/admin" component={admin}/>
                  <Route path="/submit_driver" component={submit_driver}/>
                  <Route path="/blog" component={blog}/>
                  <Route path="/detail_page_2" component={detail_page_2}/>
                  <Route path="/contacts" component={contacts}/>
                  <Route path="/shortcodes" component={shortcodes}/> 
                  <Route path="/icon_pack_1" component={icon_pack_1}/> 
                  <Route path="/icon_pack_2" component={icon_pack_2}/>
                  
              
          </div>
      </Router>
    );
  }
};
export default Header