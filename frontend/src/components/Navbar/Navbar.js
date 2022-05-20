import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { useContext } from "react"
import { userContext } from "../../providers/AuthProvider";

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {

  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowSignUp, setIsShowSignUp] = useState(true);

  const { user, setUser } = useContext(userContext);
  return (
    <div className="nav">
      <div>
      <Link className="link" to={'/'}>
        <h2 className="nav--title"> What's Sup? </h2>
      </Link>
      </div>

      <div className="three-icons">
      <Link className="link-home" to={'/'}>
        <HiHome />
      </Link>

      {user.activeUser === false && user.mode === "" && <button className="loginicon" onClick={() => setUser(prev => ({ ...prev, mode: "SignIn"}))}>Login</button>}
      {user.activeUser === false && user.mode === "" && <button className="signupicon" onClick={() => setUser(prev => ({ ...prev, mode: "SignUp"}))}>Sign up</button>}      
      </div>

      {user.mode === "SignIn" && <Login />}
      {user.mode === "SignUp" && <SignUp />}
    </div>
  );
}