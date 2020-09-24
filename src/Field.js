import React from 'react';
import { useEffect, useState } from "react";

//motions
import { motion, AnimatePresence } from "framer-motion";
import Iframe from 'react-iframe'

function Field() {
  //time etc
  const [count, setCount] = useState(0);

  //notification flag
  const [notiFlag, setNotiFlag] = useState(false);


  function ass(e)
  {
    setNotiFlag(!notiFlag);
  }
  useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
          }, 500);
  },[])

  //notification card
  const nortArea = (
    <motion.h2
    key={0}
    positionTransition
    initial={{ opacity: 0, y: 100, scale: 0.2 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 }}}
    onClick={() => setNotiFlag(false)}
    >
      { 
      notiFlag && <Iframe
        className = "scFrame"
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745415452&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true"
        ></Iframe>
      }

    </motion.h2>
    
  )

  return (
    <div className="Field">
      <header className="Field-header">
      </header>
      <button onClick={ass} >test</button>
      <ul>
        <AnimatePresence initial={false}>
      {count>1 && notiFlag===true ?nortArea : null}
        </AnimatePresence>

      </ul>
    </div>
  );
}

export default Field;
