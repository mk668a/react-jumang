import React from 'react';
import { useEffect, useState } from "react";

//motions
import { motion, AnimatePresence } from "framer-motion";
import Iframe from 'react-iframe'

function Field() {
  //time etc
  const [count, setCount] = useState(0);

  //notification flag
  const [notiFlag, setNotiFlag] = useState(true);

  useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
          }, 500);
  },[])

  //notification card
  const nortArea = (
    <motion.li
    key={0}
    positionTransition
    initial={{ opacity: 0, y: 100, scale: 0.2 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 }}}
    onClick={() => setNotiFlag(false)}
    >

      <iframe width="425" height="200" src="https://www.youtube.com/embed/q9tpBtvTTz8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </motion.li>
    
  )

  return (
    <div className="Field">
      <header className="Field-header">
      </header>
      <ul>
        <AnimatePresence initial={true}>
      {count>1 && notiFlag && nortArea}
        </AnimatePresence>

      </ul>
    </div>
  );
}

export default Field;
