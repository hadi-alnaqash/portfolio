import { useState, useRef } from 'react'
import { Email } from '../../logos/Email'
import { Facebook } from '../../logos/Facebook'
import { Instagram } from '../../logos/Instagram'
import './style.scss'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Connect = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0a1qwsu', 'template_6fhz714', form.current, '9epSqyM0XBAAnh2EJ')
          .then((result) => {
            swal({
                title: "Message sent!",
                text: "your message has been sent to my email",
                icon: "success",
              });
          }, (error) => {
            swal({
                title: "There is an issue with sending message!",
                text: "try again later",
                icon: "error",
              });
          });
      };

  return (
    <div id='contact' className='connect section__padding'>
        <div className="left">
            <p className='sectionTitle'>Connect with me:</p>
            <p className='desc'>Satisfied with me? Please contact me</p>
            <div className="media">
               <a href="https://www.facebook.com/"><Facebook /></a> 
               <a href="https://www.instagram.com/"><Instagram /></a> 
               <a href="https://mail.google.com/"><Email /></a> 
            </div>
        </div>
        <div className="right">
            <p className='rightTitle'>Contact me, let’s make magic together</p>
            
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input required type="text" placeholder='Name:' name='user_name' />
                    <input required type="email" placeholder='Email:' name='user_email'/>
                    <textarea required  placeholder='Message:' name='message'/>
                    <button type="submit" >Send</button>
                </form>
            
        </div>
        
    </div>
  )
}

export default Connect