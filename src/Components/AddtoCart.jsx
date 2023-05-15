import React, { useState } from 'react'
import "../Style/AddToCart.css"
import {GiCheckMark} from "react-icons/gi"
import ToggleCart from './ToggleCart'


const AddtoCart = ({product}) => {

    const {id,stock,colors}=product

   const [color , setColor]= useState(colors[0])

   const [amount ,setAmount]= useState(1)

   const Increment =()=>{
    amount<=stock ? setAmount(amount+1): setAmount(amount)
   }
   
   const Decrement =()=>{
    amount>1 ? setAmount(amount-1) : setAmount(1)
   }

  return (
    
        <div className="add-to-cart-container">
        <div className="colour-single-product">
          
              colour:


               
                { colors.map((curColor,index)=>{

                    return (
                        <button 
                        key={index} 
                        onClick={()=>{setColor(curColor)}}
                        className={ curColor === color ?'button-style active':'button-style '}
                        style={{backgroundColor:curColor}}>


                            {color=== curColor ? <GiCheckMark className='color-icon' />: null }
                        </button>
                    )
                })}


              
          


        </div>


            <div className="toggle-cart-content">

                    <ToggleCart amount={amount}
                    setIncreasement={Increment}
                    setDecrement={Decrement}
                    
                    />


            </div>


            <div className="cart-button">

                <button> ADD TO CART</button>
            </div>


        </div>
        

   
  )
}

export default AddtoCart