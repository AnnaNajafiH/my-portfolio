import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef , useState} from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context/Context';


function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

      const form = useRef();
      const [done, setDone] = useState(false);

    // this code coming from ElementInternals.js react:
    const sendEmail = (e) => {
    e.preventDefault();

    // Use 'default_service' as service_id if you're unsure about your custom service ID
  emailjs.sendForm('default_service', 'template_ydvj978', form.current, '_ugCumI5WCnnMM8oy')
    .then(
      (result) => {
        console.log(result.text); // Success message in console
        setDone(true); // Show success message
      },
      (error) => {
        console.log(error.text); // Error message in console
      }
    );
};

    
//   till here

  return (
        <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="c-name">
                <span style={{color:darkMode?'white': ''}}>Let's Connect</span>
                <span>Bring Your Ideas to Life</span>
                <span>Have a vision in mind? Reach out and let’s turn it into reality!</span>
            </div>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}} ></div>
        </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user-name' className='user' placeholder='Name' />
                    <input type='email' name='user-email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type='submit' value='Send' className='button c-button' />
                    <span>{done && "thanks for contacting me!"}</span>

                    <div className="blur c-blur1"
                    style={{background: "var(--purple"}}></div>
                </form>
            </div>
    </div>

  )
}

export default Contact