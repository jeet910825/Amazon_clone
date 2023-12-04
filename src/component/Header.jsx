import React from "react";
import "./Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./State Provider/stateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, users }] = useStateValue();
  const history = useNavigate();

  
  const handleLogin = () => {
    if (users) {
      auth.signOut();
      history('/')
    }
  };
  function findName() {
    const field = users.email.split("@");
    return field[0];
  }

  return (
    <div className="navbar-container">
      <div className="nav-first-section">
        <Link className="a" to={"/"}>
          <div className="brand-name">
            <h1>amazon</h1>
          </div>
        </Link>
        <div className="address-container">
          <div className="icon">
            <p></p>
            <LocationOnIcon fontSize="small" />
          </div>
          <div className="current-address">
            <div className="nav-top-row">Deliver to</div>
            <div className="nav-bottom-row">Koteshwara 576222</div>
          </div>
        </div>
      </div>
      <div className="nav-middle-section">
        <form className="nav-middle-section-form">
          <select name="All">
            <option defaultValue={"all"}>All Category </option>
            <option value={"mobile"}>Mobile</option>
            <option value={"apps"}>Apps & Game</option>
            <option value={"amazon-fasion"}>Amazon fashion</option>
          </select>
          <input type="text" placeholder="search"></input>
          <button>
            <SearchOutlinedIcon />
          </button>
        </form>
      </div>
      <div className="nav-end-section">
        <Link
          className="link nav-link"
          onClick={handleLogin}
          to={users ? "" : "/login"}
        >
          <div className="nav-top-row">{users ? findName(): "Hello"}</div>
          <div className="nav-bottom-row">{users ? "singOut": "signIn"}</div>
        </Link>
        <Link className="link nav-link" to={users?.email ? "/orders" : "/login"}>
          <div className="nav-top-row">Return</div>
          <div className="nav-bottom-row">&Order</div>
        </Link>
        <Link to="/checkout" className="link nav-link cart">
          <div className="cartNumber">{basket?.length}</div>
          <ShoppingCartIcon className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
