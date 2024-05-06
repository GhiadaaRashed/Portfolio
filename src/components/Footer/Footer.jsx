import React from 'react'
import './Footer.css'
import { GrInstagram} from "react-icons/gr"; 
import { PiTelegramLogoBold } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
        <p className='footerp'>My social media accounts</p>
        <a className='footera' href="https://t.me/GhaidaaRashed79"><PiTelegramLogoBold /></a>
        <a className='footera' href="https://www.facebook.com/ghaidaa.rashed.5/"><FiFacebook /></a>
        <a className='footera' href="https://www.instagram.com/seuar_developer/"><GrInstagram /></a>
    </div>
  )
}

export default Footer