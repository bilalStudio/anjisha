import React from 'react'

const TopHeader = () => {
  return (
    <div className="topbar-area style2">
    <div className="container custom">
      <div className="row-table">
        <div className="col-cell">
          <div className="header-logo">
            <div className="logo-area">
              <a href="index.html">
                <img className="normal-logo" src={require("../../../assets/images/logo-dark2.png")} alt="logo"/>
                  <img className="sticky-logo" src={require("../../../assets/images/logo-dark.png")} alt="logo"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-cell">
          <div className="header-quote">
            <ul className="rs-address-area">
              <li className="address-list">
                <div className="info-icon">
                  <i className="flaticon-location"></i>
                </div>
                <div className="info-content">
                  <div className="info-title">
                    <a href="#">Location</a>
                    </div>
                  <div className="info-des"> 55 Gerad Lane,  NY 11201, USA</div>
                </div>
              </li>
              <li className="address-list">
                <div className="info-icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="info-content">
                  <div className="info-title">
                    <a href="#">Mail us</a>
                    </div>
                  <div className="info-des">
                    <a href="mailto:info@bizup.com">info@bizup.com</a>
                    </div>
                </div>
              </li>
              <li className="address-list">
                <div className="info-icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="info-content">
                  <div className="info-title">
                    <a href="#">Call us</a>
                    </div>
                  <div className="info-des">
                    <a href="tel:(+1)9999999999" > (+1) 9999 999 999</a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopHeader