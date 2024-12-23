import React from 'react'
import './Sectionseven.css'
import { HiPaperAirplane } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";


export default function Sectionseven() {
  return (
    <div className='sectionsevencontainer'>
        
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <div className='upsectionseven'>
            <table>
                <tr className='headerssectionseven'>
                    <td>Companies</td>
                    <td>Categories</td>
                    <td>Help</td>
                    <td>Contact Us</td>
                    <td>Subscribe our NewsLetter</td>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>Basic yoga</td>
                    <td>Account</td>
                    <td><span className='phoneicon'><FaPhoneAlt /></span>&nbsp;&nbsp;&nbsp;+1(406 555-0120)</td>
                    <td rowSpan={3}>
                        <div className="searchbarcontainer">
                            <input type='text'></input>
                            <div className='searchbutton'>
                                <div className='paperairplane'>
                                    <p>&nbsp;<HiPaperAirplane /></p>
                                </div>
                            </div>
                        
                        </div>
                        <p>Never miss an update & news to your emal</p>

                    </td>
                </tr>
                <tr>
                    <td>Why Us</td>
                    <td>Strength Traning</td>
                    <td>Support Center</td>
                    <td><span className='messageicon'><FaMessage /></span>&nbsp;&nbsp;&nbsp;example@gmail.com</td>
                </tr>
                <tr>
                    <td>Security</td>
                    <td>Body Building</td>
                    <td>Privacy Policy </td>
                    <td rowSpan={3}><span className='locationicon'><MdLocationPin /></span>&nbsp;&nbsp;&nbsp;2464 Royal <br/>New Jersey 45463</td>
                    
                </tr>
                <tr>
                    <td>Partnership</td>
                    <td>Weight Loss</td>
                    <td>Weight Loss</td>
                    
                </tr>
                
                
            </table>
        </div>
        <hr/>
        <div className="downsectionseven">
            <h1><span className='dumbbelliconsectionseven'><FaDumbbell /></span>Fitnesxia</h1>
            <p className='copyrightpara'>@2023 DesignAxen. All Copyrights reserved</p>
            <p><FaFacebook /><FaInstagramSquare /><FaTwitter /><FaLinkedin /></p>
        </div>
      
    </div>
  )
}
