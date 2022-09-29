import React from 'react'

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
              <ul className="copy-right-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="faqs.html">Faqs</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="copyright text-lg-start text-center ">
                <p>© 2021 Bizup - Consulting Company Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FooterBottom