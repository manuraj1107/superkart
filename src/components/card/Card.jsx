import React from 'react'
import './card.scss'

const Card = ({item}) => {

  const {id, imageUrl,brand, name,price,oldPrice, sizes} = item;

  const discount = (a,b) => {
   return (Math.round(100 - ((a / b) * 100)));
  }

  const sizeJoint = (a) => {
   return (a.join(","))
  }

  return (
    <div className='product-card-container'>
      <div className='image'>
      <img src={imageUrl} alt={`Image of ${brand} ${name}`} />
      </div>
        
        <div className='footer'>
           <div className='product-name'>
             <p className='brand'>{brand}</p>
             <p className='name'>{name}</p>
           </div>
          
          <div className='price'>
           <p className='new-price'>₹{price}</p>
           <p className='old-price'>₹{oldPrice}</p>
           <p className='discount'>{discount(price,oldPrice)}% off</p>
          </div>

          <div className='size'>
            <p>Size</p>
          {sizeJoint(sizes)}
            
          </div>
        </div>
    </div>
  )
}

export default Card