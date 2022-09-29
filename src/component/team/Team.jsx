import React from 'react';
import Carousel from '../carousal/teamCarousel/TeamCarousel';
import TeamCard from './teamCard/TeamCard';
const Team=()=> {
  return (

    <div className="rs-team style4 bg17 pt-95 pb-100 md-pt-65 md-pb-70">
      <div className="container">
        <div className="sec-title text-center mb-50 md-mb-35">
          <span className="sub-text small">Expert People</span>
          <h2 className="title title3 pb-20">Our Team Members</h2>
          <p className="margin-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
            data tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <Carousel/>
        {/* <div className="rs-carousel owl-carousel" data-loop="true" data-items="4" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="true" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="4" data-md-device-nav="false" data-md-device-dots="true" data-lg-device="3">
          
        <div class="team-item-wrap">
                            <div class="team-wrap">
                                <div class="image-inner">
                                    <a href="team-single.html"><img src="assets/images/team/1.jpg" alt=""></a>
                                </div>
                            </div>
                            <div class="team-content text-center">
                                <h4 class="person-name"><a href="team-single.html">Angelina Jolie</a></h4>
                                <span class="designation">Business Advisor</span>
                                <ul class="team-social">
                                    <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>

          <TeamCard
          img={'assets/images/team/1.jpg'}
          name={'Angelina Jolie'}
          title={'Business Advisor'}
          />
            <TeamCard
          img={'assets/images/team/2.jpg'}
          name={'Morgan Freeman'}
          title={'Senior Consultant'}
          />
          <TeamCard
          img={'assets/images/team/3.jpg'}
          name={'Natalie Portman'}
          title={'Web Developer'}
          />
          <TeamCard
          img={'assets/images/team/4.jpg'}
          name={'Christian Bale'}
          title={'Digital Marketer'}
          />
          <TeamCard
          img={'assets/images/team/5.jpg'}
          name={'Matt Damon'}
          title={'Finance Consultant'}
          />
           <TeamCard
          img={'assets/images/team/6.jpg'}
          name={'Mila Kunis'}
          title={'CEO & Founder'}
          />
        </div> */}
      </div>
    </div>

  );
}

export default Team;