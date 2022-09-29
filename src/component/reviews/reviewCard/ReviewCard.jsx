import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className="testi-item">
            <div className="testi-wrap">
                <div className="image-wrap">
                    <img src={props.img} alt="Testimonial" />
                </div>
                <div className="item-contents">
                    <p>{props.paragraph}</p>
                </div>
                <div className="testi-information">
                    <div className="testi-name">{props.name}</div>
                    <span className="testi-title">{props.title}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard