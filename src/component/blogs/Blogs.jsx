import React, {useState} from 'react';
import Cardd from '../../Cardd';
import Carousel from 'react-elastic-carousel';
const breakpoint = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 756, itemsToShow: 3 },
  // {width:840,itemsToShow:4},
  // {width:10000,itemsToShow:5},
  { width: 1200, itemsToShow: 4 },

]


const Blogs = (props) => {
  const [initialIndex, setInitialIndex] = useState(0)
  return (
    <div className="rs-blog style2 home3-blog-style bg19 pt-95 pb-100 md-pt-65 md-pb-70">
      <div className="container">
        <div className="row y-middle">
          <div className="col-lg-6 mb-50 md-mb-35">
            <div className="sec-title">
              <span className="sub-text small">Latest News</span>
              <h2 className="title title3">Read Latest Updates</h2>
            </div>
          </div>
          <div className="col-lg-6 mb-50 md-mb-35">
            <div className="btn-part text-right md-left">
              <a className="readon consultant blue-view" href="about.html">View Updates</a>
            </div>
          </div>
        </div>
        <Carousel
          initialActiveIndex={initialIndex}
          breakPoints={breakpoint}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          pagination={false}
          showArrows={false}
          itemsToScroll={1}
          onChange={(item, i)=>{
              if(i === 6){
                setInitialIndex(0)
              }
          }}
        >
          <Cardd />
          <Cardd />
          <Cardd />
          <Cardd />
          <Cardd />
          <Cardd />
          <Cardd />
        </Carousel>

      </div>
    </div>
  );
}

export default Blogs;