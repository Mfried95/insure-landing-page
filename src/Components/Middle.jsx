import React from 'react'
import '../Styles/mid.css'
import Bolt from "../images/icon-snappy-process.svg"
import Dollar from "../images/icon-affordable-prices.svg"
import People from "../images/icon-people-first.svg"



const Middel = () => {
  return (
    <div className='mid-container'>
      <div className='line'></div>
      <h1>We're diffrent</h1>

    <div className="card-container">
      
      <div className="card">
          <img src={Bolt} alt="" />
          <h2>Snappy Process</h2>
          <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
      </div>

      <div className="card">
      <img src={Dollar} alt="" />
          <h2>Affordable Prices</h2>
          <p>We don't want you worring about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
      </div>

      <div className="card">
      <img src={People} alt="" />
          <h2>People First</h2>
          <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
      </div>

    </div>

    </div>
  )
}

export default Middel