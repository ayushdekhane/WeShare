import React from 'react';
import "./headervideo.css"
import { assets } from '../../assets/assets';
const Headervideo = () => {
  return (
    <div className='videocontainer'>
      <video src={assets.headervideo} muted loop="-1" autoPlay></video>
    </div>
  );
};

export default Headervideo;
