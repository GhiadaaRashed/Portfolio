import './App.css'
import About from './components/About/About';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import { createContext, useState } from 'react'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
export const ThemeContext=createContext(null);
function App() {
  function getInitialTheme(){
    const theme=localStorage.getItem('theme')
    return theme? JSON.parse(theme):'light'
  }
  const [theme,setTheme]=useState(getInitialTheme);
  return (
    <ThemeContext.Provider>
      <div className='App' id={theme}>
        <NavBar theme={theme} setTheme={setTheme}/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}
export default App
