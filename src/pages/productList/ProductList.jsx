import Card from '../../components/card/Card'
import React from 'react'
import './productList.scss'
import { useFilterContext } from '../../contexts/filterContext'
import Sort from '../../components/sortButtons/Sort'

const ProductList = () => {

  const {filter_products} = useFilterContext();

  
  return (
    <div className='products-list'>
    <div className='filter-container'>
      <span>Clothing and Accessories</span>
      <Sort />
    </div>
    
    <div className='container'>
    { filter_products.length? (filter_products.map((product) =>  
        <Card key={product.id} item={product} />
      )) : (<h2 className='no-result'>No matching results</h2>)
      
    }
    </div>      
    </div>
  )
}

export default ProductList