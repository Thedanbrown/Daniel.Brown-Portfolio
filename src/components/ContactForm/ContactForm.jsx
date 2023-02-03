import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const form = useRef();
  
  const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs.sendForm('service_7gqmy1r', 'template_al8o85w', form.current, 'TM7bMzDfqgBvU5ix9')
      
        .then((result) => {
            console.log(result.text);
            console.log('Message Sent')
            e.target.reset()
            
        }, (error) => {
            console.log(error.text);
        });
        
    };

  return (
    <div>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor='name'>Your Name:
            <input className='form-input' type='text' id='name' name='name' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor='email'>Your email:
            <input className='form-input' type='email' id='email' email='email' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor='message'>Your message:
            <textarea className='form-textarea' type='text' name='message' id='message' message='message' />
          </label>
        </div>
        <button className='btn' type='submit' value='Send'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm