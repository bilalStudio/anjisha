import React from 'react'

const Cardd = (props) => {
  return (
    // <div className='cardD'>
    //     {props.number}
    // </div>
    <div className="blog-item">
           <div className="image-wrap">
            <a href="blog-details.html"><img src='assets/images/blog/1.jpg' alt=''/></a>
            </div>
            <div className="blog-content">
              <ul className="blog-meta mb-10">
                <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
                <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
              </ul>
              <h3 className="blog-title"><a href="blog-details-2.html">Customer Onboarding Strategy: A Guide to Class</a></h3>
              <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
            </div>
        
            
            
            </div>

  )
}

export default Cardd