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

export default class page_footercoming extends Component{
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
                      <h3><b>About</b></h3>
                      <ul>
                          <li style={{textAlign:"center"}}><a href="https://www.facebook.com/meetkumba">Kumba on Facebook</a></li>
                          <li style={{textAlign:"center"}}><a href="#0">Terms and conditions</a></li>
                      </ul>
                  </Col>          
                  <Col md={3} sm={3} id="newsletter">
                      <h3>Newsletter</h3>
                      <p>
                          Subscribe with us to get updates on Kumba's official release and more from Foodbots.
                      </p>
                      <div id="message-newsletter_2">
                      </div>              
                  </Col>          
                        
                </Row> 
              </Grid>
    </footer>
  );
  }
};
    