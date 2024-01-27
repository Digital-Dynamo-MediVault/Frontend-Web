import React from "react";
import { Helmet } from "react-helmet";
import AboutComponent from "../components/home/home.component";
import Hospital from "../components/hospital/hospital.component";
function HospitalPage() {
    return (
        <>
            <Helmet>
                <title>MediVault | Hospital</title>
            </Helmet>
            <Hospital />
        </>
    );
}

export default HospitalPage;
