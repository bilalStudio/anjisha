import React from 'react'
const ServiceCard = (props) => {
    return (
        <div className={props.class}>
            <div className="flip-box-inner">
                <div className="flip-box-wrap">
                    <div className="front-part">
                        <div className="front-content-part">
                            <div className="front-icon-part">
                                <div className="icon-part">
                                    <img src={props.img} alt="" />
                                </div>
                            </div>
                            <div className="front-title-part">
                                <h3 className="title"><a href="business-planning.html">{props.title1}</a></h3>
                            </div>
                            <div className="front-desc-part">
                                <p>
                                    {props.paragraph1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="back-part">
                        <div className="back-front-content">
                            <div className="back-title-part">
                                <h3 className="back-title"><a href="business-planning.html">{props.title2}</a></h3>
                            </div>
                            <div className="back-desc-part">
                                <p className="back-desc">{props.paragraph2}</p>
                            </div>
                            <div className="back-btn-part">
                                <a className="readon view-more" href="business-planning.html">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard