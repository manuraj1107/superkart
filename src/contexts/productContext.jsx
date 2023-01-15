import {createContext, useContext, useEffect, useReducer, useState} from "react"
import reducer from "../utils/reducer/productReducer";
import SHOP_DATA from "../data/shop-data";

const AppContext  = createContext();

const initialState = {
    products: [],
}

const AppProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const [products] = useState(SHOP_DATA);
    
 useEffect(() => {
    dispatch({type: "SET_DATA", payload: products});
 },[])

    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
};


const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};