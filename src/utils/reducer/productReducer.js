const ProductReducer = (state, action) => {

switch(action.type){
  
    case "SET_DATA":
        const genderData = action.payload.filter((curElem) => {
            return curElem.ideal === 'all';
        })

        return {
            ...state,
            products: action.payload,
            filterProducts: [genderData],
        }
        
    default: 
    return state;    
}

}
export default ProductReducer;