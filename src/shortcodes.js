import React,{ Component } from 'react';

import sub_header_cart from './img/sub_header_cart.jpg';
import image_1 from "./img/img_1.jpg";
import image_2 from "./img/img_2.jpg";
import image_3 from "./img/img_3.jpg";
import image_4 from "./img/img_4.jpg";

import Page_footer from './footer';

export default class shortcodes extends Component {
  render(){
    return (
      <div>
        <section className="parallax-window" id="short" data-parallax="scroll" data-image-src={sub_header_cart} data-natural-width="1400" data-natural-height="350">
          <div id="subheader">
              <div id="sub_content">
               <h1>Shortcodes</h1>
               <p>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
              </div>
          </div>
        </section>
        <div id="position">
            <div className="container">
                <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Category</a></li>
                    <li>Page active</li>
                </ul>
                <a href="#0" className="search-overlay-menu-btn"><i className="icon-search-6"></i> Search</a>
            </div>
        </div>
        <div classname="container margin_60_35">
          <div classname="col-md-8 col-md-offset-2">
              <div classname="box_style_2 nomargin">
                 <div classname="row">
                      <div classname="col-md-12">                  
                    
                      <h1 classname="nomargin_top">h1. Heading 1</h1>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <h2>h2. Heading 2</h2>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <h3>h3. Heading 3</h3>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <h4>h4. Heading 4</h4>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <h5>h5. Heading 5</h5>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <h6>h6. Heading 6</h6>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      <br/>
                      
                      </div>
                  </div>
                      
                      <hr/>
                      
                  <div classname="row">
                      <div classname="col-md-12">
                      
                      
                      <h3>Blockquotes</h3>
                            <p>To include a blockquote, wrap <code>&lt;blockquote classname="styled"&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes we recommend a <code>&lt;p&gt;</code>.
                        Include an optional <code>&lt;small&gt;</code> element to cite your source and you'll get an em dash <code>&amp;mdash;</code> before it for styling purposes.</p>
                              <blockquote classname="styled">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <small>Someone famous in <cite title="">Body of work</cite></small>
                              </blockquote>
                      <br/>
                      
                       <p>To float your blockquote to the right, add <code>classname="styled pull-right"</code>:</p>
                       <blockquote classname="styled pull-right">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <small>Someone famous in <cite title="">Body of work</cite></small>
                      </blockquote>
                      
                      </div>
                  </div>
                      <hr/>
                                     
                  <div classname="row">
                      <div classname="col-md-12">
                      <h3>Html Tabs</h3>
                
                        
                        <ul classname="nav nav-tabs">
                            <li classname="active"><a href="#home" data-toggle="tab">Home</a></li>
                            <li><a href="#profile" data-toggle="tab">Profile</a></li>
                            <li><a href="#messages" data-toggle="tab">Messages</a></li>
                            <li><a href="#settings" data-toggle="tab">Settings</a></li>
                        </ul>
                        
                        <div classname="tab-content">
                            <div classname="tab-pane" id="home">
                                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis.. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapiPhasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi
                            </div>
                            <div classname="tab-pane" id="profile">
                                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi
                            </div>
                            <div classname="tab-pane" id="messages">
                                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi
                            </div>
                            <div classname="tab-pane active" id="settings">
                                 Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi
                            </div>
                        </div>
                              
                      </div>
                  </div>
                      
                      <hr/>
                      
                  <div classname="row">
                      <div classname="col-md-12">
                      <h3 >Tables</h3>
                      <p>Tables are automatically styled with only a few borders to ensure readability and maintain structure. With 2.0, the <code>classname="table"</code> class is required.</p>
                      <table classname="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                          
                        <p>Get a little fancy with your tables by adding zebra-striping&mdash;just add the <code>classname="table table-striped"</code> class.
                        <br/><strong>Note:</strong> Striped tables use the <code>:nth-child</code> CSS selector and is not available in IE7-IE8.</p>
                        <table classname="table table-striped">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                          
                          <p>Add borders around the entire table and rounded corners for aesthetic purposes <code>classname="table table-bordered"</code>.</p>
                            <table classname="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td rowspan="2">1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@TwBootstrap</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <p>Make your tables more compact by adding the <code>classname="table table-condensed"</code> class to cut table cell padding in half.</p>
                              <table classname="table table-condensed">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <p>Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code> to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>
                              <div classname=" table-responsive">
                              <table classname="table">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  </div>
                              
                              <p>Feel free to combine any of the table classes to achieve different looks by utilizing any of the available classes .</p>
                              
                              <table classname="table table-striped table-bordered table-condensed">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                    </tbody>
                                  </table>

                          </div>
                        </div>
                        <hr/>
                        <h3>Tooltips</h3>
                        <div classname="row">
                        <div classname="col-md-6 col-sm-6 col-xs-6">
                              <ul>
                                  <li><a href="#" classname="tooltip-1" data-placement="top" title="Default tooltip">Tooltip on top</a></li>
                                  <li><a href="#" classname="tooltip-1" data-placement="right" title="Default tooltip">Tooltip on right</a></li>
                                  <li><a href="#" classname="tooltip-1" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</a></li>
                                  <li><a href="#" classname="tooltip-1" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</a></li>
                              </ul>
                        </div>
                        <div classname="col-md-6 col-sm-6 col-xs-6">
                          <ul>
                            <li>
                            <div classname="tooltip_styled tooltip-effect-4">
                               <span classname="tooltip-item">Tooltip</span>
                                 <div classname="tooltip-content">Anim pariatur cliche reprehenderit</div>
                            </div>
                            </li>
                              <li>
                            <div classname="tooltip_styled tooltip-effect-4">
                               <span classname="tooltip-item">Another tooltip</span>
                                 <div classname="tooltip-content">Food truck quinoa</div>
                            </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <hr/>
                      
                      <div classname="row">
                      <div classname="col-md-12">
                      <h3>Collapse</h3>
                     <div classname="panel-group" id="accordion">
                      <div classname="panel panel-default">
                        <div classname="panel-heading">
                          <h4 classname="panel-title">
                            <a classname="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Anim reprehenderit?<i classname="indicator icon_minus_alt2 pull-right"></i></a>
                          </h4>
                        </div>
                        <div id="collapseOne" classname="panel-collapse collapse in">
                          <div classname="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div classname="panel panel-default">
                        <div classname="panel-heading">
                          <h4 classname="panel-title">
                            <a classname="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Parsnip lotus root celery?<i classname="indicator icon_plus_alt2 pull-right"></i></a>
                          </h4>
                        </div>
                        <div id="collapseTwo" classname="panel-collapse collapse">
                          <div classname="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div classname="panel panel-default">
                        <div classname="panel-heading">
                          <h4 classname="panel-title">
                            <a classname="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Beet greens peanut salad?<i classname="indicator icon_plus_alt2 pull-right"></i></a>
                          </h4>
                        </div>
                        <div id="collapseThree" classname="panel-collapse collapse">
                          <div classname="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                          </div>
                        </div>
                      </div>
                    </div>
                      
                    </div>
                   </div>
                   
                    <h3>Mangnifc popup images</h3>
                    <p>Simply add the class magnific-gallery to the parent container like the example below.</p>
                   <div classname="row magnific-gallery">
                       <div classname="col-md-6">
                          <a href="img/img_1.jpg" title="Photo title"><Image src={image_1} alt="" classname="img-responsive"/></a>
                       </div>
                       <div classname="col-md-6">
                          <a href="img/img_2.jpg" title="Photo title"><Image src={image_2} alt="" classname="img-responsive"/></a>
                       </div>
                   </div>
                   
                   <h3>Mangnifc popup video (Youtube/Vimeo)</h3>
                    <p>Simply add the class magnific to the parent container like the example below plus the class video in the href .</p>
                   <div classname="row magnific">
                       <div classname="col-md-6">
                          <a href="https://vimeo.com/15306847" classname="video_pop" title="Video title"><Image src={image_3} alt="" classname="img-responsive"/></a>
                       </div>
                       <div classname="col-md-6">
                          <a href="https://www.youtube.com/watch?v=vasS8dMKzjM"  classname="video_pop" title="Video title"><Image src={image_4} alt="" classname="img-responsive"/></a>
                       </div>
                   </div>
                 </div>
              </div>
          </div>
          <Page_footer/>
      </div>
        );
  }
};