import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  if (myUser) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
};
export default PrivateRoute;
