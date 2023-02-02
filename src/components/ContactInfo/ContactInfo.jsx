import React from 'react'
import './ContactInfo.css'

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