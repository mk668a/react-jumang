import React from 'react';
import Notification from './components/Notification';
import Header from './components/Header';
import RotateJumang from './components/RotateJumang';
import "./Apps.scss";

//basically this <Apps /> for only jsx components
//index for native js thing
const Apps = () => {
    return (
        <>
            <Header />
            <RotateJumang />
            <Notification />
        </>
    )
}

export default Apps;