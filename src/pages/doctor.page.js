import React from "react";
import { Helmet } from "react-helmet";
import Doctor from "../components/doctor/doctor.component";
function DoctorPage() {
  return (
    <>
      <Helmet>
        <title>Doctor | login</title>
      </Helmet>
      <Doctor />
    </>
  );
}

export default DoctorPage;
