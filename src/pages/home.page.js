import React from 'react'
import { Helmet } from 'react-helmet'
import AboutComponent from '../components/home/home.component'
function HomePage() {
    return (
        <>
            <Helmet>
                <title>
                    MediVault | Home
                </title>
            </Helmet>
            <AboutComponent />
        </>
    )
}

export default HomePage