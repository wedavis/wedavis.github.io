import React from 'react';
import {FaLinkedin,FaGithub} from 'react-icons/fa';
import './Contact.css'
function Contact() {
    return(
    <div className="Contact">
       <header>
        <p className="Title">
        Contact Me
        </p>
        <div className="box">
        <ul className="icons"> 
          <li className='social-icon-link'>
            <a
              className='social-icon-link'
              href ='https://www.linkedin.com/in/william-davis-2b70851b5'
              aria-label='LinkedIn'
              >
                <FaLinkedin />
            </a>
          </li>
          <li className='social-icon-link'>
            <a
              className='social-icon-link'
              href ='https://github.com/wedavis'
              aria-label='Github'
              >
                <FaGithub />
            </a>
          </li>
        </ul>
        </div>
        </header>
    </div>
    );
}
export default Contact;
