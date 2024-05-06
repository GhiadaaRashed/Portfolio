import React from 'react'
import './Contact.css'
import { FaMapLocation } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h3>CONTACT</h3>
        <h2>Don't be shy ! Hit me up ! 👇</h2>
        <div className="contactandlocation">
        <p className='contain'>
            <FaMapLocation />
            <span><p className='font'>Location</p>Syria , Damascus</span>
        </p>
        <p className='contain'>
            <FaMailBulk/>
            <span><p className='font'>Mail</p>ghaidaarashed97@gmail.com</span>
        </p>
        </div>
    </div>
  )
}

export default Contact