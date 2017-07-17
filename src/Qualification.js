import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'react-input-component';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Modal from 'react-modal';
import AlertContainer from 'react-alert';
import Alert from 'react-alerts';
import $ from 'jquery';
import ZIndex from 'react-z-index';
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Link
} from 'react-router-dom';
import Request from 'superagent';

import HeaderVideo from './js/video_header.js';
import video_fix from './img/video_fix.png';
import logo from './img/mainlogo.png';


import Page_footer1 from './page_footer1';
import devices from './img/devices.jpg';
import cards from './img/cards.png';
import sub_header_cart from './img/sub_header_cart.jpg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    width                 : '35%',
    right                 : 'auto',
    bottom                : 'auto',        
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
 overlay : {
    position          : 'fixed',
    top               : '0',
    left              : '0',
    right             : '0',
    bottom            : '0',
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex: '100'
  }
};
const custom_alert_style = {
  transition : '0%',
  height     : '5px'
};


export default class Qualification extends Component {
   constructor(props) {
    super(props);
    /*this.state={};*/
    this.state = {
      modalIsOpen: false
    };
    this.someData = 'normal';
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.err_v = false;
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';

  }

  closeModal() {
      this.setState({modalIsOpen: false});
      if(this.someData == 'success')
      {
        window.location.href='/home';  
      }
      else if(this.someData == 'failed')
      {        
        window.location.href=location.href;   
      }    
  }
   
  previousLocation = this.props.location;
  
  componentDidMount() {
    $(document).ready(function() {      
      HeaderVideo.init({
        container: $('.header-video'),
        header: $('.header-video--media'),
        videoTrigger: $("#video-trigger"),
        autoPlayVideo: true
      });
    });    
  }
 
  submit(e){
    e.preventDefault(); 
    this.someData = 'normal';       
    var email = document.getElementById('email_newsletter').value;  

    $.ajax({
      url: 'https://api.foodbots.co/subscribe',
      dataType: 'json',
      type: 'POST',
      data: {email: email},
      success: function(data) {          
        this.someData = 'success';

        /*this.openModal();*/
        /*this.showAlert();*/            
        this.setState({data: data});  
        /*window.location.href='/home';     */
      }.bind(this),
      error: function(xhr, status, err) {   
                 
        this.someData = 'failed';
        this.openModal();   
         if ( email == "")     this.err_v = true;      
        /*console.error('https://api.foodbots.co/subscribe', status, err.toString());        */
      }.bind(this)
    });            
  }
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'white',
    opacity: '0.1',
    time: 2000,
    transition: 'scale'
  }
 
  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 3000,
      type: 'success',
      icon: <img src="./img/apple-touch-icon-57x57-precomposed.png" />
    })
  }
  render(){
     var alert_b= <strong>Success !</strong> ;
    var text_b = <strong>This account is already registered.</strong> ;
    var form_b = <form autocomplete="off">                
                <div className="row">
                   <div className="col-md-5 col-md-offset-3 first-nogutter">
                        <input ref={(c) => this.email_newsletter = c} name="email_newsletter" id="email_newsletter" type="email" placeholder="Your Email" className="form-control"/>
                    </div>
                    <div className="col-md-1 nogutter">
                        <button className="btn-check inline_height" id="submit-newsletter" onClick={this.submit.bind(this)}>Subscribe</button>
                    </div>
                </div>                                    
              </form>;

    if(this.someData == "normal"){
      text_b = "";           
    }
    if( this.someData != "success" && this.someData == "failed" && this.someData != null){
      text_b = <strong>This account is already registered.</strong> ;
    }
    if(this.someData == "success")
    {
       var text_b = <strong>Thank you for subscribing.</strong> ;
        var form_b = "";
    }
    if(this.someData == null){
      text_b = <strong>Please insert an email address.</strong> ; 
    }
    return(
      <div>
        <section className="header-video">
          <div id="hero_video">
            <div id="sub_content">
              <h1><img src={logo} alt="" height="200" width="130" /></h1>
              <p>
                  A food-ordering bot for Facebook Messenger, from FoodBots
              </p>                             
                  {text_b}
                  {form_b}                 
            </div>
          </div>
          <img src={video_fix} alt="" className="header-video--media" data-video-src={`${process.env.PUBLIC_URL}/video/intro`} data-teaser-source={`${process.env.PUBLIC_URL}/video/intro`} data-provider="vimeo"/>                   
        </section>
        <div className="container margin_60_35">
          <Row>
            <Col md={4} style={{textAlign:"justify"}}>
              <h2 className="nomargin_top"><b>Do you need a personal Waiter?</b></h2>
              <p>
                 Are you tired of having a different App for each activity? 
                Do you want your phone and life to be less cluttered? Would you want to multi-task while FaceBooking? 
                Are you in a hurry and want your food to be ready in time? Are you tired of managing an order when in groups?
                Kumba, your personal waiter, is here for you.
              </p>
              <h2><b>Look no more</b></h2>
              <p>
                 Kumba's character combines the access of an online eatery system with the comfort of a Facebook Messenger. 
                  Kumba will let you know the best restaurants in your area, help you view and choose your favorite items, 
                  reserve tables, pay with your card and also give suggestions tailored for you.
             </p>
             <p>
                 Ordering as a Group cannot be easier either. Tell Kumba about which all Facebook friends are in the group and he will share the order with them. 
                 Your friends can then view and add items to the order. Kumba will also help you to pay for yourself or for any number of your friends.  
            </p>
              <p>
                 If you are in a hurry, Kumba gives you the unique opportunity to reserve a table and select the items beforehand. 
                You do not have to wait after reaching the table. Arrive and Devour.
            </p>
              <h2><b>Just use Facebook Messenger</b></h2>
              <p>
                 You can meet Kumba through your Facebook messenger.
                No skipping chats, no missing friend's stories and no extra effort taken. 
                All you need to do is Like Kumba on Facebook and start messaging him to get him at your service.
                 No more pain of downloading, installing, opening and using another App. 
                 Free your phone's memory and make ordering a pleasant journey.
            </p>
            <h2><b><a href="https://www.facebook.com/meetkumba" style={{color:"cornflowerblue"}}>Click here to meet Kumba</a></b></h2>
            </Col>
            <div className="col-md-7 col-md-offset-1 text-right hidden-sm hidden-xs">
              <img src={devices} alt="" className="img-responsive"/>
            </div>
            </Row>
            <Row>
            <hr className="more_margin"/>
            <div className="main_title">
              <h2 className="nomargin_top">Kumba's Unique Features</h2>
            </div>
            <div className="row">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="feature">
                  <i className="icon_mobile"></i>
                  <h4 style={{fontSize:25}}><b>Already using App</b></h4>
                  <p style={{textAlign:"justify"}}>
                     Ordering through FaceBook Messenger means you don't need to install another app. Just start chatting with Kumba to get food.
                     </p>
                </div>
              </div>

              <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="feature">
                  <i className="icon_chat"></i>
                  <h4 style={{fontSize:25}}><b>Continue Chatting</b></h4>
                  <p style={{textAlign:"justify"}}>
                     Kumba is just another chat window in your messenger. No need to stop chatting with your friends or browsing their walls.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="feature">
                  <i className="icon_mug_alt"></i>
                  <h4 style={{fontSize:25}}><b>Food on Arrival</b></h4>
                  <p style={{textAlign:"justify"}}>
                     Kumba can reserve a table and order the food for you. Everything will be ready when you arrive.
                     </p>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
                <div className="feature">
                  <i className="icon_cart_alt"></i>
                  <h4 style={{fontSize:25}}><b>Group Ordering</b></h4>
                  <p style={{textAlign:"justify"}}>
                     If you are ordering with a group, Kumba can share the order so that others can add and pay items</p>
                </div>
              </div>
            </div>    
          </Row>
          <div className="container-fluid hidden-sm hidden-xs">
            <div className="row">
              <div className="col-md-6 nopadding features-intro-img">
                <div className="features-bg">
                  <div className="features-img">
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 nopadding">
                <div className="features-content">
                  <h3>"What is FoodBots?"</h3>
                  <p style={{textAlign:"justify"}}>
                    FoodBots' aim is to create bots that act as butlers for our customers. These bots are customized to your everyday needs and would do functions ranging from food-ordering to ticket-reservations.
                    </p>
                  <p style={{textAlign:"justify"}}>
                   Kumba is the first waiter that comes out of Foodbots' factory. He will serve you as a personal robot that orders food from your Facebook Messenger.
                   </p>
                </div>
              </div>
            </div>
          </div>                  
        </div>
      </div>
      );
  }
}