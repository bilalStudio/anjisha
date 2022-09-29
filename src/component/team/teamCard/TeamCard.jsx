import React from 'react'

const TeamCard = (props) => {
  return (
    <div className="team-item-wrap">
            <div className="team-wrap">
              <div className="image-inner">
                <a href="team-single.html"><img src={props.img} alt=""/></a>
              </div>
            </div>
            <div className="team-content text-center">
              <h4 className="person-name"><a href="team-single.html">{props.name}</a></h4>
              <span className="designation">{props.title}</span>
              <ul className="team-social">
                <li><a href="team-single.html"><i className="fa fa-facebook"></i></a></li>
                <li><a href="team-single.html"><i className="fa fa-instagram"></i></a></li>
                <li><a href="team-single.html"><i className="fa fa-twitter"></i></a></li>
                <li><a href="team-single.html"><i className="fa fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
  )
}

export default TeamCard