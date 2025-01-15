import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';  
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';



function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>nahid.najafi.h@gmail.com</span>
            <div className="f-icons">
                {/* <a href="mailto:nahid.najafi.h@gmail.com">
            <UilEnvelope color="white" size="3rem" />
              </a> */}
                <a href="https://www.linkedin.com/in/nahid-najafi-hajivar"><UilLinkedin color='white' size='3rem'/></a>
                <a href="https://github.com/AnnaNajafiH"><UilGithub color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer


// i import this icon $ npm i @iconscout/react-unicons