import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {/* Ensure this div is used for a specific purpose, or consider removing it if unnecessary */}
      <div id="my-signin2"></div>
    </>
  );
};

export default AuthLogin;
