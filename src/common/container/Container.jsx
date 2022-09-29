import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Container=(props)=> {
  
  return (
    <>
      <div className="offwrap"></div>
      <div id="pre-load">
           <div id="loader" className="loader">
               <div className="loader-container">
                   <div className='loader-icon'><img src="assets/images/fav.png" alt="Bizup Consulting Business"/></div>
               </div>
           </div>              
       </div>
       <div className="main-content">
      <Header/>
        {props.children}
      </div>
      <Footer/>
    
    </>
  );
}

export default Container;