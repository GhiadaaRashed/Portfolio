
import './ProjCard.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";import { useRef } from 'react';
;
const ProjCard = ({ img, title, dis, lan, href1, href2 }) => {
  let image = useRef(null)
  const prev = () => {
    image.current.scrollLeft -= 250
  }
  const next = () => {
    image.current.scrollLeft += 250
  }
  return (
    <div className='projcard '>
      <div className="procardcontainer">
        <h3>{title}</h3>
        <p>{dis}</p>
        <span className='usinglang'>{lan}</span>
        <div className="showcode">
          <div className="code">
            <span>code <a href={href1}><FaGithub className='git' /></a></span>
          </div>
          <a href={href2}>Live Demo <BsBoxArrowUpRight className='git' /></a>
        </div>
      </div>
      <div className="slider">
        <FaArrowLeft className='prevnext' id='prev' onClick={prev} />
        <h3>{title}</h3>
        <div className="container" ref={image} >
          {img.map((e) => {
            return (
              <img src={e} />
            )
          })}
        </div>
        <FaArrowRight className='prevnext' id='next' onClick={next} />
      </div>
    </div>
  )
}

export default ProjCard