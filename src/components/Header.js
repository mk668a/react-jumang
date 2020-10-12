import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <span>JUMANG POTARU</span>
      </div>
      <div className='episode'>
        <span>v0.1</span>
      </div>
    </header>
  );
};

export default Header;