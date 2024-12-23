import React from 'react'
import './Sectionthree.css'
import { FaDumbbell } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { GiBiceps } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";






export default function Sectionthree() {
  return (
    <div className='sectionthreecontainer'>
      <div className='upsectionthree'>
        <h1>The Best Programs We<br/> Offers For You</h1>
        <p>We offer a wide range of comprehensive fitness programs<br/>
        aesigne to cater to ina verals or alffitness levels.<br/> Our alm to help your achieve specific goals & maximize results.</p>

      </div>
      <div className='downsectionthree'>
        <div className="card1">
            <div className='cardinsidecontainer'>
            <p className='dumbbelliconrotate'><FaDumbbell /></p>
        <h2>Strength Training</h2>
        <p>our trainers will design that a progressive workout plan that proper achieve gains strength </p>
        <p className='learnmoresectionthree'>Learn More &nbsp;<FaArrowRight /></p>
            </div>
        



        </div>



        <div className="card2">
            <div className='cardinsidecontainer'>
            <p className='dumbbelliconrotate'><GrYoga /></p>
        <h2>Basic Yoga</h2>
        <p>This program combines yoga with cardio and strength traning to help loose weight & fitness</p>
        <p className='learnmoresectionthree'>Learn More &nbsp;<FaArrowRight /></p>


            </div>
        
        </div>
        <div className="card3">
        <div className='cardinsidecontainer'>
        <p className='dumbbelliconrotate'><GiBiceps />  </p>
        <h2>Body Building</h2>
        <p>For those looking to increase strength build lean muscle ,our strength and muscle</p>
        <p className='learnmoresectionthree'>Learn More &nbsp;<FaArrowRight /></p>


        </div>
        
        </div>


        <div className="card4">
        <div className='cardinsidecontainer'>
        <p className='dumbbelliconrotate'><FaPersonRunning /></p>
        <h2>Weight Loss</h2>
        <p>our weigntloss programs are designed to help you make sustainable lifestyle changes </p>
        <p className='learnmoresectionthree'>Learn More &nbsp;<FaArrowRight /></p>

        </div>
        
        </div>

      </div>
    </div>
  )
}
