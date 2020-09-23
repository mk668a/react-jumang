import React from 'react';
import { useEffect, useState } from "react";

//motions
import { motion, AnimatePresence } from "framer-motion";

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
    
    <motion.h2
    key={0}
    positionTransition
    initial={{ opacity: 0, y: 100, scale: 0.2 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 }}}
    onClick={() => setNotiFlag(false)}
    >
      {count>3 && <iframe
      className = "scFrame"
      width="100%"
      height="250"
      scrolling="no"
      frameborder="yes"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745415452&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true">
      </iframe>}

    </motion.h2>
    
  )

  return (
    <div className="Field">
      <header className="Field-header">
      </header>
      
      


      <ul>
        <AnimatePresence initial={false}>
      {count>1 && notiFlag==true ?nortArea : null}
        </AnimatePresence>

      </ul>

    </div>
  );
}

export default Field;
