import React from 'react'

const ResponsiveHeader = () => {
  return (
    <>
     <nav className="right_menu_togle hidden-md">
          <div className="close-btn">
            <a id="nav-close" className="nav-close">
              <div className="line">
                <span className="line1"></span>
                <span className="line2"></span>
              </div>
            </a>
          </div>
          <div className="canvas-logo">
            <a href="index.html"><img src={require("../../../assets/images/logo.png")}  alt="logo"/></a>
          </div>
          <div className="offcanvas-text">
            <p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized, that they data forest see best business consulting wordpress theme 2021.</p>
          </div>
          <div className="media-img">
            <img src={require("../../../assets/images/off2.jpg")}  alt="Images"/>
          </div>
          <div className="canvas-contact">
            <div className="address-area">
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-location"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Address</h4>
                  <em>05 kandi BR. New York</em>
                </div>
              </div>
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Email</h4>
                  <em><a href="mailto:support@rstheme.com">support@rstheme.com</a></em>
                </div>
              </div>
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Phone</h4>
                  <em>+019988772</em>
                </div>
              </div>
            </div>
            <ul className="social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
            </ul>
          </div>
        </nav>

        <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
          <div className="close-btn">
            <a id="nav-close2" className="nav-close">
              <div className="line">
                <span className="line1"></span>
                <span className="line2"></span>
              </div>
            </a>
          </div>
          <ul className="nav-menu">
            <li className="menu-item-has-children current-menu-item">
              <a href="index.html">Home</a>
              <ul className="sub-menu">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Multipages</a>
                  <ul className="sub-menu">
                    <li className="active"><a href="index.html">Home One</a></li>
                    <li><a href="index2.html">Home Two</a></li>
                    <li><a href="index3.html">Home Three</a></li>
                    <li><a href="index4.html">Home Four</a></li>
                    <li><a href="index5.html">Home Five</a></li>
                    <li><a href="index6.html">Home Six</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Onepages</a>
                  <ul className="sub-menu">
                    <li><a href="onepage1.html">Onepage One</a></li>
                    <li><a href="onepage2.html">Onepage Two</a></li>
                    <li><a href="onepage3.html">Onepage Three</a></li>
                    <li><a href="onepage4.html">Onepage Four</a></li>
                    <li><a href="onepage5.html">Onepage Five</a></li>
                    <li><a href="onepage6.html">Onepage Six</a></li>
                  </ul>
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
          <div className="canvas-contact">
            <div className="address-area">
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-location"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Address</h4>
                  <em>05 kandi BR. New York</em>
                </div>
              </div>
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Email</h4>
                  <em><a href="mailto:support@rstheme.com">support@rstheme.com</a></em>
                </div>
              </div>
              <div className="address-list">
                <div className="info-icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="info-content">
                  <h4 className="title">Phone</h4>
                  <em>+019988772</em>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default ResponsiveHeader