import React from 'react';
import {  Row, Col, Image } from 'react-bootstrap';


import submit_restaurant from './img/submit_restaurant.jpg';
import thumb_restaurant from './img/thumb_restaurant.jpg';
import thumb_restaurant_2 from './img/thumb_restaurant_2.jpg';
import thumb_restaurant_3 from './img/thumb_restaurant_3.jpg';
import bg_office from './img/bg_office.jpg';
import delivery from './img/delivery.jpg';

export default function Content(props) {
  return (  
<div>
  <div className="container margin_60">
    <div className="main_title margin_mobile">
          <h2 className="nomargin_top">How it works</h2>
          <p>
              Cum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
    </div>
    <Row>
        <Col md={3}>
            <div className="box_home" id="one">
                <span>1</span>
                <h3>Search by address</h3>
                <p>
                    Find all restaurants available in your zone.
                </p>
            </div>
        </Col>
        <Col md={3}>
            <div className="box_home" id="two">
                <span>2</span>
                <h3>Choose a restaurant</h3>
                <p>
                    We have more than 1000s of menus online.
                </p>
            </div>
        </Col>
        <Col md={3}>
            <div className="box_home" id="three">
                <span>3</span>
                <h3>Pay by card or cash</h3>
                <p>
                    It's quick, easy and totally secure.
                </p>
            </div>
        </Col>        
        <Col md={3}>
            <div className="box_home" id="four">
                <span>4</span>
                <h3>Delivery or takeaway</h3>
                <p>
                    You are lazy? Are you backing home?
                </p>
            </div>
        </Col>
    </Row>
        
    <div id="delivery_time" className="hidden-xs">
        <strong><span>2</span><span>5</span></strong>
        <h4>The minutes that usually takes to deliver!</h4>
    </div>

    <Row>
      <div className="col-md-4 col-md-offset-2">
          <a className="box_work" href="submit_restaurant.html">
            <Image src={bg_office} width="848" height="480" alt="" className="img-responsive"/>
            <h3>Submit your Restaurant<span>Start to earn customers</span></h3>
            <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.
            </p>
            <div className="btn_1">Read more</div>
          </a>
      </div>
      <Col md={4} >
        <a className="box_work" href="submit_driver.html">
          <Image src={delivery} width="848" height="480" alt="" className="img-responsive"/>
            <h3>We are looking for a Driver<span>Start to earn money</span></h3>
          <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
          <div className="btn_1">Read more</div>
          </a>
      </Col>
    </Row>

  </div> 
  <div className="white_bg">         
    <div className="container margin_60">
      <div className="main_title">
            <h2 className="nomargin_top">Choose from Most Popular</h2>
            <p>
                Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
      </div>
      <div className="row">
        <div className="col-md-6">
            <a href="detail_page.html" className="strip_list">
            <div className="ribbon_1">Popular</div>
                <div className="desc">
                    <div className="thumb_strip">
                        <Image src={thumb_restaurant} alt=""/>
                    </div>
                    <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Taco Mexican</h3>
                    <div className="type">
                        Mexican / American
                    </div>
                    <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                    </div>
                    <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                </div>
                </a>
                <a href="detail_page.html" className="strip_list">
                <div className="ribbon_1">Popular</div>
                <div className="desc">
                  <div className="thumb_strip">
                      <Image src={thumb_restaurant_2} alt=""/>
                  </div>
                  <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                  </div>
                  <h3>Naples Pizza</h3>
                  <div className="type">
                      Italian / Pizza
                  </div>
                  <div className="location">
                      135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                  </div>
                  <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                  </ul>
                </div>
                </a>
                <a href="detail_page.html" className="strip_list">
                <div className="ribbon_1">Popular</div>
                <div className="desc">
                    <div className="thumb_strip">
                        <Image src={thumb_restaurant_3} alt=""/>
                    </div>
                    <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Japan Food</h3>
                    <div className="type">
                        Sushi / Japanese
                    </div>
                    <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                    </div>
                    <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                </div>
                </a>
            </div>            
        <div className="col-md-6">
            <a href="detail_page.html" className="strip_list">
            <div className="ribbon_1">Popular</div>
                <div className="desc">
                    <div className="thumb_strip">
                        <Image src={thumb_restaurant} alt=""/>
                    </div>
                    <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Taco Mexican</h3>
                    <div className="type">
                        Mexican / American
                    </div>
                    <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                    </div>
                    <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                </div>
                </a>
                <a href="detail_page.html" className="strip_list">
                <div className="ribbon_1">Popular</div>
                <div className="desc">
                  <div className="thumb_strip">
                      <Image src={thumb_restaurant_2} alt=""/>
                  </div>
                  <div className="rating">
                      <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                  </div>
                  <h3>Naples Pizza</h3>
                  <div className="type">
                      Italian / Pizza
                  </div>
                  <div className="location">
                      135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                  </div>
                  <ul>
                      <li>Take away<i className="icon_check_alt2 ok"></i></li>
                      <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                  </ul>
                </div>
                </a>
                <a href="detail_page.html" className="strip_list">
                <div className="ribbon_1">Popular</div>
                <div className="desc">
                    <div className="thumb_strip">
                        <Image src={thumb_restaurant_3} alt=""/>
                    </div>
                    <div className="rating">
                        <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                    </div>
                    <h3>Japan Food</h3>
                    <div className="type">
                        Sushi / Japanese
                    </div>
                    <div className="location">
                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                    </div>
                    <ul>
                        <li>Take away<i className="icon_check_alt2 ok"></i></li>
                        <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                    </ul>
                </div>
                </a>
            </div>            
      </div>              
    </div>
  </div>
  <div className="high_light">
    <div className="container">
        <h3>Choose from over 2,000 Restaurants</h3>
        <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
        <a href="list_page.html">View all Restaurants</a>
    </div>
  </div>
  <section className="parallax-window" data-parallax="scroll" data-image-src={bg_office} data-natural-width="1200" data-natural-height="600">
    <div className="parallax-content">
        <div className="sub_content">
            <i className="icon_mug"></i>
            <h3>We also deliver to your office</h3>
            <p>
                Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
            </p>
        </div>
    </div>
  </section> 
  <div className="container margin_60">
      <div className="main_title margin_mobile">
            <h2 className="nomargin_top">Work with Us</h2>
            <p>
                Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
      </div>
      <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <a className="box_work" href="submit_restaurant.html">
              <Image src={submit_restaurant} width="848" height="480" alt="" className="img-responsive"/>
              <h3>Submit your Restaurant<span>Start to earn customers</span></h3>
              <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
              <div className="btn_1">Read more</div>
              </a>
          </div>
          <div className="col-md-4">
            <a className="box_work" href="submit_driver.html">
              <Image src={delivery} width="848" height="480" alt="" className="img-responsive"/>
              <h3>We are looking for a Driver<span>Start to earn money</span></h3>
              <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
              <div className="btn_1">Read more</div>
            </a>
          </div>
      </div>
    </div>
</div>
  );
};      