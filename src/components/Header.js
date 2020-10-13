import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";


const Header = () => {
  return (
    <header>
      <div className='logo'>
        <motion.span
          initial = {
            { opacity: 0,scale: 0 } }
          animate = {
            { opacity: 1,scale: 1, background: '#EEd3d4c0'} }>
          JUMANG POTARU</motion.span>
      </div>
      <div className='episode'>
        <motion.span
        initial = {
          { opacity: 0,scale: 0 } }
        animate = {
          { opacity: 1,scale: 1, background: '#EEd3d4c0'} }>
            v0.1</motion.span>
      </div>
    </header>
  );
};

export default Header;