import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function setEmail(e) {
    setUser((p) => {
      return {
        ...p,
        email: e.target.value,
      };
    });
  }
  function setPassword(e) {
    setUser((p) => {
      return {
        ...p,
        password: e.target.value,
      };
    });
  }
  return (
    <div className="loginPage">
      <Link to="/">
        <div className="brandLogo">
          <img
            className="brandLogo"
            src="https://th.bing.com/th/id/R.217d03013c51c76db7cf0e9b50154d4b?rik=kza5n1Pb5sH8PA&riu=http%3a%2f%2fineo.fo%2fwp-content%2fuploads%2f2018%2f01%2famazon-logo.png&ehk=jtd1fTo4FU6eE1%2fzl%2bsCxQycBPAlR%2b7MRW63mSWc9v4%3d&risl=&pid=ImgRaw&r=0 "
            alt="brandImage"
          />
        </div>
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h5>E-mail</h5>
          <input type="text" value={user.email} onChange={setEmail} />
          <h5>Password</h5>
          <input type="password" value={user.password} onChange={setPassword} />
          <button>Sign In</button>
          <div className="registerCondition">
            <p>Read the term and conditions before registration to the fake amazon clone</p>
            <button className="registration">Create an account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
