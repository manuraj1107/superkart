import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './contexts/productContext'
import { FilterContextProvider } from './contexts/filterContext'


ReactDOM.createRoot(document.getElementById('root')).render(
 <AppProvider>
   <FilterContextProvider>
     <App />
   </FilterContextProvider>
  </AppProvider>

)
