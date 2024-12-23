import React from 'react'
import './Sectionfour.css'
import { FaFire } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";


export default function Sectionfour() {
  return (
    <div className='sectionfourcontainer'>
        <div className='leftsectionfour'>
            <h1>Why Should people choose<br/>Fitnesxia Services</h1>
            <h2><span className='checkmarksectionfour'><IoIosCheckmarkCircle /></span>&nbsp;&nbsp;&nbsp;Personal Training</h2>
            <p>Our personel trainers help  you create a personalized<br/> fitness plan and track your progress.</p>
            <h2><span className='checkmarksectionfour'><IoIosCheckmarkCircle /></span>&nbsp;&nbsp;&nbsp;Expert trainer</h2>
            <p>Our gym is proud to offer a team of highly skilled and certified trainer<br/> help achieve your health & fitness goals.</p>
            <h2><span className='checkmarksectionfour'><IoIosCheckmarkCircle /></span>&nbsp;&nbsp;&nbsp;Flexible time</h2>
            <p>There are many fitness classes that are offered during<br/> off peak hours ,such as early morning or late evening</p>

            <button>Join Today</button>


        </div>
        <div className="rightsectionfour">
            <div className='leftcard'>
                <div className='cardcontentsectionfour'><p className='fire'><FaFire /></p><p>&nbsp;&nbsp;24% <br/>&nbsp;&nbsp;Flat burning</p></div>
            </div>
            <div className="rightcard">
                <div className='cardcontentsectionfour'><p className='heart'><FaHeartbeat /></p><p>&nbsp;&nbsp;70 bpm<br/>&nbsp;&nbsp;Heart Rate</p></div>
            </div>

        </div>
      
    </div>
  )
}
