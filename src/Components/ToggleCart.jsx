import React from 'react'
import {GoPlus} from "react-icons/go"
import {FaMinus} from "react-icons/fa"

const ToggleCart = ({amount,setIncreasement,setDecrement}) => {
  return (
    <div className='toggle-cart-full'>
        <button onClick={setDecrement}><FaMinus/></button>
        <p> {amount} </p> 
        <button onClick={setIncreasement}><GoPlus/></button>

    </div>
  )
}

export default ToggleCart