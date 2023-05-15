import React from 'react'
import {useProductCustom} from "../Context/ProductContex"
import SingleCart from './SingleCart'
import "../Style/FeatureProduct.css"

const FeatureProducts = () => {

 const {isLoading, featureProducts}=useProductCustom()

//  console.log(featureProducts)


  if(isLoading){

    return <div><h1>...is loading....</h1></div>
  }

  return (
    <div className='featuturProducts-full-container'>
        <div className="title-feature-product">

          <p>Check Now</p>

            <h1> Our Feature Services</h1>
        </div>
 
        <div className="content-feature-products">
          

        {
        featureProducts.map((currElem)=>{
          return(
            <SingleCart key={currElem.id} {...currElem} />
          )
          
        })}

        </div>
       
    </div>
  )
}

export default FeatureProducts