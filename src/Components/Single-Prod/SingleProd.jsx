import React, { useEffect } from 'react'
import "../Single-Prod/SingleProd.css"

const SingleProd = ({LoadedProduct}) => {
    useEffect(() => {
//console.log(LoadedProduct)
    }, [])
    
  return (
    <div className='single-product-cart'>
      <div className='product-img-wrapper'>
        <img src={LoadedProduct.image} alt="" />
        <div className="product-category">{LoadedProduct.category}</div>
      </div>

      <div className="Product-detail-wrapper">
      <div className="product-name">{LoadedProduct.title}</div>
      <div className="product-description">{LoadedProduct.description}</div>
      <div className="product-price-rating-wrapper">
        <div className="product-price">{LoadedProduct.price} $</div>
        <div className="product-rate">{LoadedProduct.rating.rate} Stars({LoadedProduct.rating.count})</div>
      </div>
      <div className="product-cart-button">
            <button className="cart-btn" id="addToCart">Add to Cart</button>
            <button className="cart-btn">Buy Now</button>
            </div>
      </div>
     
    </div>
  )
}

export default SingleProd