import React from 'react'
import "../Style/Services.css"
import {FaBook} from "react-icons/fa"
import {RiSecurePaymentFill,RiCustomerServiceFill,RiExchangeBoxFill} from "react-icons/ri"


const Servics = () => {
  return (
  

        <div className='service-full-container'>

            <div className='service-first-container'>
             <p className='service-front'><FaBook className='service-icon'/><p></p>Easy Booking</p>
            </div>

            <div className='service-Second-container'>
                    <div className='service-Second-container-one'>
                    <p className='service-middle'><RiExchangeBoxFill className='service-icon'/>Return and exchange</p>
                    </div>

                    <div className='service-Second-container-Two'>
                    <p className='service-middle'><RiCustomerServiceFill className='service-icon'/>Customer service</p>
                    </div>
            </div>

            <div className='service-Third-container'>
            <p className='service-front'><RiSecurePaymentFill className='service-icon'/><p></p>Secure Payment</p>
            </div>

        </div>
  
  )
}

export default Servics