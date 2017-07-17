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
import Page_footer from './footer';

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
import icon_ccv from './img/icon_ccv.gif';
import check_1 from './img/check-1.png';
import check_2 from './img/check-2.png';

const cart_dateheight = { 
  height:150 
}

let UserName = '';
let UserId   = '';
let Shared_User_Name = new Array();
var Shared_Enchiladas_Pay = new Array();
var Shared_Burrito_Pay = new Array();
var sh_length = 0;
let Shared_User_Id   = '';
let order_id1 = '';
var sub_total_pay = new Array();
var total = 0;
var temp = new Array();
var temp1 = new Array()
// var street = '';
var city = '';
var state = '';
var food = '';
var cuisine = '';
var flag = true;
var resturant_name = '';
var operation_hours = '';
var phone_number = '';
var order_type = '';
var order_bill = '';

export default class cart2 extends Component {
 constructor(props) {
    super(props);
      
      this.state = {street: "jksjdfkjkd"};
      this.temp       = 0;
      this.temp1      = 0;
      this.Enchiladas = 0;
      this.Burrito    = 0;
      this.sub_total  = 0;
      this.add    = [];
      this.order_id = '';
      this.user_id  = ''; 
      this.street = '';
      this.conf = {
        street: ""
      }
      this.id = "";
      console.log("here is the constructor")
      console.log("this.state.street="+this.state.street)
      this.ids = this.props.location.search;    
     
      this.id = this.ids.match(/\?(.*)/)[1].split("&");      
      for (var i = 0 ; i <= this.id.length - 1; i++) {
        if(i == 0)
        {
          this.order_id = this.id[i].split("=");
        }
        if(i == 1)
        {
          this.user_id = this.id[i].split("=");
        }
      }      
  }
   
  handleClick(){
    var currentRoute = 'React-Route path';
    var linkRoute = 'link path';
    location.reload();      
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

      window.$('input.icheck').iCheck({
         checkboxClass: 'icheckbox_square-grey',
         radioClass: 'iradio_square-grey'
     });
    var self = this;
      document.body.style.backgroundColor = '#FFFFFF',
      document.body.classList.toggle('darkClass', this.props.isDark);     
    
       var path = 'https://api.foodbots.co/mainorders/review/' + this.order_id[1];
      $.getJSON(path, function (data) {  
      
        UserName = data.user.first_name +' '+ data.user.last_name;
        food = data.orders;        
        UserId   = data.user.user_id;  
        order_id1 = data.order_id1;
        sh_length = data.shared_users.length;                   
        for (var i = 0 ; i <= data.shared_users.length - 1; i++) {                  
                Shared_User_Name[i] = data.shared_users[i].first_name + data.shared_users[i].last_name;
                // alert(Shared_User_Name[i]);
              }  
        
        city   = data.rest.city;
        state  = data.rest.state;
        cuisine = data.rest.cuisine;
        resturant_name = data.rest.name;
        operation_hours = data.rest.operation_hours;
        phone_number = data.rest.phone_number;
        order_type = data.order_type;
        order_bill = data.order_bill; 
        self.setState({
          street: data.rest.street,
          city  : data.rest.city,
          state : data.rest.state,
          cuisine : data.rest.cuisine,
          resturant_name : data.rest.name,
          operation_hours : data.rest.operation_hours,
          phone_number : data.rest.phone,
          order_type : data.order_type,
          order_bill : data.order_bill,
        }) 
        // alert("cuisine length = "+ cuisine[0]);
        // alert("Here is end")                                            
      });

     
  }   

text_alert_box = (rl,food_id, sh_id) =>{
    
    for (var i = 0; i <= sh_length; ++i) {
      
      if( i === sh_id){
          
          if(Shared_Enchiladas_Pay[sh_id] !=null){
            this.temp = Shared_Enchiladas_Pay[sh_id];
            
          }
          if(Shared_Enchiladas_Pay[sh_id] === null){
            
            this.temp = 0;
          }
          if(food_id === 1){
            
              if(rl === 'Max_Enchiladas'){
                  
                  this.temp += 11;
                  this.Enchiladas = this.temp;
                  // total +=this.temp;
                } 
                else{
                  
                  this.temp -= 11;            
                  this.Enchiladas = this.temp;
                  // total -=this.temp;

                }              
                
                Shared_Enchiladas_Pay[sh_id] = this.temp;
                sub_total_pay[sh_id] = Shared_Enchiladas_Pay[sh_id];
                this.temp = 0;

            }
            else if(food_id === 2){
              
              if(Shared_Burrito_Pay[sh_id] !=null){
                this.temp1 = Shared_Burrito_Pay[sh_id];                
              }
              if(Shared_Burrito_Pay[sh_id] === null){                
                this.temp1 = 0;
              }

                
                if(rl === 'Max_Burrito'){
                  this.temp1 += 7;
                  this.Burrito = this.temp1;
                  // total +=this.temp1;
                }
                else{
                  this.temp1 -= 7;
                  this.Burrito = this.temp1;
                  // total -=this.temp1;
                }                               
                Shared_Burrito_Pay[sh_id] = this.temp1;
                sub_total_pay[sh_id] = Shared_Burrito_Pay[sh_id];

                this.temp1 = 0;                            
            }                        
         
        }

      }      
      
  }  
  action_div(i){        
    if(flag == false)
    {
      $( "#food_user_div_"+i ).hide();
      flag = true;
    }
    else if(flag == true)
    {
      $( "#food_user_div_"+i ).show();
      flag = false;
    }
    
  }
  submit(e){
    e.preventDefault();         
    $.ajax({
      url: 'https://www.foodbots.co/order',
      dataType: 'json',
      type: 'POST',
      data: {order_id1: order_id1, user_id:UserId},
      success: function(data) {          
            document.location.href = '?order_id1='+order_id1 + '&user_id=' + UserId;       
      }.bind(this),
      error: function(xhr, status, err) {
            /*document.location.href = '/order?order_id1='+order_id1 + '&user_id=' + UserId;*/
            document.location.href = location.href;
        alert('server failed')                   
      }.bind(this)
    });            
  }
  render(){
    // alert("this.order_id="+this.order_id)

    // alert("this.street=" +this.street)
    // console.log(this.order_id[1])
    var street = this.street;
    var food_item = '';
    var food_description = '';
    var food_price = 0;
    var food_item_specifics = '';
    var food_quantity = '';
    var food_arr = new Array();
    var user_total = 0;
    for (var i = food.length - 1; i >= 0; i--) {
        food_item = food[i].item_id.name;
        food_description = food[i].item_id.description;
        food_price = food[i].item_total;
        food_item_specifics = food[i].item_specifics;
        food_quantity = food[i].quantity;
        user_total +=food[i].item_total;
        
        food_arr[i] = <table className='table table_summary'>
                      <tbody>

                        <tr>
                          <td>
                            <div className= "col-md-12">
                                <a href='#0' className='remove_item' id='Min_Burrito'></a> <strong>{i+1})</strong> {food_item}
                            </div>
                          </td>
                          <td>
                            <div className= "col-md-12">
                            <strong className='pull-right'>{food_quantity}</strong>
                            </div>
                          </td>                        
                          <td>
                            <div className= "col-md-12">
                            <strong className='pull-right'>${food_price}</strong>
                            </div>
                          </td>
                        </tr>                        
                        <tr>
                          <td>
                            <div className= "col-md-12" >                          
                                -<a href='#0' className='remove_item'  id='food_description'>{food_description}</a><br/>                                                    
                                -<a href='#0' className='remove_item'  id='food_item_specifics'>{food_item_specifics}</a>                                                  
                            </div>
                          </td>
                        </tr>                      
                      </tbody>
                      </table> ;
        
                         
        
    }
    user_total = user_total*100
    user_total = Math.round(user_total)
    user_total = user_total/100;
    

    var Enchiladas  = Number(Shared_Enchiladas_Pay[0]);
    var Burrito     = Number(Shared_Burrito_Pay[0]);
    var sub_total   = 0;  
    if(Enchiladas!=null&&Burrito!=null)
    {
      sub_total = Enchiladas + Burrito;
    }
    
    var total1 =  0;
    var cuisine_list = [];
    for (var i = 0; i <= cuisine.length-1; i++) {
          cuisine_list[i] = <font>{cuisine[i]}:<br/></font> ;
    }
    
    for (var i = 0, j = i+1; i <= sh_length; i++, j++) {             

       var Shared_User = <div className='box_style_2' id='order_process'>                  
                  <h2 className='inner'><div className='col-md-1'><Image src={check_2}/></div><div className='col-md-6'>{Shared_User_Name[0]}</div><div className='col-md-4'>Total ${Number(Shared_Enchiladas_Pay[i] + Shared_Burrito_Pay[i])}</div><i className='icon-down-open-mini' onClick={this.action_div.bind(this,i)}></i></h2>
                    <div className='theiaStickySidebar' id={"food_user_div_"+i}>
                                          
                      <table className='table table_summary'>
                      <tbody>
                      <tr>
                        <td>
                            Enchiladas
                        </td>
                        <td>
                          <a href='#0' className='remove_item' id='Min_Enchiladas' onClick={this.text_alert_box.bind(this, 'Min_Enchiladas',1, i )}><i className='icon_minus_alt'></i></a><strong>1x</strong>
                          <a href='#0' className='remove_item' id='Max_Enchiladas' onClick={this.text_alert_box.bind(this, 'Max_Enchiladas',1, i )}><i className='icon-plus-circle-1'></i></a>
                        </td>
                        <td>
                          <strong className='pull-right'>${Shared_Enchiladas_Pay[i]}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           Burrito
                        </td>
                        <td>
                        <a href='#0' className='remove_item' onClick={this.text_alert_box.bind(this, 'Min_Burrito',2, i)} id='Min_Burrito'><i className='icon_minus_alt'></i></a> <strong>2x</strong>
                          <a href='#0' className='remove_item' onClick={this.text_alert_box.bind(this, 'Max_Burrito',2, i)} id='Max_Burrito'><i className='icon-plus-circle-1'></i></a>
                        </td>
                        <td>
                          <strong className='pull-right'>${Shared_Burrito_Pay[i]}</strong>
                        </td>
                      </tr>                     
                      </tbody>
                      </table>                                                                              
                  </div>  
                </div>;

                total1 = Number(Shared_Enchiladas_Pay[i] + Shared_Burrito_Pay[i]);
                
     } 
     
     

     



  return (
    <div>
    <header>        
      <Grid  fluid>
        <Row >
          <Col md={4} sm={4} xs={4}>
            <Link to=''  id='logo'>
            <Image src={logo} width='190' height='23' alt='' data-retina='complete' className='hidden-xs' />
            <Image src={logo_mobile} width='59' height='23' alt='' data-retina='complete' className='hidden-lg hidden-md hidden-sm' />
            </Link>
          </Col>
          <Col md={8} sm={8} xs={8} componentClass={'nav'}>
            <Link className='cmn-toggle-switch cmn-toggle-switch__htx open_close' to='#'>
              <span>Menu mobile</span>
            </Link>
            <div className='main-menu'>
              <div id='header_menu'>
                <img src={logo} width='190' height='23' alt='' data-retina='true' />
              </div>
              <Link to='#' className='open_close' id='close_in'><i className='icon_close'></i></Link>
              <ul  role='nav'>
                <li className='submenu'>
                  <Link to='#' className='show-submenu'>Home
                    <i className='icon-down-open-mini'></i>
                  </Link>
                    <ul>                                                     
                      <li><Link onClick={this.handleClick}  to='/home'>Home Video background</Link></li>                              
                      <li><Link onClick={this.handleClick} to='/index2' refresh='true' >Home Static image</Link></li>
                      <li><Link onClick={this.handleClick}  to='/index3'>Home Text rotator</Link></li>
                      <li><Link onClick={this.handleClick}  to='/index8'>Home Layer slider</Link></li>
                      <li><Link onClick={this.handleClick}  to='/index4'>Home Cookie bar</Link></li>
                      <li><Link onClick={this.handleClick}  to='/index5'>Home Popup</Link></li>
                                                         
                      <li><Link onClick={this.handleClick}  to='/coming_soon'>Coming Soon</Link></li>
                    </ul>
                </li>
                <li className='submenu'>
                    <Link to='#' className='show-submenu'>Restaurants
                    <i className='icon-down-open-mini'></i>
                  </Link>
                  <ul>
                    <li><Link onClick={this.handleClick}  to='/list_page'>Row listing</Link></li>
                    <li><Link onClick={this.handleClick}  to='/grid_list'>Grid listing</Link></li>
                    
                    <li><Link onClick={this.handleClick}  to='/detail_page'>Restaurant Menu</Link></li>
                    <li><Link onClick={this.handleClick}  to='/submit_restaurant'>Submit Restaurant</Link></li>
                    <li><Link onClick={this.handleClick}  to='/cart'>Order step 1</Link></li>
                    <li><Link onClick={this.handleClick}  to='/cart_2'>Order step 2</Link></li>
                    <li><Link onClick={this.handleClick}  to='/cart_3'>Order step 3</Link></li>
                    <li><Link onClick={this.handleClick}  to='/cart_datepicker'>Order Date/Time picker</Link></li>
                  </ul>
                </li>
                <li><Link onClick={this.handleClick}  to='/about'>About us</Link></li>
                <li><Link onClick={this.handleClick}  to='/faq'>Faq</Link></li>
                <li className='submenu'>
                  <Link to='#' className='show-submenu'>Pages<i className='icon-down-open-mini'></i></Link>
                  <ul>                            
                    <li><Link onClick={this.handleClick}  to='/admin'>Admin section</Link></li>
                    <li><Link onClick={this.handleClick}  to='/submit_driver'>Submit Driver</Link></li>
                    <li><Link to='#0' data-toggle='modal' data-target='#login_2'>User Login</Link></li>
                    <li><Link to='#0' data-toggle='modal' data-target='#register'>User Register</Link></li>
                    <li><Link onClick={this.handleClick}  to='/detail_page_2'>Restaurant detail page</Link></li>
                    <li><Link onClick={this.handleClick}  to='/blog'>Blog</Link></li>
                    <li><Link onClick={this.handleClick}  to='/contacts'>Contacts</Link></li>
                    
                    
                    <li><Link onClick={this.handleClick}  to='/icon_pack_1'>Icon pack 1</Link></li>
                    <li><Link onClick={this.handleClick}  to='/icon_pack_2'>Icon pack 2</Link></li>
                  </ul>
                </li>                        
                <li><Link to='#0' data-toggle='modal' data-target='#login_2'>Login</Link></li>
                <li><Link to='#0'>Purchase this template</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>                 
    </header>      
      <div></div>      
      <div className='container margin_60_35'>
        <div className='row'>
          <div className='col-md-3'>                  
            <div className='box_style_2 hidden-xs info'>
              <h4 className='nomargin_top'>{this.state.resturant_name}</h4>
              <p>
                {this.state.street}
                <br/>
                {this.state.city}{this.state.state}
              </p>
              <hr/>
              <h4>Location</h4>
              <p>
                {cuisine_list}
              </p>
              <p>
                Hours:<br/>{this.state.operation_hours}
              </p>
              <p>
                Phone: {this.state.phone_number}
              </p>
            </div>
                    
            <div className='box_style_2 hidden-xs info'>
              
              <h4><center>Oreder Details</center></h4>
              <p>
                Type: {this.state.order_type}<br/> Amount to be paid : {this.state.order_bill}$
              </p>
              <p>
                Members Who paid:
                <br/>
                None
              </p>
            </div>                      
          </div>                
          <div className='col-md-6'>
              {Shared_User}              
                <div className='box_style_2' id='order_process'>
                  <h2 className='inner'>
                  <div className='col-md-1'><Image src={check_1}/></div><div className='col-md-6'>{UserName}</div><div className='col-md-4'>Total ${user_total}</div><i className='icon-down-open-mini' onClick={this.action_div.bind(this,0)} ></i></h2>
                    <div className='theiaStickySidebar' id="food_user_div_0">
                       {food_arr}                 
                    </div>  
                </div>
          </div>                
          <div className='col-md-3' id='sidebar'>
            <div className='box_style_2'>
                <h2 className='inner'>Payment Method</h2>
                <div className='payment_select'>
                  <label><input type='radio' value='' checked name='payment_method' className='icheck'/>Card</label>
                  <i className='icon_creditcard'></i>
                </div>                                    
                <div className='payment_select'>
                  <label><input type='radio' value='' name='payment_method' className='icheck'/>Pay with cash</label>
                  <i className='icon_wallet'></i>
                </div>                                    
                  <a className='btn_full' href='#0'>ADD CARD</a>
                  <div id='cart_box'>                      
                    
                    <table className='table table_summary'>
                    <tbody>                    
                    <tr>
                      <td className='total'>
                         TOTAL <span className='pull-right'>${total1}</span>
                      </td>
                    </tr>
                    </tbody>
                    </table>                  
                    <hr/>
                    <a className='btn_full' href='#0'>PAY</a>                  
                  </div>                                         
                </div>
                <div className='theiaStickySidebar'>                  
                </div>  
          </div>                  
        </div>
      </div>
      <Page_footer/>
    </div>
      );
  }
};