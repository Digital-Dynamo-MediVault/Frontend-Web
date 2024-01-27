import React from "react";
import { Helmet } from "react-helmet";
import Admin from "../components/hospital/admin/admin.component";

function HospitalAdminPage() {
    return (
        <>
            <Helmet>
                <title>MediVault | HospitalAdmin</title>
            </Helmet>

            <Admin />

        </>
    );
}

export default HospitalAdminPage;
