import React from 'react'
import { Link } from 'react-router-dom'
import "./cssutils/Cards.css"
import CardItem from './CardItem'
const Cards = () => {
  return (
    <article className='card'>
    <p className='card--heading'>Checkout these EPIC destinations</p>
      
      <ul className='cards--list'>
        <CardItem url='images/img-1.jpg' text='Explore the might hills and conquer them'/>
        <CardItem url='images/img-2.jpg' text='Find your adventure at the best beaches!'/>
      </ul>
      <ul className='cards--list'>
        <CardItem url='images/img-3.jpg' text='Enjoy your today in the sea of happiness!'/>
        <CardItem url='images/img-4.jpg' text='Enjoy the unexpected things'/>
        <CardItem url='images/img-8.jpg' text='Wonder around the dunes of Africa'/>
      </ul>
    </article>
  )
}

export default Cards