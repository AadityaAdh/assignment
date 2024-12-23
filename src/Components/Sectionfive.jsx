import React from 'react'
import './Sectionfive.css'
import { GiCheckMark } from "react-icons/gi";


export default function Sectionfive() {
  return (
    <div>
      <div className="upsectionfive">
        <h1>Choose The Best Plan</h1>
        <p>Choose your that's right right far your growing team. Simple pricing & No hidden charges.</p>
        <div className="monthlyannualcontainer">
            <div className='monthly'><p >Monthly</p></div>
            <div className='annual'><p >Annual</p></div>
        </div>

      </div>
      <br/>
      <div className="downsectionfive">
        <div className="card1sectionfive">
            <div className="card1sectionfivecontent">
                <h2 className='headercardsectionfive'>Discover</h2>
                <p><strong>$99</strong>/per month</p>
                <p><GiCheckMark />5 Classes per month </p>
                <p> <GiCheckMark />4 group Class monthly </p>
                <p className='makemefaint'><GiCheckMark />Online class access </p>
                <p className='makemefaint'><GiCheckMark />E-book fitness guide </p>



                <button>Choose Plan</button>
            </div>
        </div>
        <div className="card2sectionfive">
        <div className="card2sectionfivecontent">
        <h2 className='headercardsectionfive'>Enterprise</h2>
                <p><strong>$299</strong>/per month</p>
                <p><GiCheckMark />10 Classes per month </p>
                <p><GiCheckMark />8 group Class monthly </p>
                <p><GiCheckMark />Online class access </p>
                <p><GiCheckMark />E-book fitness guide </p>
                <p><GiCheckMark />7 Extra fitness training</p>

                <button>Choose Plan</button>
        </div>
        </div>
        <div className="card3sectionfive">
        <div className="card3sectionfivecontent">
        <h2 className='headercardsectionfive'>Professional</h2>
                <p><strong>$99</strong>/per month</p>
                <p><GiCheckMark />7 Classes per month </p>
                <p><GiCheckMark />6 group Class monthly </p>
                <p><GiCheckMark />Online class access </p>
                <p className='makemefaint'><GiCheckMark />E-book fitness guide </p>

                <button>Choose Plan</button>
        </div>
        </div>

      </div>
    </div>
  )
}
