import React from "react";
import "./ShopingCartItems.css";
import { useStateValue } from "./State Provider/stateProvider";

function ShopingCartItem({ id, title, imag, amount, hideButton }) {
  const [state, dispatch] = useStateValue();
  const removeItemFormBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cartProducts">
      <img src={imag} alt="imgae" />
      <div className="cartProduct_price">
        <div className="cartProduct_info">
          <p>{title}</p>
        </div>
        <div>
          <h3>$ {amount}</h3>
          {!hideButton && (
            <button className="removeFromCart" onClick={removeItemFormBasket}>
              remove item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopingCartItem;
