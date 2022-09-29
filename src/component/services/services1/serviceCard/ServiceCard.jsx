import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="services-item">
              <div className="services-icon">
                <img className="dance_hover" src={props.img} alt="Services"/>
              </div>
              <div className="services-content">
                <h3 className="title"><a href="services-style1.html">{props.title}</a></h3>
                <p className="margin-0">{props.para}</p>
              </div>
            </div>
          </div>
  )
}

export default ServiceCard