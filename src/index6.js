import React ,{Component}from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import $ from 'jquery';
import Content from './content';
import sub_header_home from'./img/sub_header_home.jpg';

import Page_footer from './footer';

export default class index6 extends Component {
     componentDidMount() {        
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
    
  componentWillMount(){
      document.body.style.backgroundColor = "#FFFFFF",
      document.body.classList.toggle('darkClass', this.props.isDark);
  }
  render(){
      return (  
        <Grid>
          <section className="parallax-window" id="home" data-parallax="scroll" data-image-src={sub_header_home} data-natural-width="1400" data-natural-height="550">
            <div id="subheader">
                <div id="sub_content">
                    <h1>Order Takeaway or Delivery Food</h1>
                    <p>
                        Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                    </p>
                    <form method="post" action="list_page.html">
                        <div id="custom-search-input">
                            <div className="input-group ">
                                <input type="text" className=" search-query" placeholder="Your Address or postal code"/>
                                <span className="input-group-btn">
                                <input type="submit" className="btn_search" value="submit"/>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="count" className="hidden-xs">
                <ul>
                    <li><span className="number">2650</span> Restaurant</li>
                    <li><span className="number">5350</span> People Served</li>
                    <li><span className="number">12350</span> Registered Users</li>
                </ul>
            </div>
            </section>
          <Content/>
          <Page_footer/>
        </Grid>
      );
    }
};      