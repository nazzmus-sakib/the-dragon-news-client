import React, { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Privateroute = ({ children }) => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();

  const { user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default Privateroute;
