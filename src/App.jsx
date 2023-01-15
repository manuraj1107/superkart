import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import ProductList from "./pages/productList/ProductList"
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import './index.scss'

function App() {

  const Layout = () => {
   return (
   <div>
     <Navbar />
     <div className="main">
      <LeftBar />
      <div style={{flex: 5}}>
        <ProductList />
      </div>
     </div>
    </div>
    )
  }

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
 ]);

  return (
     <div>
     <RouterProvider router={router} />
     </div>
  )
}

export default App
