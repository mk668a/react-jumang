import React from 'react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = () =>  {
    //time etc
    const [count, setCount] = useState(0);
    //notification flag
    const [notiFlag, setNotiFlag] = useState(true);

    //timer
    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 100);
    }, [])

    //notification card
    const Path = props => ( <
        motion.path fill = "transparent"
        strokeWidth = "1.0"
        stroke = "hsl(0, 0%, 1%)"
        strokeLinecap = "round" {...props }
        />
    );

    const nortMessage = (
        <motion.p className = "nortMessage"
        key = { 2 }
        style = {
            { background: '#d6d3d4c0', rotate: 0 } }
        initial = {
            { opacity: 0.5, y: 50, scale: 0, background: '#d6d3d4c0', rotate: 0 } }
        animate = {
            { opacity: 1, y: 0, scale: 1, background: '#d6d3d4c0', rotate: 0 } }
        whileHover = {
            { background: '#EEd3d4c0' } }
        whileTap = {
            {
                scale: 0.95,
            }
        }
        exit = {
            { opacity: 0, scale: 0.1, transition: { duration: 0.2 } } }
        onClick = {
            () => setNotiFlag(false) }>
        <motion.svg 
        key = { 3 }
        className = "battenNotif"
        width = "23"
        height = "23"
        viewBox = "0 0 23 23" >
        <Path d = "M 3 16.5 L 17 2.5" />
        <Path d = "M 3 2.5 L 17 16.346" />
        </motion.svg>
        </motion.p>
    )
    const nortArea = (
        <motion.li 
        key = { 0 }
        initial = {
            { opacity: 0, y: 100, scale: 0 } }
        animate = {
            { opacity: 1, y: 0, scale: 1 } }
        whileHover = {
            { scale: 1.05 } }
        exit = {
            { opacity: 0, scale: 0.5, transition: { duration: 0.2 } } }>
        { 
        <iframe
            title = "soundcloud link"
            key = { 1 }
            frameborder = "no"
            scrolling = "no"
            src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745415452&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true" >
        </iframe>
        } </motion.li>
    );


    return ( 
    <div className = "Notification" >
        <header className = "Notification-header" >
        </header> 
        <ul>
        <AnimatePresence initial = { true } >
            { count > 4 && notiFlag && nortMessage }
            { notiFlag && nortArea } 
        </AnimatePresence>
        </ul>
        </div>
    );
}

export default Notification;