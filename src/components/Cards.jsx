import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import CardItem from './CardItem'
const Cards = () => {
  return (
    <div className='card'>
    <p className='card--heading'>Checkout these EPIC destinations</p>
      
      <ul className='cards--list'>
        <CardItem url='/src/assets/images/img-1.jpg' text='Explore the hidden waterfall deep inside the Amazon forest'/>
        <CardItem url='/src/assets/images/img-2.jpg' text='Explore the hidden waterfall deep inside the Amazon forest'/>
      </ul>
      <ul className='cards--list'>
        <CardItem url='/src/assets/images/img-3.jpg' text='Explore the hidden waterfall deep inside the Amazon forest'/>
        <CardItem url='/src/assets/images/img-4.jpg' text='Explore the hidden waterfall deep inside the Amazon forest'/>
        <CardItem url='/src/assets/images/img-8.jpg' text='Explore the hidden waterfall deep inside the Amazon forest'/>
      </ul>
    </div>
  )
}

export default Cards