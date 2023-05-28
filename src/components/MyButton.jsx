import React from 'react'
import './cssutils/MyButton.css';

const MyButton = ({children,btnStyle,btnSize,onClick}) => {
    
    const buttonStyle=['btn--primary','btn--outline'];
    const buttonSize=['btn--medium','btn--large'];

    const selectedStyle=buttonStyle.includes(btnStyle)?btnStyle:buttonStyle[0];
    const selectedSize=buttonSize.includes(btnSize)?btnSize:buttonSize[0];
    
    return (
    <button className={`btn  ${selectedStyle} ${selectedSize}`}
            onClick={onClick}>
        {children}
    </button>
  )
}

export default MyButton;