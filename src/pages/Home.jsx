import React from 'react'
import "../Style/Home.css"
import HeroSection from '../Components/HeroSection'
import Servics from '../Components/Servics'
import FeatureProducts from '../Components/FeatureProducts'


const Home = () => {
  return (
    <div className='home-full-container'>
        <div className="home-hero-section">
        <HeroSection/>

        </div>

        <div className="home-steps-purchase">
          <Servics/>
          
        </div>

        <div className="feature-products-section">
          <FeatureProducts/>
        </div>
     
    </div>
  )
}

export default Home