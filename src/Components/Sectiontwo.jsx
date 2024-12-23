import React from 'react'
import './Sectiontwo.css'
import { FaHubspot } from "react-icons/fa";
import { SiMapbox } from "react-icons/si";


export default function Sectiontwo() {
  return (
    <div className='sectiontwocontainer'>
        <div className='upsectiontwo'>
            <div className='leftupsectiontwo'>
                <p><strong>970K+ More</strong><br/>Trusted Companies Partner</p>
            </div>
            <div className="rightupsectiontwo">
                <h2>Video Ask</h2>
                <h2>HubSp<FaHubspot />t</h2>
                <h2><SiMapbox />mapbox</h2>
            </div>
        </div>
        <div className="downsectiontwo">
            <div className='leftdownsectiontwo'>
            <img src='ropes.png'></img>


            </div>
            <div className='rightdownsectiontwo'>
                <h1>Get Ready To Reach <br/>Your Fitness Goals</h1>
                <p>We are a gym that is committed to helping people
                    reach their tiness goals. we oner a verley or thells
                    programs and services to tityour neeas, whether you are a experienced athlete.
                    We believe that everyone should have access to
                    the denents or exercise make line eden.
                </p>
                <button>Free Trial Today</button>

            </div>
            
        </div>
      
    </div>
  )
}
