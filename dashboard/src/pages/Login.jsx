import React from "react";
import LoginImg from "../data/login.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithGoogle, loginWithEmailAndPassword } from "../firebase";
import SignInForm from "../components/accounts/SignInForm";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const signWithEmailAndPassword = async (email, password) => {
    console.log(email, password);
    try {
      let user = await loginWithEmailAndPassword(email, password);
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      toast.error("Email or Password Doesn't Match");
    }
  };
  const googleSignHandler = async () => {
    let user = await signInWithGoogle();
    console.log(user);
  };

  return (
    <div className="flex flex-wrap justify-center bg-[#FCFCFC]">
      {/* image side  */}
      <div className="w-[80%] sm:w-[50%] md:w-[50%]  h-full">
        <img
          src={LoginImg}
          alt="login_image"
          className="w-full h-auto xl:w-[600px] xl:ml-[20%] "
        />
      </div>

      {/* sign in  */}
      <SignInForm
        dataLoginHandler={signWithEmailAndPassword}
        googleHandler={googleSignHandler}
      />
    </div>
  );
};

export default Login;
