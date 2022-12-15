import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../ReactRouter/MainRouter";

const Signup = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [mobile, SetMobile] = useState("");
  const [password, SetPassword] = useState("");
  const [verifyPassword, SetVerifyPassword] = useState("");
  const history = useHistory();
  const formHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    if (email.trim() === "") {
      return;
    }
    if (password !== verifyPassword) {
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, mobile, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
        history.push("/signin");
        }else{
          alert('User Already Exists');
        }
      });
  };

  return (
    <>
      <div className='Signin'>
        <div className='Form'>
          <h1> Sign Up</h1>
          <form onSubmit={formHandler}>
            <input
              className='Forminput'
              type='text'
              value={name}
              onChange={(e) => SetName(e.target.value)}
              placeholder='name'></input>
            <input
              className='Forminput'
              type='email'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              placeholder='email'></input>
            <input
              className='Forminput'
              type='number'
              value={mobile}
              onChange={(e) => SetMobile(e.target.value)}
              placeholder='mobile'></input>
            <input
              className='Forminput'
              type='password'
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              placeholder='password'></input>
            <input
              className='Forminput'
              type='password'
              value={verifyPassword}
              onChange={(e) => SetVerifyPassword(e.target.value)}
              placeholder='confirm password'></input>
            <button
              className='Button'
              type='submit'>
              Signup
            </button>
            <span className="acc">already have an account?</span>
            <Link to='/signin'>Signin</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
