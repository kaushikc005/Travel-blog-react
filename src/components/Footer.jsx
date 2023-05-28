import React from 'react'
import './Footer.css'
import MyButton from './MyButton'
const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer--wrapper'>
    <span className='footer--heading'>Join the adventure newsletter to receive our best vacation deals</span>
      <form>
      <input className='footer--form-email' type='email' placeholder='Your Email' />
       <MyButton btnStyle='btn--outline' btnSize='btn--medium'>Subscribe</MyButton>
      </form>
     
     <div className='footer--item--wrapper'>
     <div className='footer--item-list'>
            <p className='footer--item--heading'>About Us</p>
            <ul>
              <li>How it works?
              </li>
              <li>Testimonials
              </li>
              <li>Careers
              </li>
              <li>Investors
              </li>
              <li>Terms of service
              </li>
            </ul>
          </div>

          <div className='footer--item-list'>
            <p className='footer--item--heading'>Contact Us</p>
            <ul>
              <li>Contact
              </li>
              <li>Support
              </li>
              <li>Destination
              </li>
              <li>Support
              </li>
            </ul>
          </div>

          <div className='footer--item-list'>
            <p className='footer--item--heading'>Videos</p>
            <ul>
              <li>Submit Videos
              </li>
              <li>Ambassador
              </li>
              <li>Agency
              </li>
              <li>Influencer
              </li>
              <li>Terms of service
              </li>
            </ul>
          </div>

     </div>
     
     <div className='footer--icon-wrapper'>
      <span className='footer--icon'>TRVL <i className='fa-brands fa-typo3'></i></span>
      <span className='footer--icon small-text'>TRVL @2023</span>

      <div className='footer--icon-social'>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      </div>

     </div>
     

    </div>
      
    </div>
  )
}

export default Footer