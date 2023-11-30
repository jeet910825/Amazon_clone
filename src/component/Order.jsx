import React from "react";
import moment from "moment";
import Checkout from "./Checkout";
import "./Order.css"
import ShopingCartItem from "./ShopingCartItem";

function Order({order}) {
  return (
    <div className="order">
      <h2>Orders</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
        <p className="order_id">
            <small>{order.id}</small>
        </p>
        {console.log(order)}
        {order.data.basket?.map(item=>(
            <ShopingCartItem
                id={item.id}
                title={item.title}
                imag={item.imag}
                amount ={item.amount}
                hideButton={true}
            />
        ))}
        <h3 className="order_total" style={{fontWeight:"bolder"}}>Total : $ {order.data.basket?.reduce((acc, cur) => acc + cur.amount, 0)}{" "}</h3>
    </div>
  );
}

export default Order;
