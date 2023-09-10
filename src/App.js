import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
