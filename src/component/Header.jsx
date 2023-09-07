import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
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
          <span className="headerOptionLineOne">Hello</span>
          <span className="headerOptionLineTwo">
           Sign In
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
      <div className="shopingCart_img">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
