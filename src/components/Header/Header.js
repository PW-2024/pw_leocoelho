import React from "react";
import AuthLogin from "./authLogin";
import AuthLogout from "./authLogout";
import AuthProfile from "./authProfile";

function Header(){
    return(
        <div>
            <AuthLogin />
            <AuthLogout />
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <AuthProfile />

        </div>
    )
}

export default Header;