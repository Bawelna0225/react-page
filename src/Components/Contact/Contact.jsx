import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-container'>
        <form action="">
            <label htmlFor="Name">Name</label>
            <input type="text" name='Name' id='Name' />
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" />
            <label htmlFor="Subject">Subject</label>
            <input type="text" name='Subject' id='Subject'/>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="Message"></textarea>
        </form>
    </div>
  )
}
