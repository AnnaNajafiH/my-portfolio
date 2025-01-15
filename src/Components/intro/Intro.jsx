import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Anna from '../../img/anna.jpg';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context/Context';
import {motion} from 'framer-motion';   // npm i framer-motion: for animation



function Intro() {
    
const transition = {duration: 2, type:'spring'};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 

  return (
    <div className='intro'>
        <div className='i-left'>
            <div className="i-name">
                <span style={{color:darkMode?'white': ''}}>Hey! I Am</span>
                <span>Nahid Najafi</span>
                <span>A Full-Stack Web Developer 
                    </span>
                    <span>passionate about creating interactive, intuitive and user-friendly web application experiences.</span>
                <button className="button  i-button">Hire Me</button>

            <div className="i-icons">
                <a href='https://github.com/AnnaNajafiH'><img src={Github} alt="github" /></a>
                <a href='https://www.linkedin.com/in/nahid-najafi-hajivar'><img src={Linkedin} alt="linkedin" /></a>
            </div>
            </div>

        </div>
        <div className="i-right"> 
                <img src={Vector1} alt="vector1" />
                <img src={Vector2} alt="vector2" />
                <img src={Anna} alt="Anna" style={{ width: '300px', height: '400px', borderRadius: '60px' }} />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-23%'}}
                transition={transition}
                src={Glassesimoji} alt="glassesimoji" />

                <motion.div 
                initial={{top:'14rem', left: '12rem'}}
                whileInView={{left: '18rem'}}
                transition={transition}
                style={{top:'3%', left:'68%' }}
                className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Backend' txt2='Developer'/>
                </motion.div>

                <motion.div
                initial={{left: '9rem', top:'18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                style={{top:'23rem', left:'1rem' }}
                className='floating-div'
                >
                    <FloatingDiv image={Thumbup} txt1='Frontend' txt2='Developer'/>
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background:'var(purple)'}}>
                </div>
                <div className='blur' style={{
                    background:"#C1F5FF",
                    top: '17rem',
                    width:'22rem',
                    height:'16rem',
                    left:'-9rem',
                }}>
                </div>
        </div>
    </div>
  )
}

export default Intro