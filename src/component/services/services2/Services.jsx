import React from 'react';
import ServiceCard from './serviceCard/ServiceCard';
const Services=()=> {
  return (
    <div className="rs-services style5 bg14 pt-95 pb-100 md-pt-65 md-pb-70">
      <div className="container">
        <div className="sec-title text-center mb-50">
          <span className="sub-text small">Valued Services</span>
          <h2 className="title title3">Managed IT, Software, Voice & Data<br/> Services for Your Organization.</h2>
        </div>
        <div className="row">
          <ServiceCard
          class={'col-lg-4 col-md-6 mb-25'}
          img={'assets/images/services/style5/1.png'}
          title1={'Business Planning'}
          title2={'Business Planning'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
          <ServiceCard
          class={'col-lg-4 col-md-6 mb-25'}
          img={'assets/images/services/style5/2.png'}
          title1={'Tax Strategy'}
          title2={'Tax Strategy'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
          <ServiceCard
          class={'col-lg-4 col-md-6 mb-25'}
          img={'assets/images/services/style5/3.png'}
          title1={'Insurance Strategy'}
          title2={'Insurance Strategy'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
          <ServiceCard
          class={'col-lg-4 col-md-6 mb-25'}
          img={'assets/images/services/style5/4.png'}
          title1={'Manage Investment'}
          title2={'Manage Investment'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
          <ServiceCard
          class={'col-lg-4 col-md-6 sm-mb-25'}
          img={'assets/images/services/style5/5.png'}
          title1={'Start Ups'}
          title2={'Start Ups'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
          <ServiceCard
          class={'col-lg-4 col-md-6'}
          img={'assets/images/services/style5/6.png'}
          title1={'Financial Advices'}
          title2={'Financial Advices'}
          paragraph1={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          paragraph2={' We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.'}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;