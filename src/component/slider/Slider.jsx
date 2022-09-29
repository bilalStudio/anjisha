import React from 'react';
const Slider = (props) => {
  return (

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  
    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block">
    <div id="slide-2" className="slider-direction">
          <div className="content-part">
            <div className="container">
              <div className="slider-des">
                <div className="sl-subtitle text-primary">Business Consulting</div>
                <h1 className="sl-title"> We grow & manage<br /> Your Business</h1>
              </div>
              <div className="slider-bottom">
                <a className="readon blue-slide" href="contact.html">Get Started</a>
              </div>
            </div>
          </div>
        </div>
    </div>
      <img src="assets/images/slider/h3-sl2.jpg" style={{width:"100%"}} title="#slide-2" />
    </div>
    <div class="carousel-item">
    <div class="carousel-caption d-none d-md-block">
    <div className="container">
    <div id="slide-2" className="slider-direction">
            <div className="container">
              <div className="slider-des">
                <div className="sl-subtitle text-primary">Business Consulting</div>
                <h1 className="sl-title"> We grow & manage<br /> Your Business</h1>
              </div>
              <div className="slider-bottom">
                <a className="readon blue-slide" href="contact.html">Get Started</a>
              </div>
            </div>
        </div>
    </div>
    </div>
    <img src="assets/images/slider/h3-sl1.jpg" style={{width:"100%"}} title="#slide-1" />
    </div>

    
  </div>
  <a class="carousel-control-prev carousel bg-primary "  href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next carousel bg-primary" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only ">Next</span>
  </a>
</div>

  
    
  );
}

export default Slider;