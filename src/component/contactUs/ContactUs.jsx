import React from 'react';
const ContactUs=(props)=> {
  return (

    <div className="rs-contact home3-contact-style bg18 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container">
        <div className="row margin-0">
          <div className="col-lg-8 padding-0 md-mb-50">
            <div className="contact-wrap">
              <div className="sec-title mb-55 md-mb-35">
                <span className="sub-text small">Contact Us</span>
                <h2 className="title title3">Get In Touch</h2>
              </div>
              <div id="form-messages"></div>
              <form id="contact-form" method="post" action="https://reactheme.com/products/html/bizup/mailer.php">
                <fieldset>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input className="from-control" type="text" id="name" name="name" placeholder="Name" required=""/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input className="from-control" type="text" id="email" name="email" placeholder="E-Mail" required=""/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required=""/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input className="from-control" type="text" id="Website" name="subject" placeholder="Your Website" required=""/>
                    </div>

                    <div className="col-lg-12 mb-35">
                      <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required=""/>
                    </div>
                  </div>
                  <div className="btn-part">
                    <div className="form-group mb-0">
                      <input className="readon submit blue-small" type="submit" value="Submit Now"/>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="col-lg-4 padding-0">
            <div className="icon-box-wraper">
              <div className="sec-title mb-40">
                <h2 className="title title3 small">Contact Info</h2>
              </div>
              <div className="icon-box-item mb-35">
                <div className="icon-box">
                  <i className="flaticon-location"></i>
                </div>
                <div className="icon-content">
                  <h2 className="title"><a href="#">USA Office</a></h2>
                  <p className="services-txt">127 Double Street, Dublin,<br/>
                    United Kingdom.</p>
                </div>
              </div>
              <div className="icon-box-item mb-35">
                <div className="icon-box">
                  <i className="flaticon-call"></i>
                </div>
                <div className="icon-content">
                  <h2 className="title"><a href="#">Telephone</a></h2>
                  <a href="tel:(+088)589-8745">(+088) 589-8745</a><br/>
                  <a href="tel:(+088)222-9999">(+088) 222-9999</a>
                </div>
              </div>
              <div className="icon-box-item mb-35">
                <div className="icon-box">
                  <i className="flaticon-email"></i>
                </div>
                <div className="icon-content">
                  <h2 className="title"><a href="#">Mail Us</a></h2>
                  <a href="mailto:Esupport@rstheme.com">E:support@rstheme.com</a><br/>
                  <a href="mailto:info@codesless.com">E:info@codesless.com</a>
                </div>
              </div>
              <div className="icon-box-item">
                <div className="icon-box">
                  <i className="flaticon-time-call"></i>
                </div>
                <div className="icon-content">
                  <h2 className="title"><a href="#">Opening Hours</a></h2>
                  <p className="services-txt">Mon-Fri: 10:00-18:00<br/>
                    Sat-Sun: 10:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ContactUs;