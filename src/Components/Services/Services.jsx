import React from 'react';
import './Services.css';
import Backend from '../../img/backend.png';
import Frontend from '../../img/frontend.png';
import UiUx from '../../img/uiUx (2).png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import {useState, useContext } from 'react';
import { themeContext } from '../../Context/Context';
import {motion} from 'framer-motion';   
import emailjs from '@emailjs/browser';

function Services() {
    const transition = {duration: 1, type:'spring'}; //animation
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [showConfirm, setShowConfirm] = useState(false);

    //function to send Email when cv is downloaded
    const notifyDownload = () => {
      emailjs.send(
        'service_trm8m12 ',    //service id
         'template_ydvj978',   //template id
          {message: 'Someone just downloaded your resume'},
          '_ugCumI5WCnnMM8oy'   //public key
      ).then(
            (result) => console.log('Download notification sent:', result.text),
            (error) => console.error('Error sending notification:', error.text)
      )
    };
    //handle cv download + Email notification
    const handleDownload = () => {
    notifyDownload(); // Send email notification
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume.pdf';
    link.click();
    setShowConfirm(false); // Hide confirmation after download
  };

    return (
    <div className="services" id='Services'>  
    
        {/* left side */}
        <div className='s-left'>
            <div className="s-name">
                <span style={{color:darkMode?'white': ''}}>My Professional </span>
                <span>Services</span>
                <span> I offer services that help you achieve your digital goals with precision and care. </span>
                

                <button className="button s-button" onClick={() => setShowConfirm(!showConfirm)}>
                   Download CV
                </button>
                    {/* Custom Confirmation Box */}
          {showConfirm && (
            <div className="confirm-box">
              <p style={{ color: darkMode ? 'black !important' : 'white !important' }}>Do you want to download my resume?</p>
              <button className="button confirm-yes" onClick={handleDownload}>Yes</button>
              <button className="button confirm-no" onClick={() => setShowConfirm(false)}>No</button>
            </div>
          )}


                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

        {/* right side */}
        <div className="cards"> 
            <motion.div 
            initial={{left: '22rem'}}
            whileInView={{left: '31rem'}}
            transition={transition}
            style={{left:'14rem'}}>
                <Card
               emoji= {Backend}
                heading="Backend Development"
                detail={"Node.js, Express.js,  REST APIs, MongoDB, SQL, PHP"}
                />
            </motion.div>
            <motion.div
            initial={{left:'-10rem', top:'14rem'}}
            whileInView={{left: '1rem', top:'9rem'}}
            transition={transition} 
            style={{top:"12rem", left:'-5rem'}}>
                <Card
                emoji= {Frontend}
                heading="Frontend Development"
                detail={"HTML5, CSS3, JavaScript, TypeScript, React.js, Tailwind CSS, Bootstrap"}
                />
            </motion.div>
            <motion.div
             initial={{top:'19rem', left: '28rem'}}
             whileInView={{left: '18rem'}}
             transition={transition}
             style={{top:"19rem", left:'12rem'}}>
                <Card
                emoji= {UiUx}
                heading="Web Design"
                detail={"Figma, Excalidraw, Prototyping"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple" }}></div>
        </div>
    </div>
  )
}

export default Services