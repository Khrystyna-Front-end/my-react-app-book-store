import React from "react";
import { Route, Navigate } from "react-router-dom";

// ProtectedRoute component
const ProtectedRoute = ({ path, element: Component, ...rest}) => {
  const username = localStorage.getItem("Username");
  return   <Route {...rest}>
      {username ? (
        <Component {...rest} />) : (<Navigate to="/" />)}</Route>;
}
export {ProtectedRoute};
