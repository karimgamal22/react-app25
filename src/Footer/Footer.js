import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
// images
import footerlogo from '../image/logo.png'
import facebook from '../image/facebook.png'
import twiter from '../image/twiter.png'
import instgram from '../image/instgram.png'
import linkedin from '../image/linkedin.png'



const Footer = () => {
  return (
   <footer>
    <div className='container'>
        <div className='row'>

        <div className='col-lg-3  col-md-6 col-sm-12'>
        <img src={footerlogo} className='imgfooter'/>
        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
       
        <div className='footer-contact'>
        
        <div className='footer-icons'>
            <FontAwesomeIcon icon= {faPhone} />
        </div>

        <div className='footer-text'>
        <h6>Contact Us</h6>
        <h4>01018724012</h4>

        </div>

        </div>

        </div>

        <div className='col-lg-3  col-md-6 col-sm-12'>
        <h2>Quick Links</h2>
        <ul className='Quick-Links'>
            <li> <a href='#'>About Us</a> </li>
            <li> <a href='#'>Services</a> </li>
            <li> <a href='#'>Booking</a> </li>
            <li> <a href='#'>Faq's</a> </li>
            <li> <a href='#'>Blogs</a> </li>
            <li> <a href='#'>Out Team</a> </li>
            
          
        </ul>

        </div>

        <div className='col-lg-3  col-md-6 col-sm-12'>
        <h2>Our Service</h2>
        <ul>
            <li> <a href='#'>Dental Care  </a> </li>
            <li> <a href='#'>Cardiac Clinic  </a> </li>
            <li> <a href='#'>Massege Therapy  </a> </li>
            <li> <a href='#'>Cardiology  </a> </li>
            <li> <a href='#'>Precise Diagnosis  </a> </li>
            <li> <a href='#'>Abmbulance Services  </a> </li>
            
        </ul>

        </div>

        <div className='col-lg-3  col-md-6 col-sm-12'>
        <h2>Subcribe</h2>
        
        <form>
            <input type="email" placeholder='Email Address' required className="form-control" ></input>
            <button type='submit' className= "btn btn-secondary shadow w-100">Subscribe Now</button>
        </form>
        <ul className='social'>
            <li> <a href='#'> <img src={facebook}/></a></li>
            <li> <a href='#'> <img src={twiter }/></a></li>
            <li> <a href='#'> <img src={instgram}/></a></li>
            <li> <a href='#'> <img src={linkedin}/></a></li>
        </ul>
     
        


            
        </div>
        

        </div>
    </div>
   </footer>
  )
}

export default Footer