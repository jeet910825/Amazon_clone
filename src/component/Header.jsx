import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./State Provider/stateProvider";

function Header() {
  const [{basket}]=useStateValue();
  return (
    <div className="header">
    <Link to='/'><div className="logo"></div></Link>
      
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search of item"
        ></input>
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="headerOptionLineOne">
          <Link className="link" to="/login">Hello</Link></span>
          <span className="headerOptionLineTwo">
           <Link className="link" to = "/login">Sign In</Link>
          </span>
        </div>
        <div className="header_option">
          <span className="headerOptionLineOne">Return</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
      </div>
      <div className="outer" >
      <Link to="/checkout" className="link shopingCart_img">
      <div className="cartNumber">{basket?.length}</div>
        <ShoppingCartIcon className="icon"/>
      </Link>
      
      </div>
    </div>
  );
}

export default Header;
