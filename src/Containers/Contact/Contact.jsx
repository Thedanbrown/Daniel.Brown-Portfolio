import React from 'react'
import { ContactInfo, ContactForm, Map } from '../../components'
import { MdEmail, MdPlace } from 'react-icons/md'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-section section-padding' id='Contact'>
      <div className='contact-container'>
        <div className='contact-title'>
          <h2>Contact</h2>
        </div>
        <div className='contact-content'>
          <div className='contact-left'>
            <ContactInfo icon={<MdEmail />} text='Thedanbrown@gmail.com' />
            <ContactInfo icon={<MdPlace/>} text='Atlanta, GA' />
            </div>
          <div className='contact-right'>
            <ContactForm />
          </div>
        </div>
        
      </div>
      <Map />
    </div>
  )
}

export default Contact