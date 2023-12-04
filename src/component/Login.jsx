import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
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
  async function register(e) {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async (auth) => {
        if (await auth) {
          alert("registered successfully")
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  }
  async function signIn(e) {
    e.preventDefault();
     auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(async (e) => {
        if (e) {
          await history("/");
          alert("login successfully")
        }
      })
      .catch((error) => {
        alert(error.message)
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
        <form>
          <h5 className="form-name">Email</h5>
          <input type="text" value={user.email} onChange={setEmail} />
          <h5 className="form-name">Password</h5>
          <input type="password" value={user.password} onChange={setPassword} />
          <button onClick={signIn}>Sign In</button>
          <div className="registerCondition">
            <p>
              Read the term and conditions before registration to the fake
              amazon clone
            </p>
            <button className="registration" onClick={register}>
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
