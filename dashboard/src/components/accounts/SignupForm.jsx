import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toaster } from "react-hot-toast";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";

const SignupForm = ({ mail, pass, registerHandler }) => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(LuEyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(LuEye);
      setType("text");
    } else {
      setIcon(LuEyeOff);
      setType("password");
    }
  };

  return (
    <div className="w-full md:w-[50%]  h-full pt-6 xl:pt-10 px-3 sm:px-10 md:px-5">
      <p className="absolute right-8 lg:right-3 xl:right-16 2xl:right-[15%] 2xl:text-md text-[#a8a8a8]">
        Do you have an account?{" "}
        <Link to="/login" className="text-[#61638A]">
          Sign In Now
        </Link>
      </p>
      <h2 className="text-2xl font-semibold pt-16 mb-6">
        Account <label className="text-[#61638A] font-bold">Register</label>{" "}
      </h2>
      <div className="py-4 md:w-full lg:w-[400px]">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6  characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            registerHandler(values.email, values.password);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="" className="text-md text-[#a8a8a8]">
                Username or Email Address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="coder@gmail.com"
                className="w-[100%] h-12 border-1 border-[#ddd]	rounded-[5px] mt-1 mb-3 px-1"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-[red]"
              />
              <label htmlFor="" className="text-md text-[#a8a8a8]">
                Password
              </label>
              <div className="mb-4 flex">
                <Field
                  type={type}
                  name="password"
                  autoComplete="current-password"
                  className="w-[100%] h-12 border-1 border-[#ddd]	rounded-[5px] mt-1 mb-3 px-1"
                  placeholder="12345678"
                />
                <span
                  className="flex justify-around items-center"
                  onClick={handleToggle}
                >
                  {type !== "password" ? (
                    <LuEye className="absolute mr-10" />
                  ) : (
                    <LuEyeOff className="absolute mr-10" />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-[red]"
              />

              <button
                className="px-10 py-2 lg:px-16 lg:py-3 bg-[#61638A] rounded-md text-white mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
              <Toaster position="bottom right" />
              {/* <button
                className="px-6 py-2 lg:px-12 lg:py-3 ml-2 bg-[#0F9D58] rounded-md text-white mt-4"
                onClick={googleHandler}
              >
                Sign In Google
              </button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
