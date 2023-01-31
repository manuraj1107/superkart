import React, { useState } from 'react'
import { useFilterContext } from '../../contexts/filterContext';
import './sort.scss'

const Sort = () => {

  const {sorting} = useFilterContext();
   const [clicked, setClicked] = useState(false);
   const [clicked2, setClicked2] = useState(false);

   const highestClick = () =>{
      if(clicked == false && clicked2 == false){
        setClicked2(!clicked2)
      }

      else if(clicked == true && clicked2 == false){
        setClicked(!clicked);
        setClicked2(!clicked2);
      }
   }
   const lowestClick = () =>{
    if(clicked == false && clicked2 == false){
        setClicked(!clicked)
      }

      else if(clicked == false && clicked2 == true){
        setClicked(!clicked);
        setClicked2(!clicked2);
      }  
   }

   const underlined = () => {
    setClicked(!clicked);
   }
  return (
    <div className='price-filter' id='sort'>
        <p>Sort By</p>
        <form className='price-filter' action='#' onClick={sorting}>
            <option className={clicked? 'filter_blue': 'filter'} value="lowest" onClick={lowestClick}>Price -- Low to High</option>
            <option className={clicked2? 'filter_blue': 'filter'} value="highest" onClick={highestClick}>Price -- High to Low</option>
            
        </form>
      </div>
  )
}

export default Sort