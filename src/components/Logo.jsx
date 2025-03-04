import React from 'react'
import oval from '../assets/Oval.png'
import './logo.css'
const Logo = () => {
    const hover = {
        color :"rgba(0, 255, 248, 1)"
    }
  return (
    <div className='avatar'>
      <img src={oval} alt="" />
      <span>Creation of</span>
      <p onMouseEnter={hover.color} className='js'>Jules Wyern</p>
    </div>
  )
}

export default Logo