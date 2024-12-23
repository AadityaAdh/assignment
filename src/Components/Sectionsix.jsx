import React from 'react'
import './Sectionsix.css'
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";




export default function Sectionsix() {
  return (
    <div className='sectionsixcontainer'>
      <div className="leftsectionsix">
        <h1>What Our Happy Clients <br/>Say About Us</h1>
        <p>Ive been a member of Fitness Within for about 6 months<br/>
        now and dosolutely love it. The trainers are so motivate<br/> and they really help to reach fitness goals.</p>
        <div className='bottomleftsectionsix'>
            <img src='user1.jpeg' height={30} width={30}></img>
            <img src='user2.jpg' height={30} width={30}></img>
            <img src='user3.jpeg' height={30} width={30}></img>
            <img src='user4.jpg' height={30} width={30}></img>
            

            <p className='sectionsixstar'>&nbsp;&nbsp;&nbsp;&nbsp;<FaStar/></p>

            <p className='makemewhite'>4.9(490 Reviews)</p>



            
        </div>
      </div>
      <div className="midsectionsix">
        <img src='curvedarrow.png'></img>
        
      </div>
      <div className="rightsectionsix">
        <div className="leftcardsectionsix">
            <p><FaArrowLeftLong /></p>

        </div>
        <div className="cardsectionsix">
          
            <div className="cardcontentsectionsix">
                <div className="personandposition">
                    <img src='user1.jpeg'></img>
                    <p>&nbsp;&nbsp;<strong>Farahan Rio</strong><br/>&nbsp;&nbsp;Happy customer</p>
                </div>
                <p className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p>Ive been coming to this cymors year now ane
                Ive never been in better shape. the trainers are amazing and they always push me be my best.
                I'm so glad to this gym.</p>

            </div>
        </div>
        <div className="rightcardsectionsix">
            <p><FaArrowRight /></p>

            
        </div>
    
      </div>
    </div>
  )
}
