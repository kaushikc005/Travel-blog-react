import React from 'react'
import "./cssutils/CardItem.css";

const CardItem = ({url,text,type}) => {
  return (
    <li className='carditem-list'>
       <figure className='card--item'>
       <img className='card-img' src={url} alt='dest' />
       <p className='card--item-text'>{text}</p>
    </figure>
    </li>
    
  )
}

export default CardItem