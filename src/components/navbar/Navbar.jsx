import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span>SuperKart</span>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search for products, brands and more" />
          <SearchRoundedIcon color='primary' />
        </div>
      </div>
      <div className="right">
        <p>Login</p>
        <span>Become a Seller</span>
        <div className="more">
          <span>More</span>
          <ExpandMoreOutlinedIcon fontSize='small' sx={{ color: 'white'}} />
        </div>
        <div className="cart">
          <ShoppingCartRoundedIcon sx={{ color: 'white'}} fontSize='small' />
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar