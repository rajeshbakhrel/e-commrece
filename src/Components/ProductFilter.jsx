import React from 'react'
import "../Style/ProductFilter.css"

const ProductFilter = () => {
  return (
    <div className='product-filter-full-container'>
        
        <div className="filter-search">
        <input type='search' placeholder='SEARCH' />
        </div>
        
       
       <div className="category-list">
        <p><span>Category</span></p>
        <ul>
            <li>All</li>
            <li>Mobile</li>
            <li>laptop</li>
            <li>Computer</li>
            <li>Accessories</li>
            <li>Watch</li>
        </ul>
       </div>

       <div className="company">
        <p><span>Company</span></p>
        <input/>
       </div>

       <div className="colors">
        <p><span>Colors</span></p>
        0 0 0 0 0
       </div>

       <div className="Price">
        <p><span>Price</span></p>
        bar==========
       </div>

        <div className="filter-button">
        <button>Clear Filter</button>
        </div>
       
        
    </div>
  )
}

export default ProductFilter