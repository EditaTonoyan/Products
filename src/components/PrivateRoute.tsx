import React from "react";
import { Route } from "react-router-dom";
// import { useAuth } from "../AuthProvider/AuthProvider";

export const PrivateRoute = ({ element: Component, ...rest }: any) => {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={
        (props: any) => (isAuthenticated ? <Component {...props} /> : "")
            // (
            // //   <Redirect to={{ pathname: "/login" }} />
            // )
      }
    />
  );
};
