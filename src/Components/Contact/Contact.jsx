import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context/Context';

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);
  const [buttonText, setButtonText] = useState('Send');
  const [errors, setErrors] = useState({});  // Track validation errors

  // Email validation using regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('user-name');
    const email = formData.get('user-email');
    const message = formData.get('message');

    let formErrors = {};

    // Validation for Name
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Validation for Email
    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email';
    }

    // Validation for Message
    if (!message.trim()) {
      formErrors.message = 'Message is required';
    }

    // If errors exist, set errors and stop submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Send email using EmailJS
    emailjs.sendForm('default_service', 'template_ydvj978', form.current, '_ugCumI5WCnnMM8oy')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setButtonText('Sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id='Contact'>
      <div className="c-left">
        <div className="c-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Let's</span>
          <span>Connect</span>
          <span>Have a vision in mind? Reach out and let’s turn it into reality!</span>
        </div>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user-name'
            className={`user ${errors.name ? 'input-error' : ''}`}
            placeholder='Name'
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <input
            type='email'
            name='user-email'
            className={`user ${errors.email ? 'input-error' : ''}`}
            placeholder='Email'
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <textarea
            name='message'
            className={`user ${errors.message ? 'input-error' : ''}`}
            placeholder='Message'
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <input
            type='submit'
            value={buttonText}
            className='button c-button'
            disabled={done}
          />
          <span>{done && "Thanks for contacting me!"}</span>

          <div className="blur c-blur1" style={{ background: "var(--purple" }}></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
