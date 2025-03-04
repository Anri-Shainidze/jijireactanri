import React from 'react'
import eth from '../assets/eth.png'
import clock from '../assets/Clock.png'
import './info.css'
const Info = () => {
  return (
    <div className='info-card'>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className='eth'>
         <img src={eth} alt="" />
         <h2>0.041 ETH</h2>
         <div className="eth-clock">
          <img src={clock} alt="" />
          <span>3 days left</span>
         </div>
        </div>
    </div>
  )
}

export default Info