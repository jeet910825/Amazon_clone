import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./State Provider/stateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, users }] = useStateValue();

  const handleLogin = () => {
    if (users) {
      auth.signOut();
    }
  };
  function findName() {
    const field = users.email.split("@");
    return field[0];
  }

  return (
    <div className="header">
      <Link to="/">
         <img src={require("../img/amazon.png")} className="logo" alt="amazon" />
      </Link>

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
            <Link
              className="link"
              onClick={handleLogin}
              to={users ? "" : "/login"}
            >
              {users ? findName() : "Hello"}
            </Link>
          </span>
          <span className="headerOptionLineTwo">
            <Link
              onClick={() => {
                handleLogin();
              }}
              className="link"
              to={users ? "" : "/login"}
            >
              {users ? "singOut" : "signIn"}
            </Link>
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
        <div className="outer">
          <Link to="/checkout" className="link shopingCart_img">
            <div className="cartNumber">{basket?.length}</div>
            <ShoppingCartIcon className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
