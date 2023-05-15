import React, { useState } from 'react'
import "../Style/Navbar.css"
import { NavLink } from 'react-router-dom'
import {RiLogoutBoxLine} from "react-icons/ri"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"


const Navbar = () => {

  const[isMobile , setIsMobile]=useState(false)
  return (
    <div className= {isMobile?'navbar-full-container-responsive':'navbar-full-container'} >
            <div className={isMobile?"navbar-logo-responsive":"navbar-logo"}>
            <NavLink to='/' className='nav-link-name' onClick={()=>setIsMobile(false)}>
              <button className='navbar-btton-hamro'>HAMRO</button>
              <button className='navbar-btton-Store'>STORE <span>.</span></button>
            </NavLink>

            <div className="responsive-content-button">

            <p className={isMobile?"close-icon-responsive":"close-icon"} onClick={()=>setIsMobile(false)}>
                  <CgClose/>
              </p>

              <p className={isMobile?'hambar-icon-responsive':'hambar-icon'} onClick={()=>setIsMobile(true)} >
                  <GiHamburgerMenu/>
              </p>

              </div>
            </div>


              


            <div className={isMobile?"navbar-navigation-responsive":"navbar-navigation"}>
         
               <NavLink to='/' className='nav-link-navbar' onClick={()=>setIsMobile(false)}>HOME</NavLink>
               <NavLink to='/About' className='nav-link-navbar' onClick={()=>setIsMobile(false)}>ABOUT</NavLink>
               <NavLink to='/Products' className='nav-link-navbar' onClick={()=>setIsMobile(false)}>PRODUCTS</NavLink>
               <NavLink to='/Contact' className='nav-link-navbar' onClick={()=>setIsMobile(false)}>CONTACT</NavLink>
               
              <button className='nav-link-login-button' onClick={()=>setIsMobile(false)}>Login <RiLogoutBoxLine/></button>


              <p className='cart-box' onClick={()=>setIsMobile(false)}>
               <AiOutlineShoppingCart/>
               <span>0</span>
              </p>

              
      
            </div>

      

    </div>
  )
}

export default Navbar