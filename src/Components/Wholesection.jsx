import React from 'react'
import './Wholesection.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Sectiontwo from './Sectiontwo'
import Sectionthree from './Sectionthree'
import Sectionfour from './Sectionfour'
import Sectionfive from './Sectionfive'
import Sectionsix from './Sectionsix'
import Sectionseven from './Sectionseven'

export default function Wholesection() {
  return (
    <div className='wholesectioncontainer'>
        <div className="middlesectioncontainerone">
            <div className="middlesectiononecontents">
              <Navbar/>
              <Hero/>

            </div>
        </div>
        <div className="middlesectioncontainertwo">
          <div className="middlesectiontwocontents">
          <Sectiontwo/>
          </div>
        </div>
        <div className="middlesectioncontainerthree">
          <div className="middlesectionthreecontents">
            <Sectionthree/>
          </div>
        </div>
        <div className="middlesectioncontainerfour">
          <div className='middlesectionfourcontents'>
            <Sectionfour/>
          </div>
        </div>
        <div className="middlesectioncontainerfive">
          <div className='middlesectionfivecontents'>
            <Sectionfive/>
          </div>
        </div>
        <div className="middlesectioncontainersix">
          <div className='middlesectionsixcontents'>
            <Sectionsix/>
          </div>
        </div>
        <div className="middlesectioncontainerseven">
          <div className='middlesectionsevencontents'>
            <Sectionseven/>
          </div>
        </div>
        
      
    </div>
  )
}
