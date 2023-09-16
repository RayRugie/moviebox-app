import React from 'react';
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Youtube from "../assets/youtube.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer flex flex-col text-black space-y-9 mt-12 items-center">
        <div className="socials flex flex-row space-x-12 h-7">
            <a href="/"><img src={Facebook} alt="facebook" /></a>
            <a href="/"><img src={Instagram} alt="instagram" /></a>
            <a href=""><img src={Twitter} alt="twitter" /></a>
            <a href=""><img src={Youtube} alt="youtube" /></a>
        </div>
        <div className=" text-black flex flex-row space-x-12">
           <p>Conditions of Use</p>
           <p>Privacy & Policy</p>
           <p>Press Room</p>
        </div>
        <p className='text-black'>© 2021 MovieBox by Omorugie Oyibotha  </p>
    </div>
    
  )
}

export default Footer