import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import cards from './img/cards.png';

export default function Page_footer(props) {
  return (  
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
                  Join our newsletter to keep be informed about offers and news.
              </p>
              <div id="message-newsletter_2">
              </div>
              <form method="post" action="assets/newsletter.php" name="newsletter_2" id="newsletter_2">
                
                  <div className="form-group">
                      <input name="email_newsletter_2" id="email_newsletter_2" type="email"  placeholder="Your mail" className="form-control"/>
                  </div>
                  <div className="subscribe-btn-container">
                    <input type="submit" value="Subscribe" className="btn_1 " id="submit-newsletter_2"/>
                  </div>
                
              </form>
              
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
      <Row>
          <Col md={12} >
              <div id="social_footer">
                  <ul>
                      <li><a href="#0"><i className="icon-facebook"></i></a></li>
                      <li><a href="#0"><i className="icon-twitter"></i></a></li>
                      <li><a href="#0"><i className="icon-google"></i></a></li>
                      <li><a href="#0"><i className="icon-instagram"></i></a></li>
                      <li><a href="#0"><i className="icon-pinterest"></i></a></li>
                      <li><a href="#0"><i className="icon-vimeo"></i></a></li>
                      <li><a href="#0"><i className="icon-youtube-play"></i></a></li>
                  </ul>
                  <p>
                      © Quick Food 2015
                  </p>
              </div>
          </Col>
      </Row>
  </Grid>
  
  <div className="layer"></div>

  <div className="modal fade" id="login_2" tabIndex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content modal-popup">
        <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
        <form action="#" className="popup-form" id="myLogin">
          <div className="login_icon"><i className="icon_lock_alt"></i></div>
          <input type="text" className="form-control form-white" placeholder="Username"/>
          <input type="text" className="form-control form-white" placeholder="Password"/>
          <div className="text-left">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  </div> 

  <div className="modal fade" id="alert">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Save changes</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>  
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>   
  <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content modal-popup">
        <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
        <form action="#" className="popup-form" id="myRegister">
                  <div className="login_icon"><i className="icon_lock_alt"></i></div>
          <input type="text" className="form-control form-white" placeholder="Name"/>
          <input type="text" className="form-control form-white" placeholder="Last Name"/>
                    <input type="email" className="form-control form-white" placeholder="Email"/>
                    <input type="text" className="form-control form-white" placeholder="Password"  id="password1"/>
                    <input type="text" className="form-control form-white" placeholder="Confirm password"  id="password2"/>
                    <div id="pass-info" className="clearfix"></div>
          <div className="checkbox-holder text-left">
            <div className="checkbox">
              <input type="checkbox" value="accept_2" id="check_2" name="check_2" />
              <label htmlFor="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
            </div>
          </div>
          <button type="submit" className="btn btn-submit">Register</button>
        </form>
      </div>
    </div>
  </div>
  <div className="search-overlay-menu">
    <span className="search-overlay-close"><i className="icon_close"></i></span>
    <form role="search" id="searchform" method="get">
      <input value="" name="q" type="search" placeholder="Search..." />
      <button type="submit"><i className="icon-search-6"></i>
      </button>
    </form>
  </div>
</footer>
    );
};