import React from "react";
import { Helmet } from "react-helmet";

import Login from "../components/common/Login";
function LoginPage() {
    return (
        <>
            <Helmet>
                <title>MediVault | Login</title>
            </Helmet>
            <Login />
        </>
    );
}

export default LoginPage;
