import React from 'react';
const WhyChooseUs=(props)=> {
  return (

    <>
    <div className="rs-choose bg15 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container custom">
        <div className="row y-middle">
          <div className="col-lg-6 md-mb-50">
            <div className="rs-videos choose-video home3-video-style">
              <div className="images-video">
                <img src="assets/images/video/choose-video.jpg" alt="images"/>
              </div>
              <div className="animate-border blue-color-style">
                <a className="popup-border" href="https://www.youtube.com/watch?v=FMvA5fyZ338">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-65 md-pl-15">
            <div className="sec-title mb-30">
              <span className="sub-text small">Why choose us</span>
              <h2 className="title title3 pb-25">A right choice that makes the difference to others</h2>
              <p className="margin-0">We donec pulvinar magna id leoersi pellentesque impered upon dignissim rhoncus euismod euismod eros vitae.</p>
            </div>
            <div className="rs-skillbar style1 home3-skillbar-style">
              <div className="cl-skill-bar">
                <span className="skillbar-title">Business Planning</span>
                <div className="skillbar" data-percent="90">
                  <p className="skillbar-bar"></p>
                  <span className="skill-bar-percent"></span>
                </div>
                <span className="skillbar-title">Financial Advices</span>
                <div className="skillbar" data-percent="85">
                  <p className="skillbar-bar"></p>
                  <span className="skill-bar-percent"></span>
                </div>
                <span className="skillbar-title">Investment Strategy</span>
                <div className="skillbar" data-percent="75">
                  <p className="skillbar-bar"></p>
                  <span className="skill-bar-percent"></span>
                </div>
                <span className="skillbar-title">Business Security</span>
                <div className="skillbar margin-no" data-percent="65">
                  <p className="skillbar-bar"></p>
                  <span className="skill-bar-percent"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default WhyChooseUs;