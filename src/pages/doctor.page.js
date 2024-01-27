import React from 'react'
import { Helmet } from 'react-helmet'
import DoctorComponent from '../components/doctor/doctor.component'
function DoctorPage() {
    return (
        <>
            <Helmet>
                <title>
                    Doctor | login
                </title>
            </Helmet>
            <DoctorComponent />
        </>
    )
}

export default DoctorPage