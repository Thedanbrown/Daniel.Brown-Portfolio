import React from 'react'
import './ContactInfo.css'
// component that list some basic contatct info in the contact section
const ContactInfo = (props) => {
    return (
        <div className='contactInfo-section'>
            <div className='contactInfo-Container'>
                <div className="icon">{props.icon}</div>
                <div className="info">{props.text}</div>
            </div>
        </div>
        
    )
}

export default ContactInfo