import React, { useState } from 'react'
import { useFilterContext } from '../../contexts/filterContext'
import ArrowRight from '@mui/icons-material/KeyboardArrowRightOutlined';
import ArrowUp from '@mui/icons-material/KeyboardArrowUpOutlined';
import './leftBar.scss'

const LeftBar = () => {

 const [idealActive, setIdealActive] = useState(false);
 const [brandActive, setBrandActive] = useState(false);
 const [sizeActive, setSizeActive] = useState(false);

  const {
    all_products,
    filters: {ideal, brand, size},
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // TO GET THE UNIQUE DATA OF EACH FIELDS

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
       return curElem[property];
    });

    if(property === 'sizes'){
      newVal = newVal.flat();
    }
      
   return (newVal = ["all" , ...new Set(newVal)]);
   
   
  };

  // For getting UNIQUE DATA

  const categoryData = getUniqueData(all_products, "ideal");
  const brandData = getUniqueData(all_products, "brand");
  const sizeData = getUniqueData(all_products, "sizes");

  
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
        
          <div className="filter">
            <p>Filters</p>
            <button className='clear-filter' onClick={clearFilters}>CLEAR ALL</button>
          </div>
          
          <hr />
          <span onClick={(e) => setIdealActive(!idealActive)}>{idealActive? (<p style={{display:'flex', alignItems:'center'}}><ArrowUp />IDEAL FOR</p>) :(<p style={{display:'flex', alignItems:'center'}}><ArrowRight />IDEAL FOR</p>)}</span>
          { idealActive &&
            (categoryData.map((curElem, index) => {
                 return(
                 <button key={index} type="button" name='ideal'
                 value={curElem}
                 onClick={updateFilterValue} style={{backgroundColor: 'transparent',padding: '6px 16px', textAlign:"left", fontSize:'14px', border:'none', }}
                 >{curElem}</button>
      
                 )
            }))
          }
          
        </div>
        
        <hr />
        <div className="menu">
          <span onClick={(e) => setBrandActive(!brandActive)}>{brandActive? (<p style={{display:'flex', alignItems:'center'}}><ArrowUp />BRAND</p>) :(<p style={{display:'flex', alignItems:'center'}}><ArrowRight />BRAND</p>)}</span>
          {brandActive &&
            (brandData.map((curElem, index) => {
                 if(curElem === "all"){
                  return (
                    <button key={index} type="button" name='brand'
                 value={curElem}
                 onClick={updateFilterValue} style={{backgroundColor: 'transparent',padding: '6px 16px', textAlign:"left", fontSize:'12px', border:'1px solid lightblue',width:'max-content', borderRadius:'30px',  }}
                 >&#10005; Clear all </button>
                  )
                 }

                 return(
                 <button key={index} type="button" name='brand'
                 value={curElem}
                 onClick={updateFilterValue} style={{backgroundColor: 'transparent',padding: '6px 16px', textAlign:"left", fontSize:'14px', border:'none', }}
                 >{curElem}</button>
      
                 )
            }))
          }


          
        </div>
        <hr />
        <div className="menu">
          <span onClick={(e) => setSizeActive(!sizeActive)}>{sizeActive? (<p style={{display:'flex', alignItems:'center'}}><ArrowUp />SIZE</p>) :(<p style={{display:'flex', alignItems:'center'}}><ArrowRight />SIZE</p>)}</span>

          {
           sizeActive && (sizeData.map((curSize, index) => {
              if(curSize === "all"){
                  return (
                    <button key={index} type="button" name='size'
                 value={curSize}
                 onClick={updateFilterValue} style={{backgroundColor: 'transparent',padding: '6px 16px', textAlign:"left", fontSize:'12px', border:'1px solid lightblue',width:'max-content', borderRadius:'30px',  }}
                 >&#10005; Clear all </button>
                  )
                 }

              return (
                
                <button key={index} type="button" name='size'
                value={curSize}
                onClick={updateFilterValue} style={{backgroundColor: 'transparent',padding: '6px 16px', textAlign:"left", fontSize:'14px', border:'none', }}
                >{curSize}</button>
     
                )
            }))
          }
          
        </div>
        
        
      </div>
    </div>
  )
}

export default LeftBar