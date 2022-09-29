import React from 'react';
import Carousel from '../carousal/reviewCarousel/ReviewCarousel';
import ReviewCard from './reviewCard/ReviewCard';

const Reviews = () => {
  return (
    <div className="rs-testimonial style4 bg16 pt-95 pb-100 md-pt-65 md-pb-70">
      <div className="container">
        <div className="sec-title text-center mb-60 md-mb-40">
          <span className="sub-text small white-color">Testimonials</span>
          <h2 className="title title3 white-color">Customers Reviews</h2>
        </div>
        <Carousel/>
        {/* <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="3" data-md-device-nav="false" data-md-device-dots="true">

        <div class="testi-item">
                            <div class="testi-wrap">
                                <div class="image-wrap">
                                    <img src="assets/images/testimonial/avatar/1.jpg" alt="Testimonial">
                                </div>
                                <div class="item-contents">
                                    <p>Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.</p>
                                </div>
                                <div class="testi-information">
                                    <div class="testi-name">David Warner</div>
                                    <span class="testi-title">Envato User</span>
                                </div>
                            </div>
                        </div>
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />
          <ReviewCard
            img={'assets/images/testimonial/avatar/1.jpg'}
            paragraph={'Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well.'}
            name={'David Warner'}
            title={'Envato User'}
          />


        </div> */}
      </div>
    </div>

  );
}

export default Reviews;