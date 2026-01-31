import './App.css'
import Header from './components/layout/Header'
import Hero from './components/section/Hero'
import Resume from './components/section/Resume'
import Projects from './components/section/Projects'
import Footer from './components/layout/Footer'
import { useState, useEffect } from 'react'

function App() {

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (isLight) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isLight]);

  return (
    <>
    <Header isLight={isLight} toggleTheme={() => setIsLight(prev => !prev)}/>
    <Hero />
    <Resume />
    <Projects />
    <Footer />
    </>
  )
}

export default App
