import React from 'react'
import './About.css'
import coflap from '../../assets/images/alapwithcoffe2.jpg'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="aboutcontainer">
        <img src={coflap}/>
        <div className="circle">
            <p>FRONT-END DEVELOPER </p><p>👩‍💻</p>
        </div>
        <div className="aboutinfo">
        <h1>About me</h1>
        <h2>A dedicated Front-end Developer</h2>
        <p>As a dedicated and disciplined front-end developer with expertise in 
            HTML, CSS, JavaScript, React, and Tailwind. I have a strong work 
            ethic and enjoy taking on challenging tasks in my field.
            my knowledge and skills in web development make me a 
            valuable asset in creating visually appealing and functional websites.</p>
        </div>
        </div>
    </div>
  )
}

export default About