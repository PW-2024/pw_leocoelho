import React from "react";
import AuthLogin from "./authLogin";
import AuthLogout from "./authLogout";
import AuthProfile from "./authProfile";
import LoginWithGoogle from "./LoginWithGoogle";

function Header(){
    return(
        <div>
            <AuthLogin />
            <AuthLogout />
            <LoginWithGoogle />
            <AuthProfile />

        </div>
    )
}

export default Header;