import React from 'react';
import {MdDarkMode, MdLightMode} from 'react-icons/md';

export const Header = ({ handleNavigationClick, toggleDarkMode, isDarkMode}) => {

  return (
    <header className="App-header">
      <nav>
        <ul>
          <li onClick={() => handleNavigationClick(0)}>Home</li>
          <li onClick={() => handleNavigationClick(1)}>About</li>
          <li onClick={() => handleNavigationClick(2)}>Projects</li>
          <li onClick={() => handleNavigationClick(3)}>Contact</li>
        </ul>
        <button id="dark-mode-button" onClick={toggleDarkMode} className='icon-button'>
        {isDarkMode ? <MdLightMode/> : <MdDarkMode />}
      </button>
      </nav>
    </header>
  )
}
