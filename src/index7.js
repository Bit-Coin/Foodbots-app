import React from 'react';

import Content from './content';
import sub_header_home from'./img/sub_header_home.jpg';

export default function index6(props) {
  return (  
<div>
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
</div>
  );
};      