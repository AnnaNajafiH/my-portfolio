import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';  
import { UilTwitter, UilLinkedin, UilGithub } from '@iconscout/react-unicons';



function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>nnh.chem@gmail.com</span>
            <div className="f-icons">
                <UilTwitter color='white' size='3rem'/>
                <UilLinkedin color='white' size='3rem'/>
                <UilGithub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer


// i import this icon $ npm i @iconscout/react-unicons