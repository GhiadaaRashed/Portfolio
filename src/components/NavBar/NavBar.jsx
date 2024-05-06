import './NavBar.css'
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from 'react';
const NavBar = ({theme,setTheme}) => {
  const toggle_mode=()=>{
    theme=='light'?setTheme("dark"):setTheme("light")
}
useEffect(()=>{
  localStorage.setItem('theme',JSON.stringify(theme))
},[theme])
const [slid,setslid]=useState(false);
const [color,setcolor]=useState(false)
const changeColor=()=>{
  if(window.scrollY>=100){
    setcolor(true)
  }
  else{
    setcolor(false)
  }
}
window.addEventListener('scroll',changeColor)
  return (
    <div className={color?'navbar nav-bg':'navbar'}>
        <h1>G</h1>
        <div className={slid?"navcontainer active":" navcontainer"}>
        <MdOutlineCancel className='cancel' onClick={()=>{
          setslid(!slid)
        }} />
        <ul className='navul'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
        </ul>
        <div className='icon'>
        <div  onClick={()=>{
          toggle_mode()
        }}>
        {theme=="light"?<FaRegMoon/>:<FaRegSun id='sun'/>}
        </div>
        <div className="lightDark">
        {theme=="light"?'light mood':'dark mood'}
        </div>
        </div>
        </div>
        <AiOutlineBars className='slid'  onClick={()=>{
          setslid(!slid)
        }}/>
    </div>
  )
}
FaRegSun
FaRegMoon

export default NavBar   