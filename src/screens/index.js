import React from 'react';
import Slider from "../component/slider/Slider";
import AboutUs from "../component/aboutUs/AboutUs";
import Services from "../component/services/services2/Services";
import Projects from "../component/projects/Projects";
import WhyChooseUs from "../component/whyChooseUs/WhyChooseUs";
import Reviews from "../component/reviews/Reviews";
import Team from "../component/team/Team";
import ContactUs from "../component/contactUs/ContactUs";
import Blogs from "../component/blogs/Blogs";
import SearchModel from "../component/searchModel/SearchModel";
import Container from "../common/container/Container";
import Services1 from "../component/services/services1/Services1";

const Anjisha=()=> {
  return (
<Container>

  <div id="loader" className="loader">
    <div className="loader-container">
      <div className='loader-icon'><img src="assets/images/fav.png" alt="Bizup Consulting Business"/></div>
    </div>
  </div>
    <Slider/>
    <Services1/>
    <AboutUs/>
    <Services/>
    <Projects/>
    <WhyChooseUs/>
    <Reviews/>
    <Team/>
    <ContactUs/>
    <Blogs/>

  <div id="scrollUp" className="blue-color">
    <i className="fa fa-angle-up"/>
  </div>
  <SearchModel/>
</Container>

  );
}

export default Anjisha;