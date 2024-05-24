import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading.......</p>;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
