import React from 'react';
const AboutUs = (props) => {
  return (
    <div className="rs-about style3 gray-bg5 pt-120 pb-120 md-pt-70 md-pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 md-mb-50">
            <div className="about-content">
              <div className="images-part">
                <img src="assets/images/about/home3/about-1.jpg" alt="Images" />
              </div>
              <div className="rs-animations">
                <div className="spinner dot">
                  <img className="scale" src="assets/images/about/home3/3.png" alt="Images" />
                </div>
                <div className="spinner ball">
                  <img className="dance2" src="assets/images/about/home3/2.png" alt="Images" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-30 md-pr-l5">
            <div className="sec-title mb-50">
              <span className="sub-text small">About Us</span>
              <h2 className="title title3 pb-25">We are crafting your unique business consulting ideas</h2>
              <p className="margin-0">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.</p>
            </div>
            <div id="accordion" className="accordion">
              <div className="card">
                <div className="card-header">
                  <a className="card-link" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">Responsive & Pixel Perfect Design</a>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                  <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data communication.</div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a className="collapsed card-link" href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">Elementor Page Builder Used</a>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                  <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data center and analytics.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;