import React from 'react'
import './Hero.css'
import { FaPlay } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";



export default function Hero() {
  return (
    <div className='outerherocontainer'>
    <div className='herocontainer'>
        <h1>GET HEALTHY BODY <br/> WITH THE PERFECT <br/> EXCERSISE <img src='gym.jpg' height={39} width={189} className='paraimage'></img></h1>
        <p>We are always there to help you to make a healthy body<br/>
        and mind througn the power of fitess.</p>
        <div className='herodivone'>
            <button>Get started</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='playbutton'>
            <FaPlay />

            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className='watchvideo'>Watch Video</p>
        </div>
        <div className='herodivtwo'>
            <p><strong>105+</strong><br/>Expert Trainers</p>
            <hr/>
            <p><strong>970+</strong><br/>Members jointed</p>
            <hr/>
            <p><strong>135+</strong><br/>Fitness Programs</p>


        </div>
        


      
    </div>
    <div className="righthero">
      <div className="graphcard">
        <div className="graphcardleft">
        <p>&nbsp;&nbsp;&nbsp;Today's Calories<br/><strong>&nbsp;&nbsp;&nbsp;150 cal</strong></p>
        <p>&nbsp;&nbsp;&nbsp;<strong><FaArrowTrendUp /> &nbsp;
        +2.5%</strong> this week </p>
        </div>
        <div className='graphcardright'>
          <img src='graph.png'></img>

        </div>
      </div>
    </div>
    </div>
  )
}
