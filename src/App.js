import React, {useRef, useState} from 'react';
import { Header } from './componets/Header';
import Home from './componets/Home';
import './scss/app.scss';
import About from './componets/About';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import Projects from './componets/Projects';
import Contact from './componets/Contact';

function App() {
  const parallaxRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode')
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  };

  const handleNavigationClick = (offset) => {
    parallaxRef.current.scrollTo(offset);
  };
 
  
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        handleNavigationClick={handleNavigationClick}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Parallax ref={parallaxRef} pages={4} >
        <ParallaxLayer offset={0} className="center">
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="center">
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="center">
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3} className="center">
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
