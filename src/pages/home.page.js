import React from 'react'
import { Helmet } from 'react-helmet'
import HomeComponent from '../components/home/home.component'
function HomePage() {
    return (
        <>
            <Helmet>
                <title>
                    MediVault | Home
                </title>
            </Helmet>
            <HomeComponent />
        </>
    )
}

export default HomePage