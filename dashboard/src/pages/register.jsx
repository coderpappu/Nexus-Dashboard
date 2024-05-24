import React from "react";
import { useState } from "react";
import { registerWithEmailPassword } from "../firebase";
import RegisterImg from "../data/signup.png";
import SignupForm from "../components/accounts/SignupForm";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  // register handler

  const registerHandler = (email, password) => {
    try {
      const user = registerWithEmailPassword(email, password);
      toast.success("Registration Successful!");
    } catch (error) {
      toast.error("Registration failed");
    }
  };
  return (
    <div className="flex flex-wrap bg-[#FCFCFC]  ">
      {/* image side  */}
      <div className="w-[80%] sm:w-[50%] md:w-[50%] mt-10  h-full ">
        <img
          src={RegisterImg}
          alt="login_image"
          className="w-full h-auto xl:w-[600px] xl:ml-[20%] "
        />
      </div>

      <SignupForm registerHandler={registerHandler} />
      <Toaster />
    </div>
  );
};

export default Register;
