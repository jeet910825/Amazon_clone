import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./State Provider/stateProvider";
import Checkout from "./Checkout";
import ShopingCartItem from "./ShopingCartItem";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import axios from "axios";
import { CardElement, useElements, useStripe , PaymentElement } from "@stripe/react-stripe-js";
function Payment() {
  const [{ basket, users }, dispatch] = useStateValue();
  const navigator = useNavigate();
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const getBasketTotal = (basket) => {
    return basket?.reduce((acc, cur) => acc + cur.amount, 0);
  };
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `https://amazonapi-production.up.railway.app/payments/create?total=${getBasketTotal(basket)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
    if(!users?.email || !basket?.length){
      navigator("/")
    }
  }, [basket,users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({paymentIntent}) => {
        console.log(paymentIntent)
        db.collection('users')
        .doc(users?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket:basket,
          amount:paymentIntent.amount/100,
          created:paymentIntent.created
        })
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type:"EMPTY_BASKET"
        })
        navigator("/orders");
      });

    //const payload = await stripe.
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link className="links" to="/checkout">
            {basket?.length}
          </Link>{" "}
          items )
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{users?.email}</p>
            <p>KSSIDC industiral area kamadhenu</p>
            <p>Haladi road, koteshwara</p>
            <p>kundapura - 576222</p>
            <p>udupi, karnataka</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((e) => {
              return (
                <ShopingCartItem
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  imag={e.imag}
                  amount={e.amount}
                />
              );
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <p style={{ fontSize: "1.25rem", fontWeight: "bolder" }}>
                  Order Total: $
                  {basket?.reduce((acc, cur) => acc + cur.amount, 0)}{" "}
                </p>
                <button disabled={processing || disabled || succeeded} >
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
