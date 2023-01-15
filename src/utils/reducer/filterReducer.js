const FilterReducer = (state, action) => {

  switch (action.type){

    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
        };

    case "GET_SORT_VAULE":
        
        return{
            ...state,
            sorting_value: action.payload,
        }    


    case "SORTING_PRODUCTS":
        let newSortData;
        

        const {filter_products, sorting_value} = state;
        let tempSortProduct = [...filter_products];

    
        const sortingProducts = (a,b) => {
            if (sorting_value === "lowest") {
            return a.price - b.price;
          }
  
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
        }

        newSortData = tempSortProduct.sort(sortingProducts)
    return{
        ...state,
        filter_products: newSortData,
    }

    case "UPDATE_FILTERS_VALUE":
        const {name,value} = action.payload;

        return{
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            }

        }
     
    case "FILTER_PRODUCTS":
        let {all_products} = state;
        let tempFilterProduct = [...all_products];
        
         const {text, ideal, brand, size} = state.filters;

         if(text) {
            tempFilterProduct =tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
            })
         }

         if(ideal !== 'all') {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.ideal === ideal;
            });
         }

         if(brand !== 'all') {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.brand === brand;
            });
         }

         if(size !== 'all') {
            tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.sizes.includes(size)
        );
         }

        return {
            ...state,
            filter_products: tempFilterProduct,
        };

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    ideal: "all",
                    brand: "all",
                    size: "all",
                }
            }

    default: 
    return state;
  }

}

export default FilterReducer