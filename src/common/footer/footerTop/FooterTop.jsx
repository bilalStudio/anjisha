import React from 'react'

const FooterTop = () => {
  return (
    <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10">
          <div className="footer-logo mb-40">
            <a href="index.html"><img src="assets/images/logo-lite.png" alt=""/></a>
          </div>
          <div className="textwidget white-color pb-40">
            <p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized by the, so blinded by desire, that they cannot foresee.</p>
          </div>
          <ul className="footer-social md-mb-30">
            <li>
              <a href="#" target="_blank"><span><i className="fa fa-facebook"></i></span></a>
            </li>
            <li>
              <a href="# " target="_blank"><span><i className="fa fa-twitter"></i></span></a>
            </li>

            <li>
              <a href="# " target="_blank"><span><i className="fa fa-pinterest-p"></i></span></a>
            </li>
            <li>
              <a href="# " target="_blank"><span><i className="fa fa-instagram"></i></span></a>
            </li>

          </ul>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10 pl-55 md-pl-15">
          <h3 className="footer-title">Our Services</h3>
          <ul className="site-map">
            <li><a href="business-planning.html">Business planning</a></li>
            <li><a href="tax-strategy.html">Tax strategy</a></li>
            <li><a href="financial-advices.html">Financial advices</a></li>
            <li><a href="insurance-strategy.html">Insurance strategy</a></li>
            <li><a href="manage-investment.html">Manage investment</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="address-widget">
            <li>
              <i className="flaticon-location"></i>
              <div className="desc">Ta-134/A, Gulshan Badda<br/>
                a Rd, Dhaka
              </div>
            </li>
            <li>
              <i className="flaticon-call"></i>
              <div className="desc">
                <a href="tel:(+880)15569569365">(+880)155 69569 365</a>
              </div>
            </li>
            <li>
              <i className="flaticon-email"></i>
              <div className="desc">
                <a href="mailto:support@rstheme.com">support@rstheme.com</a>
              </div>
            </li>
            <li>
              <i className="flaticon-clock-1"></i>
              <div className="desc">
                Office Hours: 8AM - 11PM
              </div>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12">
          <h3 className="footer-title">Newsletter</h3>
          <p className="widget-desc white-color">Stay up to update with our latest news and products.</p>
          <p>
            <input type="email" name="EMAIL" placeholder="Your email address" required=""/>
              <input type="submit" value="Subscribe Now"/>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FooterTop