// import React from 'react'
import React from 'react';
import { useState } from 'react';
// import  { useState } from "react";
// import '../css/Register.css'
import Register from './RegiterForm';
import SignUpForm from './signup';
export default function LoginPage() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <>
    <div className='bg-gray-100 flex justify-center items-center flex-col font-sans h-screen'>

    <div className="App">
    <h1 className='text-5xl font-bold'>Party Pro</h1>
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <Register />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 >Welcome Back!</h1>
              <p>
                To keep connected with us please login 
              </p>
              <button
                className="rounded-lg border border-solid border-red-600 bg-red-600 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Lets start journey with us!</p>
              <button 
                className=" rounded-lg border border-solid border-red-600 bg-red-600 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
                >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
                </div>
                </>
  );
}
