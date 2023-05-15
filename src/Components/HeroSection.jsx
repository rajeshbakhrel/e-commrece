import React from 'react'
import "../Style/HeroSection.css"
import {SlGraph} from "react-icons/sl"
import {FaLongArrowAltRight} from "react-icons/fa"
import image1 from "../Assects/hero.webp"
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();
  const goBack =()=>{
      navigate("/Products")
  }
  
  return (
    <div className='Hero-section-full-container'>
        
        <div className="hero-section-one">
            <p className='hero-section-icon-container'><SlGraph/></p>
            <p className='hero-section-welcome-container'>Ready For Shopping?</p>
            <h1 className='hero-section-title-container'>SO YOU <br/> HAVE MORE LATER</h1>
           <p className='hero-section-content-container'>Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. 
             Aperiam ea excepturi nemo iure molestiae!
             Ad sequi sunt laudantium accusantium id!</p>
            
            <button onClick={()=>goBack()
            } className='hero-section-button-container'>SHOP NOW <FaLongArrowAltRight/>
            </button>
        </div>

        <div className="hero-section-two">
        <div className="background-colour-section">

        <img src={image1} alt='image1' className='hero-image' />
        </div>
        </div>
        
    </div>
  )
}

export default HeroSection