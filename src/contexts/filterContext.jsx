import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../utils/reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: "all",
    filters: {
        text: "",
        ideal: "all",
        brand: "all",
        size: "all",
    }
}

export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


   // sorting function

   const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({type: "GET_SORT_VAULE", payload: userValue});

   };

   // update the filter values

   const updateFilterValue = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    return dispatch({type:"UPDATE_FILTERS_VALUE", payload: {name, value}})
   }

   // clear the filters
   const clearFilters = () => {
    dispatch({type: "CLEAR_FILTERS"})
   }

   useEffect(() => {
     dispatch({type: "FILTER_PRODUCTS"})
     dispatch({type: "SORTING_PRODUCTS"})
   }, [products, state.sorting_value, state.filters])


    useEffect(() => {
      dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products])

   return (
   <FilterContext.Provider value={{...state, sorting, updateFilterValue, clearFilters}}>
     {children}
   </FilterContext.Provider>
   )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}