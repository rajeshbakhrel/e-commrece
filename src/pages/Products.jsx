import React from 'react'
import "../Style/Product.css"
import ProductFilter from '../Components/ProductFilter'
import ProductUpperFilter from '../Components/ProductUpperFilter'
import ProductContainer from '../Components/ProductContainer'


const Products = () => {



  return (
    <div className='product-page-full-container'>
        <div className="filter-side-full-container">
            <ProductFilter/>
        </div>

        <div className="product-display-side">
            <div className="product-display-upper-filter">
              <ProductUpperFilter/>
            </div>
            
            <div className="product-display-lower-container">
              <ProductContainer/>
            </div>

        </div>
      
      
      
      </div>
  )
}

export default Products