import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Link
} from 'react-router-dom';
import devices from './img/devices.jpg';
import cards from './img/cards.png';

export default class page_footer1 extends Component{
  render(){
   return(
     <footer>
              <Grid>
                 <Row>          
                  <Col md={4} sm={3}>
                      <h3>Secure payments with</h3>
                      <p>
                          <Image src={cards} alt="" className="img-responsive"/>
                      </p>
                  </Col>          
                  <Col md={3} sm={3}>
                      <h3>About</h3>
                      <ul>
                          <li><a href="about.html">About us</a></li>
                          <li><a href="faq.html">Faq</a></li>
                          <li><a href="contacts.html">Contacts</a></li>
                          <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                          <li><a href="#0" data-toggle="modal" data-target="#register">Register</a></li>
                          <li><a href="#0">Terms and conditions</a></li>
                      </ul>
                  </Col>          
                  <Col md={3} sm={3} id="newsletter">
                      <h3>Newsletter</h3>
                      <p>
                          Join our newsletter to keep yourself informed about offers and news.
                      </p>
                      <div id="message-newsletter_2">
                      </div>              
                  </Col>          
                  <Col md={2} sm={3}>
                      <h3>Settings</h3>
                      <div className="styled-select">
                          <select className="form-control" name="lang" id="lang">
                              <option value="English" >English</option>
                              <option value="French">French</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Russian">Russian</option>
                          </select>
                      </div>
                      <div className="styled-select">
                          <select className="form-control" name="currency" id="currency">
                              <option value="USD" >USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                              <option value="RUB">RUB</option>
                          </select>
                      </div>
                  </Col>              
                </Row> 
              </Grid>
    </footer>
  );
  }
};
    