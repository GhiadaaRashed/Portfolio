import React from 'react'
import './Header.css'
import photo from '../../assets/images/photo2.png'
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Header = () => {

  return (
    <div className="home" id='home'>
          <div className='header'>
      <div className="headercontainer">
        <h1>Front-End react developer 👋</h1>
        <p>Hi,Iam Ghaidaa Rashed. A front-end react developer based in Syria</p>
        <div className="headergit">
        <a href="https://github.com/GhiadaaRashed"><FaGithub className='git5'/></a>
        </div>
        <div className="tech-stack">
      <div className="tech-info">
      <p>Tech Stack</p>
      <span></span>
      </div>
      <div className="stack">
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <FaReact />
      <SiTailwindcss />
      </div>
    </div>
    <a href="#project"><button>My Projects</button></a>
      </div>
      <div className="img">
      <img src={photo} />
      </div>
    </div>
    </div>
  )
}

export default Header