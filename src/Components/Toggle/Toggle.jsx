import React from 'react';
import './Toggle.css';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';

function Toggle() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const handleClick= () => {
    theme.dispatch({type: 'TOGGLE'})
  }
  return (
    <div className="toggle" onClick={handleClick}  >
        <UilMoon/>
        <UilSun />

        <div className="t-button"
            style={darkMode? {left: '2px'}: {right: '2px'}}
          >
            
        </div>
    </div>
  )
}

export default Toggle