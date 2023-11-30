import React, { useEffect } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { auth } from "./firebase.js";
import { useStateValue } from "./component/State Provider/stateProvider";
import Payment from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./component/Order.jsx";
import Orders from "./component/Orders.jsx";

const promise = loadStripe(
  "pk_test_51N9ozLSCTLfVKXhHW2Ar31rbcfGrvFVwDQutCoKzGXHT4I8fucWCr2oUAw5KNfmPT4sBsoAKMfQHpTErGCMUdzgp00CsnntGTy"
);
function App() {
  const [{ users }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user log out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [users]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header /> <Home />
              </div>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route path="/orders" element={<>
            <Header />
            <Orders />
          </>} />
          <Route
            path="payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
