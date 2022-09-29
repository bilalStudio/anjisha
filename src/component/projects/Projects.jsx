import React from 'react';
import Carousel from '../carousal/carousel1/Carousel';

const Projects=() =>{
  return (
    <div className="rs-project style3 home3-project-style gray-bg5 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container custom">
        <div className="row y-middle">
          <div className="col-lg-6">
            <div className="sec-title mb-60 md-mb-35">
              <span className="sub-text small">Projects</span>
              <h2 className="title title3">Recent Portfolios</h2>
            </div>
          </div>
          <div className="col-lg-6 text-right md-left">
            <div className="btn-part mb-50">
              <a className="readon consultant blue-view" href="project-single.html">View Projects</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pr-30 pl-30">
      <Carousel/>   
      </div>

    </div>
  );
}

export default Projects;