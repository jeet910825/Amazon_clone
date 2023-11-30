import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "./State Provider/stateProvider";
import Order from "./Order";


function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, users }, dispatch] = useStateValue();

  useEffect(() => {
    if (users) {
        db.collection("users")
        .doc(users?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
   
  }, [users]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders.map(item=>(
            <Order order={item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
