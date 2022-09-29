import React from 'react';
import ServiceCard from './serviceCard/ServiceCard';

const Services1=()=> {
  return (
    <div id="rs-services" className="rs-services style4 pt-95 pb-100 md-pt-65 md-pb-70">
      <div className="container">
        <div className="sec-title text-center mb-60 md-mb-40">
          <span className="sub-text small">Managed Services</span>
          <h2 className="title title3">More than 30+ years we provide<br /> business consulting</h2>
        </div>
        <div className="row">
          <ServiceCard
          img={require("../../../assets/images/services/style5/icons/1.png")}
          title={'Financial planing'}
          para={'We always provide people a complete solution upon focused of any business'}
          />
          <ServiceCard
          img={require("../../../assets/images/services/style5/icons/2.png")}
          title={'Training services'}
          para={'We always provide people a complete solution upon focused of any business'}
          />
          <ServiceCard
          img={require("../../../assets/images/services/style5/icons/3.png")}
          title={'Marketing services'}
          para={'We always provide people a complete solution upon focused of any business'}
          />
          <ServiceCard
          img={require("../../../assets/images/services/style5/icons/4.png")}
          title={'Taxation services'}
          para={'We always provide people a complete solution upon focused of any business'}
          />
        </div>
      </div>
    </div>
  );
}

export default Services1;