import React from 'react'

const BottomHeader = () => {
  return (
    <div className="menu-area menu-sticky">
          <div className="container custom box-layout">
            <div className="row-table">
              <div className="col-cell header-logo">
                <div className="logo-area">
                  <a href="index.html">
                    <img src={require("../../../assets/images/logo-dark.png")} alt="logo"/>
                  </a>
                </div>
              </div>
              <div className="col-cell menu-responsive">
                <div className="rs-menu-area">
                  <div className="main-menu">
                    <nav className="rs-menu hidden-md">
                      <ul className="nav-menu">
                        <li className="rs-mega-menu menu-item-has-children">
                          <a href="index.html">Home</a>
                          <ul className="mega-menu">
                            <li className="mega-menu-container">
                              <div className="mega-menu-inner">
                                <div className="single-megamenu">
                                  <ul className="sub-menu">
                                    <li className="menu-title">Home Multipage</li>
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index2.html">Home Two</a></li>
                                    <li className="active"><a href="index3.html">Home Three</a></li>
                                  </ul>
                                </div>
                                <div className="single-megamenu">
                                  <ul className="sub-menu">
                                    <li className="menu-title">Home Multipage</li>

                                    <li><a href="index4.html">Home Four</a></li>
                                    <li><a href="index5.html">Home Five</a></li>
                                    <li><a href="index6.html">Home Six</a></li>
                                  </ul>
                                </div>
                                <div className="single-megamenu">
                                  <ul className="sub-menu">
                                    <li className="menu-title">Home Onepages</li>
                                    <li><a href="onepage1.html">Onepage One</a></li>
                                    <li><a href="onepage2.html">Onepage Two</a></li>
                                    <li><a href="onepage3.html">Onepage Three</a></li>

                                  </ul>
                                </div>
                                <div className="single-megamenu">
                                  <ul className="sub-menu">
                                    <li className="menu-title">Home Onepages</li>

                                    <li><a href="onepage4.html">Onepage Four</a></li>
                                    <li><a href="onepage5.html">Onepage Five</a></li>
                                    <li><a href="onepage6.html">Onepage Six</a></li>
                                  </ul>
                                </div>

                              </div>
                            </li>
                          </ul>

                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li className="last-item menu-item-has-children">
                              <a href="#">Shop</a>
                              <ul className="sub-menu">
                                <li><a href="shop.html">Shop</a> </li>
                                <li><a href="shop-single.html">Shop Single</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                              </ul>
                            </li>
                            <li><a href="pricing-table.html">Pricing Table</a></li>
                            <li className="last-item menu-item-has-children">
                              <a href="#">Team</a>
                              <ul className="sub-menu">
                                <li><a href="team-style1.html">Team Style 1</a> </li>
                                <li><a href="team-style2.html">Team Style 2</a></li>
                                <li><a href="team-style3.html">Team Style 3</a></li>
                                <li><a href="team-single.html">Team Single</a></li>
                              </ul>
                            </li>
                            <li><a href="appointment.html">Appointment</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="faqs.html">Faqs</a></li>
                            <li><a href="partners.html">Partners</a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Portfolios</a>
                          <ul className="sub-menu">
                            <li><a href="portfolio.html">Portfolio One</a></li>
                            <li><a href="portfolio2.html">Portfolio Two</a></li>
                            <li><a href="portfolio3.html">Portfolio Three</a></li>
                            <li><a href="portfolio4.html">Portfolio Four</a></li>
                            <li><a href="portfolio5.html">Portfolio Five</a></li>
                            <li><a href="portfolio6.html">Portfolio Six</a></li>
                            <li><a href="portfolio7.html">Portfolio Seven</a></li>
                            <li><a href="portfolios-filter.html">Portfolios Filter</a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Services</a>
                          <ul className="sub-menu">
                            <li><a href="services-style1.html">Services Style 1</a></li>
                            <li><a href="services-style2.html">Services Style 2</a></li>
                            <li><a href="business-planning.html">Business Planning</a></li>
                            <li><a href="tax-strategy.html">Tax strategy</a></li>
                            <li><a href="financial-advices.html">Financial Advices</a></li>
                            <li><a href="insurance-strategy.html">Insurance Strategy</a></li>
                            <li><a href="start-ups.html">Start Ups</a></li>
                            <li><a href="manage-investment.html">Manage Investment</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Contact</a>
                          <ul className="sub-menu">
                            <li><a href="contact.html">Contact 1</a></li>
                            <li><a href="contact2.html">Contact 2</a></li>
                            <li><a href="contact3.html">Contact 3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-cell rightbar-menu">
                <div className="expand-btn-inner">
                  <ul>
                    <li className="search-parent">
                      <a className="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">
                        <i className="flaticon-search"></i>
                      </a>
                    </li>
                    <li className="humburger">
                      <a id="nav-expander" className="nav-expander bar" href="#">
                        <div className="bar">
                          <span className="dot1"></span>
                          <span className="dot2"></span>
                          <span className="dot3"></span>
                          <span className="dot4"></span>
                          <span className="dot5"></span>
                          <span className="dot6"></span>
                          <span className="dot7"></span>
                          <span className="dot8"></span>
                          <span className="dot9"></span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="toolbar-sl-share">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-aedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default BottomHeader