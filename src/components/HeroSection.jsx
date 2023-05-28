import React from 'react';
import './cssutils/HeroSection.css';
import MyButton from './MyButton';

const HeroSection = () => {
  return (
    <div className='hero--container'>
        <div className='hero-wrapper'>
          <span className='hero--heading'>ADVENTURE AWAITS</span>
          <br />
          <span className='hero--subText'>What are you waiting for?</span>
        
        <div className='hero--btns'>
          <MyButton btnStyle='btn--outline' btnSize='btn--medium'>
           GET STARTED </MyButton>
          <MyButton btnStyle='btn--primary' btnSize='btn--medium' >
          WATCH TRAILER <i class="fa-sharp fa-regular fa-circle-play"></i>
          </MyButton>
        </div>

        </div> 
    </div>
  )
}

export default HeroSection;