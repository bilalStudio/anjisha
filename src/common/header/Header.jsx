import React from 'react';
import BottomHeader from './bottomHeader/BottomHeader';
import ResponsiveHeader from './responsiveHeader/ResponsiveHeader';
import TopHeader from './topHeader/TopHeader';
const Header=()=> {
  return (
    <div className="full-width-header">
      <header id="rs-header" className="rs-header style3">
       <TopHeader/>
       <BottomHeader/>
        <ResponsiveHeader/>
      </header>
    </div>
  );
}

export default Header;