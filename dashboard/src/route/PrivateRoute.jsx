import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { Loader } from "rsuite";
import { Progress } from "rsuite";
import SpringLoader from "../components/loader/SpringLoader";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  const [spinLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {spinLoading ? (
        <SpringLoader />
      ) : user ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
