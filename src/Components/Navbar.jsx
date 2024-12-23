import React from 'react'
import './Navbar.css'
import { FaDumbbell } from "react-icons/fa6";



export default function Navbar() {
  return (
    <div className='navbarcontainer'>
        <div className="navbarleftitems">
            <h4 className='logo'><FaDumbbell/></h4>
            <h2>FITNESXIA</h2>
        </div>
        <div className="navbarrightitems">
            <p>Home</p>
            <p>About Us</p>
            <p>Program</p>
            <p>Membership</p>
            <p>Testimonials</p>
        </div>
      
    </div>
  )
}
